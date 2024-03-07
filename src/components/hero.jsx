import { useState } from "react";
import { Bell } from "../assets/svg/svg";

export const Hero = ({ setTema, setReproduciendo }) => {
  return (
    <>
      <main className="bg-[#121019] h-screen w-screen">
        <div className="flex justify-between p-4">
          <div className="flex items-center gap-2">
            <button className="bg-white font-bold px-2 py-1 rounded-2xl">
              Descubre premium
            </button>
            <button className="bg-black text-white font-bold px-3 py-2 rounded-3xl">
              Instalar app
            </button>
            <button className="bg-black p-1 rounded-2xl">
              <Bell />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-around gap-3">
          <div className="bg-[#171717] md:w-[15%] w-[45vw] p-5 rounded-xl text-white text-center font-semibold">
            <img
              onClick={() => {
                setTema("https://severmp3teca.xyz/-/mp3/Feid - Ferxxo 151.mp3");
                setReproduciendo(false);
              }}
              className="rounded-lg p-2 md:w-[100%] w-[100%] rounded-xl"
              src="https://mp3teca.co/-/images/26004_1400_20230825004731-300x300.jpg"
              alt=""
            />
            <h1>Ferxxo 151</h1>
          </div>
          <div className="bg-[#171717] md:w-[15%] w-[45vw] p-5 rounded-xl text-white text-center font-semibold">
            <img
              onClick={() => {
                setTema(
                  "https://severmp3teca.xyz/-/mp3/Rauw Alejandro - Diluvio.mp3"
                );
                setReproduciendo(false);
              }}
              className="p-2 md:w-[100%] w-[100%] rounded-xl"
              src="https://mp3teca.co/-/images/18398_1440_20230707045703-150x150.jpg"
              alt=""
            />
            <h1>Diluvio</h1>
          </div>
          <div className="bg-[#171717] md:w-[15%] w-[45vw] p-5 rounded-xl text-white text-center font-semibold">
            <img
              onClick={() => {
                setTema(
                  "https://elgeneroplus.com/download/Tainy_Ft._Rauw_Alejandro__Skrillex_Y_Four_Tet_-_VOLVER_(WWW.ELGENEROPLUS.COM).mp3"
                );
                setReproduciendo(false);
              }}
              className="p-2 md:w-[100%] w-[100%] rounded-xl"
              src="https://elgeneroplus.com/wp-content/uploads/data-640x640-1.jpg"
              alt=""
            />
            <h1>Volver</h1>
          </div>
          <div className="bg-[#171717] md:w-[15%] w-[45vw] p-5 rounded-xl text-white text-center font-semibold">
            <img
              onClick={() => {
                setTema(
                  "https://severmp3teca.xyz/-/mp3/Blessd ft Justin Quiles ft Lenny Tavarez - Medallo.mp3"
                );
                setReproduciendo(false);
              }}
              className="p-2 md:w-[100%] w-[100%] rounded-xl"
              src="https://elgeneroplus.net/wp-content/uploads/2021/10/Blessd-Hecho-En-Medellin-Album-2021.jpg"
              alt=""
            />
            <h1>Medallo</h1>
          </div>
          
        </div>
      </main>
    </>
  );
};
