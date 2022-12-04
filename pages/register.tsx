import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Link from "next/link";
const Register: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const router = useRouter();
  const ParseAndSend = async () => {
    setErrors([]);
    const validationResult = z
      .object({
        email: z.string().email("Email inválido"),
        name: z.string(),
        password: z
          .string()
          .min(5, "La contraseña debe tener al menos 5 caracteres")
          .max(20, "La contraseña debe tener menos de 20 caracteres"),
      })
      .safeParse({ email, name, password });
    if (!validationResult.success) {
      const collectedErrors = validationResult.error.flatten().fieldErrors;
      const errorsToDisplay = Array<string>();
      const errorExtractor = (fieldErrors: any) => {
        errorsToDisplay.push(...fieldErrors);
      };
      if (collectedErrors.email) {
        errorExtractor(collectedErrors.email);
      }
      if (collectedErrors.name) {
        errorExtractor(collectedErrors.name);
      }
      if (collectedErrors.password) {
        errorExtractor(collectedErrors.password);
      }
      if (password !== confirmpassword) {
        errorsToDisplay.push("Las contraseñas no coinciden");
      }
      setErrors(errorsToDisplay);
    } else {
      try {
        const result = await axios.post("/api/register", {
          name: name,
          email: email,
          phone: phone,
          password: password,
        });
        Swal.fire({
          icon: "success",
          title: "Registro exitoso",
          text: "Ahora puedes iniciar sesión",
        });
        console.log(result.data);
        router.push("/login");
      } catch (err) {
        // @ts-ignore
        console.log(err.response.data);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
          // @ts-ignore
            err.response.data.error === "User already exists"
              ? "El usuario ya existe"
              : "Ha ocurrido un error",
        });
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-full py-2 ">
      <nav className="bg-amarillito text-white flex justify-between p-4">
        <div className="flex items-center">
          <p className="text-2xl font-lastica cursor-default select-none text-red-800 font-extrabold">
            ApuKusha
          </p>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <form className="pt-6 pb-2 my-2 bg-white rounded shadow-md w-1/2 justify-center align-middle p-10">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Correo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Correo"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Teléfono
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Teléfono"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirmar contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmpassword"
              type="password"
              placeholder="Confirmar contraseña"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmpassword}
            />
          </div>
          {errors.length > 0 && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <ul>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-amarillito hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={ParseAndSend}
            >
              Registrarse
            </button>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/login">
              <p className="text-gray-700 text-sm font-bold mb-2">
                ¿Ya tienes una cuenta?
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
