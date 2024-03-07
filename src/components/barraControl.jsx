import { useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Pause, Play, Skip } from "../assets/svg/svg.jsx";

export const BarraControl = () => {
  const audioRef = useRef(null);
  const [reproduciendo, setReproduciendo] = useState(false);

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
        src="https://severmp3teca.xyz/-/mp3/Feid - Ferxxo 151.mp3"
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
          <p className="text-gray-600">0:00</p>
          <div className="h-[4px] w-[40%] bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </>
  );
};
