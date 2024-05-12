import { useContext, useEffect, useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Pause, Play, Skip } from "../assets/svg/svg.jsx";
import { motion } from "framer-motion";
import { MusicContext } from "../context/musicContext.jsx";

export const BarraControl = () => {
  const audioRef = useRef(null);
  const [tiempo, setTiempo] = useState("0:00");
  const [duracion, setDuracion] = useState("0:00");
  const [barra, setBarra] = useState(0);
  const [click, setClick] = useState(true);
  const { tema, reproduciendo, setReproduciendo, nombre, imagen } =
    useContext(MusicContext);

  useEffect(() => {
    const loadedMetadata = () => {
      const duracionTotal = audioRef.current.audioEl.current.duration;
      const minutos = Math.floor(duracionTotal / 60);
      const segundos = Math.floor(duracionTotal % 60);
      setDuracion(`${minutos}:${segundos < 10 ? "0" + segundos : segundos}`);
    };

    const timeUpdate = () => {
      const duracionTotal = audioRef.current.audioEl.current.duration;
      const tiempoActual = audioRef.current.audioEl.current.currentTime;
      setBarra((tiempoActual / duracionTotal) * 100);
      const mins = Math.floor(tiempoActual / 60);
      const segs = Math.floor(tiempoActual % 60);
      setTiempo(`${mins}:${segs < 10 ? "0" + segs : segs}`);
    };

    if (audioRef.current) {
      audioRef.current.audioEl.current.addEventListener(
        "loadedmetadata",
        loadedMetadata
      );
      audioRef.current.audioEl.current.addEventListener(
        "timeupdate",
        timeUpdate
      );
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.audioEl.current.removeEventListener(
          "loadedmetadata",
          loadedMetadata
        );
        audioRef.current.audioEl.current.removeEventListener(
          "timeupdate",
          timeUpdate
        );
      }
    };
  }, []);

  const handleClick = (e) => {
    const barraRect = e.target.getBoundingClientRect();
    const barraWidth = barraRect.width;
    const clicX = e.clientX - barraRect.left;
    const porcentaje = (clicX / barraWidth) * 100;
    const duracionTotal = audioRef.current.audioEl.current.duration;
    const nuevoTiempo = (porcentaje / 100) * duracionTotal;

    if (audioRef.current) {
      audioRef.current.audioEl.current.currentTime = nuevoTiempo;
      setBarra(porcentaje);
      const mins = Math.floor(nuevoTiempo / 60);
      const segs = Math.floor(nuevoTiempo % 60);
      setTiempo(`${mins}:${segs < 10 ? "0" + segs : segs}`);
    }
  };

  const reproducirAudio = () => {
    setReproduciendo(!reproduciendo);
    if (reproduciendo == false) {
      if (audioRef.current) {
        audioRef.current.audioEl.current.play();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.audioEl.current.pause();
      }
    }
  };

  return (
    <>
      <ReactAudioPlayer
        src={tema}
        controls
        className="bg-red-500 hidden absolute top-0"
        ref={audioRef}
      />

      <div className="bg-black py-3 fixed bottom-0 flex justify-center w-[100%] items-center px-5 gap-2">
        <figure className="w-[23%] md:w-[5%] flex items-center gap-5">
          <img className="w-[100%]" src={imagen} alt="" />
          <h1 className="text-gray-400 text-ellipsis hidden md:block w-[70%] whitespace-nowrap ">
            {nombre}
          </h1>
        </figure>
        <div className="flex items-center gap-3 w-[100%] flex-col">
          <div className="flex items-center gap-5">
            <figure>
              <Skip izquierda={true} />
            </figure>
            <figure
              onClick={reproducirAudio}
              className="bg-white px-2 py-1 rounded-full"
            >
              {reproduciendo ? <Pause /> : <Play />}
            </figure>
            <figure>
              <Skip izquierda={false} />
            </figure>
          </div>
          <div className="w-[100%] flex items-center gap-2 justify-center">
            <p className="text-gray-600">{tiempo}</p>
            <div
              className="h-[4px] w-[40%] bg-gray-500 rounded-full bg-black"
              onClick={handleClick}
            >
              <div
                className={`h-[100%] bg-[#1ED660]`}
                style={{
                  width: `${barra}%`,
                  transition: "width 0.2s ease-in-out",
                }}
              ></div>
            </div>
            <p className="text-gray-600">{duracion}</p>
          </div>
        </div>

        <motion.div
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          {click ? (
            <svg
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => setClick(false)}
            >
              <path
                fill="#ffffff"
                d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setClick(true)}
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ff0000"
                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
              />
            </svg>
          )}
        </motion.div>
      </div>
    </>
  );
};
