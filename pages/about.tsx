import React from "react";
import { NextPage } from "next";
import Image from "next/image";

//text-red-800
const About: NextPage = () => {
  return (
    <div>
      <div className="bg-amarillito text-center w-full flex flex-row justify-around">
        <Image
          src="/logo.png"
          alt="ApuKusha"
          width={250}
          height={250}
          className="opacity-25"
        />

        <div className="flex flex-row">
          <div className="w-16 h-16 relative my-auto">
            <Image src="/logo.png" alt="ApuKusha" fill />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-5xl font-lastica cursor-default  text-black font-extrabold">
              ApuKusha
            </p>
            <p className="text-xl cursor-default  text-black">
              {'"'}Tu felicidad es un reflejo de tu salud{'"'}
            </p>
          </div>
          <div className="w-16 h-16 relative my-auto">
            <Image src="/logo.png" alt="ApuKusha" fill />
          </div>
        </div>
        <Image
          src="/logo.png"
          alt="ApuKusha"
          width={250}
          height={250}
          className="opacity-25"
        />
      </div>
      <div className="bg-cremita text-center w-full flex flex-row justify-evenly py-4">
        <div className="flex flex-col justify-center">
          <p className="text-lg cursor-default  text-black self-start">
            Lo que te brinda la pulsera:
          </p>
          <ul className="bg-yellow-200">
            <li className="border border-black px-2">
              Adaptabilidad de la pulsera a la muñeca
            </li>
            <li className="border border-black px-2">
              Longitud y adaptabilidad del cable
            </li>
            <li className="border border-black px-2">
              Mayor tiempo de duración de batería
            </li>
            <li className="border border-black px-2">
              Adecuado funcionamiento en altas y bajas temperaturas
            </li>
            <li className="border border-black px-2">
              Resistencia al agua y polvo
            </li>
            <li className="border border-black px-2">Mediciones constantes</li>
            <li className="border border-black px-2">Velocidad de reportes</li>
            <li className="border border-black px-2">
              Es agradable visualmente
            </li>
            <li className="border border-black px-2">
              Datos sencillos de leer
            </li>
            <li className="border border-black px-2">Geolocalización</li>
          </ul>
        </div>
        <div className="flex flex-col w-2/4">
          <p className="text-lg cursor-default  text-black self-start">
            Acerca de la pulsera
          </p>
          <br />
          <p className="text-lg cursor-default  text-black self-start ">
            El producto es una pulsera wearable compuesta por una banda de
            silicona ajustable a la muñeca del usuario, tiene una pantalla
            táctil cuadrada de 250 x 250 píxeles y aproximadamente 1.5”. Cuenta
            con una batería de 1000 mAh. La pulsera cuenta con un sensor para
            medir las pulsaciones por minuto, la temperatura y la oxigenación.
            Cuenta con el sistema API de geolocalización por Bluetooth. Es
            recargable a través de un cable tipo C.
          </p>
        </div>
      </div>
      <div className="flex flex-row bg-cremita justify-around align-middle">
        <div className="relative w-56 h-56 m-2">
          <Image
            src="/prod_1.png"
            alt="ApuKusha"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-56 m-2 ">
          <Image
            src="/prod_2.png"
            alt="ApuKusha"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-56 m-2 ">
          <Image
            src="/prod_3.png"
            alt="ApuKusha"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-56 m-2">
          <Image
            src="/prod_4.png"
            alt="ApuKusha"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="bg-logo w-40"></div>
        <div className="bg-capybara text-center w-full flex flex-col align-middle py-4">
          <h1 className="text-4xl font-lastica cursor-default  text-black font-extrabold bg-amarillito p-4 w-fit self-center">
            ApuKusha
          </h1>
          <div className="flex flex-row w-full justify-evenly">
            <div className="flex flex-col">
              <div className="flex flex-row w-full justify-around">
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-3/12">
                  Nombre del producto
                </p>
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-5/12">
                  Pulsera wearable con geolocalizador, sensor de saturación,
                  temperatura y ritmo cardíaco.
                </p>
              </div>
              <div className="flex flex-row w-full justify-around">
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-3/12">
                  Marca
                </p>
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-5/12">
                  APUKUSHA
                </p>
              </div>
              <div className="flex flex-row w-full justify-around">
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-3/12">
                  Descripción
                </p>
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-5/12">
                  Pulsera wearable compuesta de una correa de silicona
                  ajustable, pantalla LED 1,36 pulgadas, equipada con sensores
                  de frecuencia cardíaca, Sp02 y remperatuda GPS.
                </p>
              </div>
              <div className="flex flex-row w-full justify-around">
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-3/12">
                  Garantía
                </p>
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-5/12">
                  1 año
                </p>
              </div>
              <div className="flex flex-row w-full justify-around">
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-3/12">
                  Dimensiones y peso
                </p>
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-5/12">
                  13,3 x 44,4 x 9,8mm \n 35.5g
                </p>
              </div>
              <div className="flex flex-row w-full justify-around">
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-3/12">
                  Pantalla
                </p>
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-5/12">
                  1,36 pulg, resolución 150 x 396 píxeles, 330 PPI
                </p>
              </div>
              <div className="flex flex-row w-full justify-around">
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-3/12">
                  Procesador
                </p>
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-5/12">
                  Exynos, 5nm, Cortes-A53, Interfax LPDDR3, frecuencia 1.15 GHz
                </p>
              </div>
              <div className="flex flex-row w-full justify-around">
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-3/12">
                  Batería
                </p>
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-5/12">
                  Capacidad de 500 mAh, Voltaje de carga máx 4,2 V, dimensiones
                  1,05 x 0,94 x 0,20 pulg.
                </p>
              </div>
              <div className="flex flex-row w-full justify-around">
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-3/12">
                  Geoposicionamiento
                </p>
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-5/12">
                  Chip GPS integrado con precisión horizontal 0.50 m y precisión
                  vertical 0.85 m
                </p>
              </div>
              <div className="flex flex-row w-full justify-around">
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-3/12">
                  Sensores
                </p>
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-5/12">
                  Sensor BioActive que mide frecuencia cardiaca, Sp02 y
                  temperatura
                </p>
              </div>
              <div className="flex flex-row w-full justify-around">
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-3/12">
                  Resistencia
                </p>
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-5/12">
                  5 ATM, IP68, MIL-STD-810H
                </p>
              </div>
              <div className="flex flex-row w-full justify-around">
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-3/12">
                  Observaciones
                </p>
                <p className="text-lg cursor-default  text-black self-center bg-amarillito p-4 m-2 w-5/12">
                  El dispositivo envía una alerta cuando:
                  <ul>
                    <li>La saturación está por debajo de lo normal</li>
                    <li>El usuario se encuentra fuera de la zona de control</li>
                    <li>La temperatura aumenta por encima de lo normal</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-logo w-40"></div>
      </div>
      <div className="flex flex-row justify-center m-6">
        <div className="w-16 h-16 relative my-auto">
          <Image src="/logo.png" alt="ApuKusha" fill />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-5xl font-lastica cursor-default  text-black font-extrabold">
            ApuKusha
          </p>
          <p className="text-xl cursor-default  text-black">
            {'"'}Tu felicidad es un reflejo de tu salud{'"'}
          </p>
        </div>
        <div className="w-16 h-16 relative my-auto">
          <Image src="/logo.png" alt="ApuKusha" fill />
        </div>
      </div>
    </div>
  );
};

export default About;
