import React, { createContext, useState } from "react";

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [tema, setTema] = useState(
    "https://severmp3teca.xyz/-/mp3/Feid - Ferxxo 151.mp3"
  );
  const [reproduciendo, setReproduciendo] = useState(false);
  const [nombre, setNombre] = useState(null);
  const [imagen, setImagen] = useState(null);
  return (
    <MusicContext.Provider
      value={{
        tema,
        setTema,
        reproduciendo,
        setReproduciendo,
        nombre,
        setNombre,
        imagen,
        setImagen,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
