import { BarraControl } from "../components/barraControl";
import { Hero } from "../components/hero";

export const Home = ({ setTema, setReproduciendo, api, temas, tema, reproduciendo, nombre, setNombre }) => {
  return (
    <>
      <Hero
        setTema={setTema}
        setReproduciendo={setReproduciendo}
        api={api}
        temas={temas}
        nombre={nombre}
        setNombre={setNombre}
      />
      <BarraControl
        tema={tema}
        reproduciendo={reproduciendo}
        setReproduciendo={setReproduciendo}
        nombre={nombre}
      />
    </>
  );
};
