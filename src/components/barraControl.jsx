import { useEffect, useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Pause, Play, Skip } from "../assets/svg/svg.jsx";

export const BarraControl = ({ tema, reproduciendo, setReproduciendo }) => {
  const audioRef = useRef(null);
  // const [reproduciendo, setReproduciendo] = useState(false);
  const [tiempo, setTiempo] = useState("0:00");
  const [duracion, setDuracion] = useState("0:00");
  const [barra, setBarra] = useState(0);
  // const [tema, setTema] = useState('')

  useEffect(() => {
    const tiempoTema = () => {
      setInterval(() => {
        const tiempoActual = document.querySelector(
          ".react-audio-player"
        ).currentTime;
        setBarra(tiempoActual);
        const mins = Math.floor(tiempoActual / 60);
        const segs = Math.floor(tiempoActual % 60);
        setTiempo(`${mins}:${segs < 10 ? "0" + segs : segs}`);
      }, 1000);
    };
    tiempoTema();
  }, []);

  useEffect(() => {
    const loadedMetadata = () => {
      const duracionTotal = audioRef.current.audioEl.current.duration;
      const minutos = Math.floor(duracionTotal / 60);
      const segundos = Math.floor(duracionTotal % 60);
      setDuracion(`${minutos}:${segundos < 10 ? "0" + segundos : segundos}`);
    };

    if (audioRef.current) {
      audioRef.current.audioEl.current.addEventListener(
        "loadedmetadata",
        loadedMetadata
      );
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.audioEl.current.removeEventListener(
          "loadedmetadata",
          loadedMetadata
        );
      }
    };
  }, []);

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
        className="bg-red-500 hidden absolute top-0  "
        ref={audioRef}
      />

      <div className="bg-black py-3 fixed bottom-0 flex justify-center w-[100%] items-center  flex-col gap-2">
        <div className="flex items-center gap-3">
          <div>
            <Skip izquierda={true} />
          </div>
          <div
            onClick={reproducirAudio}
            className="bg-white px-2 py-1 rounded-full"
          >
            {reproduciendo ? <Pause /> : <Play />}
          </div>

          <div>
            <Skip izquierda={false} />
          </div>
        </div>
        <div className="w-[100%] flex items-center gap-2 justify-center">
          <p className="text-gray-600">{tiempo}</p>
          <div className="h-[4px] w-[40%] bg-gray-500 rounded-full bg-black">
            <div
              className={` h-[100%] bg-[#1ED660]`}
              style={{ width: barra, transition: "width 0.3s ease" }}
            ></div>
          </div>
          <p className="text-gray-600">{duracion}</p>
        </div>
      </div>
    </>
  );
};
