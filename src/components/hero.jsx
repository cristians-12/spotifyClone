/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Bell } from "../assets/svg/svg";
import { Link } from "react-router-dom";
import { Registro } from "../pages/Register";
import { ref } from "firebase/database";

export const Hero = ({
  setTema,
  setReproduciendo,
  api,
  temas,
  nombre,
  setNombre,
  setImagen,
}) => {
  const [hover, setHovered] = useState(false);
  // const [nombre, setNombre] = useState(null);
  const carta = useRef(null);
  const imgAlbum = useRef(null);

  return (
    <>
      <main className="bg-[#121019] w-[100%] text-white px-3 mb-[80px] md:mb- px-10">
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

        <h3 className="font-bold text-[2rem] mb-5">Populares</h3>

        <div className="overflow-x-scroll">
          <div className="flex justify-around gap-3 w-[500%]">
            {api.map((elemento) => (
              <div
                style={{
                  transition: "background-color 0.3s ease",
                }}
                onClick={(e) => {
                  setTema(elemento.url);
                  setReproduciendo(false);
                  setImagen(e.currentTarget.querySelector("img").src);
                }}
                key={elemento.id}
                className="bg-[#171717] hover:bg-[#262626] md:w-[15%] w-[45vw] p-2 rounded-xl text-white text-center font-semibold"
              >
                <img
                  ref={imgAlbum}
                  className="rounded-lg p-2 md:w-[100%] w-[100%] rounded-xl"
                  src={elemento.imagen}
                  alt=""
                />
                <h1>{elemento.nombre}</h1>
                <p className="font-light">{elemento.artista}</p>
              </div>
            ))}
          </div>
        </div>

        {temas &&
          temas.length > 0 &&
          temas
            .filter((element) => element.nombre === "Feid")
            .map((element) => (
              <div
                key={element.nombre}
                // className="bg-[#171717] hover:bg-[#262626] md:w-[15%] w-[45vw] p-2 rounded-xl text-white text-center font-semibold overflow-hidden text-ellipsis whitespace-nowrap"
              >
                <div className="flex items-center gap-5 my-5">
                  <img
                    className="rounded-full w-[15%] md:w-[5%]"
                    src={element.imagen}
                    alt=""
                  />
                  <h1 className="text-[40px] font-bold">Feid</h1>
                </div>
                <ul className="overflow-x-scroll">
                  <div className="w-[200%] flex gap-5 ">
                    {element.albums &&
                      element.albums.map((album) => (
                        <li
                          key={album.id}
                          className="bg-[#171717] hover:bg-[#262626] md:w-[15%] p-2 rounded-xl text-white font-semibold text-ellipsis flex flex-col items-center text-center"
                          onClick={(e) => {
                            setTema(album.canciones[0].url);
                            setReproduciendo(false);
                            if (carta.current) {
                              setNombre(carta.current.innerText);
                              console.log(imgAlbum);
                            }
                            setImagen(e.currentTarget.querySelector("img").src);
                          }}
                        >
                          <img
                            src={album.imagen}
                            className="rounded-lg p-2 md:w-[100%] w-[150px]"
                            alt=""
                          />
                          <h2 className="text-clip overflow-hidden w-[80%]">
                            {album.nombre}
                          </h2>
                          <h2 ref={carta} className="font-light">
                            {element.nombre}
                          </h2>
                        </li>
                      ))}
                  </div>
                </ul>
              </div>
            ))}
      </main>
    </>
  );
};
