import { useEffect, useState } from "react";
import { BarraControl } from "./components/barraControl";
import { Hero } from "./components/hero";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config/firebase";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore/lite";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Registro } from "./pages/Register";

function App() {
  const [tema, setTema] = useState(
    "https://severmp3teca.xyz/-/mp3/Feid - Ferxxo 151.mp3"
  );
  const [reproduciendo, setReproduciendo] = useState(false);
  const [temas, setTemas] = useState({});
  const [nombre, setNombre] = useState(null);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchDb = async () => {
      const album = collection(db, "artistas");
      const canciones = await getDocs(album);
      const cancioness = canciones.docs.map((doc) => doc.data());
      setTemas(cancioness);
    };

    fetchDb();
  }, []);

  const api = [
    {
      id: 1,
      nombre: "Prohibidox",
      url: "https://severmp3teca.xyz/-/mp3/Feid - Prohibidox.mp3",
      imagen:
        "https://elgeneroplus.net/wp-content/uploads/2023/07/Feid-Feliz-Cumple-Ferxxo-Album-2022.jpg",
      artista: "Feid",
    },
    {
      id: 2,
      nombre: "Ferxxo 151",
      url: "https://severmp3teca.xyz/-/mp3/Feid - Ferxxo 151.mp3",
      imagen:
        "https://mp3teca.co/-/images/26004_1400_20230825004731-300x300.jpg",
      artista: "Feid",
    },
    {
      id: 3,
      nombre: "Diluvio",
      url: "https://severmp3teca.xyz/-/mp3/Rauw Alejandro - Diluvio.mp3",
      imagen:
        "https://mp3teca.co/-/images/18398_1440_20230707045703-150x150.jpg",
      artista: "Rauw Alejandro",
    },
    {
      id: 4,
      nombre: "Volver",
      url: "https://elgeneroplus.com/download/Tainy_Ft._Rauw_Alejandro__Skrillex_Y_Four_Tet_-_VOLVER_(WWW.ELGENEROPLUS.COM).mp3",
      imagen: "https://elgeneroplus.com/wp-content/uploads/data-640x640-1.jpg",
      artista: "Rauw Alejandro Ft. Skrillex",
    },
    {
      id: 5,
      nombre: "Medallo",
      url: "https://severmp3teca.xyz/-/mp3/Blessd ft Justin Quiles ft Lenny Tavarez - Medallo.mp3",
      imagen:
        "https://elgeneroplus.net/wp-content/uploads/2021/10/Blessd-Hecho-En-Medellin-Album-2021.jpg",
      artista: "Blessd",
    },
    {
      id: 6,
      nombre: "Get Lucky",
      url: "http://mysound.ge/uploads/tracks/891214478_1565133657_894640020.mp3",
      imagen:
        "https://cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/500x500.jpg",
      artista: "Daft Punk ft. Pharrell Williams",
    },
    {
      id: 7,
      nombre: "Alakran",
      url: "https://elgeneroplus.com/download/Feid_-_ALAKRAN_(WWW.ELGENEROPLUS.COM).mp3",
      imagen:
        "https://elgeneroplus.com/wp-content/uploads/cover-19.jpg",
      artista: "Feid",
    },
    {
      id: 8,
      nombre: "Buscandote",
      url: "https://pouch.jumpshare.com/preview/wr6s-qTny-HbR86BRCfC-N9dfgbM9k4LH6M54x91VgwYQLKT4xIKCSuvCvLwk0m26G-UKPcLGz7GHR2NjZ9ePDVYHWz3Q6wg6qi_nEvMeBdRdVE50BeBp0h-L8y5cdsZHGHrhjwhjvXwqeiS3fSk6G6yjbN-I2pg_cnoHs_AmgI.mp3",
      imagen:
        "https://i.scdn.co/image/ab67616d0000b2734d7f05e6a9b26e981e9ac3ac",
      artista: "Siddharta",
    },
    
  ];


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setTema={setTema}
                setReproduciendo={setReproduciendo}
                api={api}
                temas={temas}
                nombre={nombre}
                tema={tema}
                reproduciendo={reproduciendo}
                setNombre = {setNombre}
              />
            }
          />
          <Route path="/register" element={<Registro/>} />
        </Routes>
      </BrowserRouter>
      {/* <Hero
        setTema={setTema}
        setReproduciendo={setReproduciendo}
        api={api}
        temas={temas}
      />
      <BarraControl
        tema={tema}
        reproduciendo={reproduciendo}
        setReproduciendo={setReproduciendo}
      /> */}
    </>
  );
}

export default App;
