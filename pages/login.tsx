import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Link from "next/link";

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const router = useRouter();
  const ParseAndSend = async () => {
    setErrors([]);
    const validationResult = z
      .object({
        email: z.string().email("Email inválido"),
        password: z
          .string()
          .min(5, "La contraseña debe tener al menos 5 caracteres")
          .max(20, "La contraseña debe tener menos de 20 caracteres"),
      })
      .safeParse({ email, password });
    if (!validationResult.success) {
      const collectedErrors = validationResult.error.flatten().fieldErrors;
      const errorsToDisplay = Array<string>();
      const errorExtractor = (fieldErrors: any) => {
        errorsToDisplay.push(...fieldErrors);
      };
      if (collectedErrors.email) {
        errorExtractor(collectedErrors.email);
      }
      if (collectedErrors.password) {
        errorExtractor(collectedErrors.password);
      }
      setErrors(errorsToDisplay);
    } else {
      try {
        const result = await axios.post("/api/login", {
          email: email,
          password: password,
        });
        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          text: "Bienvenido",
        });
        console.log(result.data);
        localStorage.setItem("user", JSON.stringify(result.data));
        router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Credenciales incorrectas",
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
          {errors.length > 0 && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <ul>
                {errors.map((error) => (
                  <li>{error}</li>
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
              Iniciar Sesión
            </button>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/register">
              <p className="text-gray-700 text-sm font-bold mb-2">
                ¿Aún no tienes cuenta?
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
