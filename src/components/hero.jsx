import { useState } from "react";
import { Bell } from "../assets/svg/svg";

export const Hero = ({setTema, setReproduciendo}) => {
  


  return (
    <>
      <main className="bg-[#171717] h-screen w-screen">
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
        <img
          onClick={()=>{
            setTema("https://severmp3teca.xyz/-/mp3/Feid - Ferxxo 151.mp3");
            setReproduciendo(false)
          }}
          className="rounded-lg p-2 md:w-[10%] w-[30%]"
          src="https://mp3teca.co/-/images/26004_1400_20230825004731-300x300.jpg"
          alt=""
        />
        <img onClick={()=>{
          setTema("https://severmp3teca.xyz/-/mp3/Rauw Alejandro - Diluvio.mp3");
          setReproduciendo(false);
        }} className="p-2" src="https://mp3teca.co/-/images/18398_1440_20230707045703-150x150.jpg" alt="" />
      </main>
    </>
  );
};
