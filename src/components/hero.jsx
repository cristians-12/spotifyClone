/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Bell } from "../assets/svg/svg";
import { Link } from "react-router-dom";
import { Registro } from "../pages/Register";

export const Hero = ({
  setTema,
  setReproduciendo,
  api,
  temas,
  nombre,
  setNombre,
}) => {
  const [hover, setHovered] = useState(false);
  // const [nombre, setNombre] = useState(null);
  const carta = useRef(null);

  return (
    <>
      <main className="bg-[#121019] w-[100%] text-white px-2 mb-[80px] md:mb- px-10">
        <h1 className="font-bold text-[40px]">Buenas tardes</h1>
        <div className="flex justify-between p-4 items-center">
          <div className="flex items-center gap-2 ">
            <button className="bg-white font-bold text-black px-2 py-1 rounded-2xl">
              Descubre premium
            </button>
            <button className="bg-black text-white font-bold px-3 py-2 rounded-3xl">
              Instalar app
            </button>
            <button className="bg-black p-1 rounded-2xl">
              <Bell />
            </button>
          </div>
          <Link
            to={"/register"}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <svg
              width={"20px"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                style={{
                  transition: "fill 0.3s ease",
                }}
                fill={hover ? "green" : "white"}
                d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
              />
            </svg>
          </Link>
        </div>

        <h3>Populares</h3>

        <div className="flex justify-around gap-3 cont-pops overflow-x-auto w-[100%]">
          {api.map((elemento) => (
            <div
              style={{
                transition: "background-color 0.3s ease",
              }}
              key={elemento.id}
              className="bg-[#171717] hover:bg-[#262626] md:w-[15%] w-[45vw] p-2 rounded-xl text-white text-center font-semibold"
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
        <div className="w-[90%] flex gap-5 justify-around">
          {temas &&
            temas.length > 0 &&
            temas
              .filter((element) => element.nombre === "Feid")
              .map((element) => (
                <div
                  onClick={() => {
                    setTema(element.albums[0].canciones[0]);
                    setReproduciendo(false);
                    if (carta.current) {
                      setNombre(carta.current.innerText);
                    }
                  }}
                  key={element.nombre}
                  className="bg-[#171717] hover:bg-[#262626] md:w-[15%] w-[45vw] p-2 rounded-xl text-white text-center font-semibold overflow-hidden text-ellipsis whitespace-nowrap"
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
                          <h2 className="text-clip">{album.nombre}</h2>
                        </li>
                      ))}
                  </ul>
                  <h2 ref={carta} className="font-light">
                    {element.nombre}
                  </h2>
                </div>
              ))}
        </div>
      </main>
    </>
  );
};
