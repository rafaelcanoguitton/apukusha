import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user);
    console.log(user);
  }, []);
  return (
    <nav className="bg-amarillito text-white flex justify-between p-4">
      <div className="flex items-center">
        <p className="text-2xl font-lastica cursor-default select-none text-red-800 font-extrabold">
          ApuKusha
        </p>
      </div>
      {/* login stuff */}
      <div className="flex items-center">
        {user ? (
          <div className="flex items-center">
            <button
              className="bg-rojito text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                window.localStorage.removeItem("user");
                setUser(null);
              }}
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href="/login">
              <button className="bg-rojito text-white font-bold py-2 px-4 rounded">
                Iniciar sesión
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default function Home() {
  return (
    <div className="h-screen select-none">
      <NavBar />
      <div className="flex flex-col items-center justify-center h-full py-2 fondito">
        <Head>
          <title>ApuKusha</title>
          <meta
            name="description"
            content="Tu felicidad es un reflejo de tu salud"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-lastica font-extrabold text-rojito">
            ApuKusha
          </h1>
          <p className="mt-3 text-2xl font-bold text-rojito">
            Tu felicidad es un reflejo de tu salud
          </p>
          <div className="flex flex-wrap flex-col items-center justify-around max-w-4xl mt-6 sm:w-full">
            <Link
              href="/dashboard"
              className="p-6 mt-6 border w-96 rounded-xl hover:text-rojito focus:text-rojito hover:border-rojito focus:border-rojito text-center"
            >
              {/* centered middle white text */}
              <h3 className="text-2xl font-bold text-white">
                Pruebanos ahora &rarr;
              </h3>
            </Link>
            <Link
              href="/about"
              className="p-6 mt-6 border w-96 rounded-xl hover:text-rojito focus:text-rojito hover:border-rojito focus:border-rojito text-center bg-rojito"
            >
              <h3 className="text-2xl font-bold text-white">Acerca de</h3>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
