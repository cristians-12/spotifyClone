/* eslint-disable react/prop-types */
import { useState } from "react";
import { Bell } from "../assets/svg/svg";

export const Hero = ({ setTema, setReproduciendo, api, temas }) => {
  return (
    <>
      <main className="bg-[#121019] w-screen text-white px-2">
        <h1 className="font-bold text-[40px]">Buenas tardes</h1>
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
          {api.map((elemento) => (
            <div
              key={elemento.id}
              className="bg-[#171717] md:w-[15%] w-[45vw] p-2 rounded-xl text-white text-center font-semibold"
            >
              <img
                onClick={() => {
                  setTema(elemento.url);
                  setReproduciendo(false);
                }}
                className="rounded-lg p-2 md:w-[100%] w-[100%] rounded-xl"
                src={elemento.imagen}
                alt=""
              />
              <h1>{elemento.nombre}</h1>
              <p className="font-light">{elemento.artista}</p>
            </div>
          ))}
        </div>
        <h1 className="text-[40px] font-bold">Feid</h1>
        <div>
          {temas &&
            temas.length > 0 &&
            temas.map((element) => (
              <div
                onClick={() => {
                  setTema(element.albums[0].canciones[0]);
                  setReproduciendo(false);
                }}
                key={element.nombre}
                className="bg-[#171717] md:w-[15%] w-[45vw] p-2 rounded-xl text-white text-center font-semibold"
              >
                <ul>
                  {element.albums &&
                    element.albums.map((album) => (
                      <li key={album.id}>
                        <img
                          src={album.imagen}
                          className="rounded-lg p-2 md:w-[100%] w-[100%] rounded-xl"
                          alt=""
                        />
                        {album.nombre}
                      </li>
                    ))}
                </ul>
                <h2 className="font-light">{element.nombre}</h2>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};
