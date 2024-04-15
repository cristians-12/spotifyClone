import { useEffect, useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Pause, Play, Skip } from "../assets/svg/svg.jsx";

export const BarraControl = ({
  tema,
  reproduciendo,
  setReproduciendo,
  nombre,
  imagen,
}) => {
  const audioRef = useRef(null);
  const [tiempo, setTiempo] = useState("0:00");
  const [duracion, setDuracion] = useState("0:00");
  const [barra, setBarra] = useState(0);

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
        <figure className="w-[5%]">
          <img className="w-[100%]" src={imagen} alt="" />
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
        <h1 className="text-white">{nombre}</h1>
      </div>
    </>
  );
};
