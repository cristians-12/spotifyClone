import React, { createContext, useState } from "react";


export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [tema, setTema] = useState(
    "https://severmp3teca.xyz/-/mp3/Feid - Ferxxo 151.mp3"
  );
  return (
    <MusicContext.Provider value={{ tema, setTema }}>
      {children}
    </MusicContext.Provider>
  );
};


