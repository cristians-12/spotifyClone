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
import { Login } from "./pages/Login";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { setUserId } from "firebase/analytics";
import { MusicProvider } from "./context/musicContext";

function App() {
  const [reproduciendo, setReproduciendo] = useState(false);
  const [temas, setTemas] = useState({});
  const [nombre, setNombre] = useState(null);
  const [imagen, setImagen] = useState(null);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchDb = async () => {
      const album = collection(db, "artistas");
      const canciones = await getDocs(album);
      const cancioness = canciones.docs.map((doc) => doc.data());
      // console.log(cancioness);
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
      imagen: "https://elgeneroplus.com/wp-content/uploads/cover-19.jpg",
      artista: "Feid",
    },
    {
      id: 8,
      nombre: "Hora loca",
      url: "https://mp3hits.cloud/wp-content/uploads/2023/09/HraLa.mp3",
      imagen:
        "https://mp3hits.cloud/wp-content/uploads/2023/09/Hora-LocaRawayanaMonsieur-Perine.webp",
      artista: "Rawayana",
    },
    {
      id: 9,
      nombre: "Si te la encuentras por ahi",
      url: "https://elgeneroplus.com/download/Feid_-_Si_Te_La_Encuentras_Por_Ahi_(WWW.ELGENERO.AI).mp3",
      imagen: "https://i1.sndcdn.com/artworks-zlWJLgNqaikK-0-t500x500.jpg",
      artista: "Feid",
    },
    {
      id: 10,
      nombre: "Nightcall",
      url: "http://mysound.ge/uploads/tracks/903761951_651257246_952452743.mp3",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/5/5b/Kavinsky_Nightcall_2010.png",
      artista: "Kavinsky",
    },
  ];

  return (
    <>
      <MusicProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    setReproduciendo={setReproduciendo}
                    api={api}
                    temas={temas}
                    nombre={nombre}
                    reproduciendo={reproduciendo}
                    setNombre={setNombre}
                    imagen={imagen}
                    setImagen={setImagen}
                  />
                }
              />
              <Route
                path="/register"
                setReproduciendo={setReproduciendo}
                api={api}
                temas={temas}
                nombre={nombre}
                reproduciendo={reproduciendo}
                setNombre={setNombre}
                imagen={imagen}
                setImagen={setImagen}
                element={<Registro />}
              />
              <Route
                path="/login"
                setReproduciendo={setReproduciendo}
                api={api}
                temas={temas}
                nombre={nombre}
                reproduciendo={reproduciendo}
                setNombre={setNombre}
                imagen={imagen}
                setImagen={setImagen}
                element={<Login />}
              />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </MusicProvider>
    </>
  );
}

export default App;
