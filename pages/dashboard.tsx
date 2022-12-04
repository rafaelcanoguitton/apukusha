import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Link from "next/link";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Map from "./components/map";
import { Icon } from "@iconify/react";
const location = {
  address: "Tu última ubicación",
  //a random latitude ranging from -16.458136 to -16.396518
  lat: Math.random() * (-16.458136 - -16.396518) + -16.396518,
  // a random longitude ranging from -71.599834 to -71.438470
  lng: Math.random() * (-71.599834 - -71.43847) + -71.43847,
};

const Dashboard: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [saturation, setSaturation] = useState<number>(0);
  const [temperature, setTemperature] = useState<number>(0);

  useEffect(() => {
    setSaturation(Math.random() * 5 + 95);
    setTemperature(Math.random() * 1.1 + 36.1);
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      console.log(JSON.parse(user));
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Primero inicia sesión",
      });
      router.push("/");
    }
  }, []);
  return (
    <div className="bg-amarillito h-screen">
      <h1 className="text-center text-4xl font-bold text-white">
        <span>Bienvenido de nuevo {user?.user.name}</span>
      </h1>
      <div className="flex flex-row items-center justify-center h-full w-full py-2 ">
        <Map location={location} zoomLevel={15} />
        <div className="flex flex-col items-center justify-center mx-4 py-2 ">
          <label className="text-lg font-bold text-white">
            Tu reloj tiene:
          </label>
          <p className="text-lg font-bold text-white flex flex-row rounded-lg bg-lime-600 p-2 m-2">
            <Icon icon="mdi:weather-dust" className="text-2xl" />
            Resistencia al polvo
          </p>
          <p className="text-lg font-bold text-white flex flex-row rounded-lg bg-lime-600 p-2 m-2">
            <Icon icon="mdi:weather-snowy-rainy" className="text-2xl" />
            Resistencia al agua
          </p>
          <p className="text-lg font-bold text-white flex flex-row rounded-lg bg-lime-600 p-2 m-2">
            <Icon icon="game-icons:fall-down" className="text-2xl" />
            Resistencia a caídas
          </p>
          <label className="text-lg font-bold text-white">Temperatura</label>
          <p className="text-2xl font-bold text-white flex flex-row rounded-lg bg-rojito p-2 m-2">
            <Icon icon="mdi:temperature-approve" />
            <span>{temperature.toFixed(1)}°C</span>
          </p>
          <label className="text-lg font-bold text-white">Saturación</label>
          <p className="text-2xl font-bold text-white flex flex-row rounded-lg bg-rojito p-2 m-2">
            <Icon icon="mdi:oxygen-tank" />
            <span>{saturation.toFixed(1)}%</span>
          </p>
          <button
            className="bg-azulito text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setSaturation(Math.random() * 5 + 95);
              setTemperature(Math.random() * 1.1 + 36.1);
            }}
          >
            Actualizar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
