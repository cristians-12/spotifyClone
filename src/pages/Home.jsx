import { BarraControl } from "../components/barraControl";
import { Hero } from "../components/hero";

export const Home = ({ setTema, setReproduciendo, api, temas, tema, reproduciendo }) => {
  return (
    <>
      <Hero
        setTema={setTema}
        setReproduciendo={setReproduciendo}
        api={api}
        temas={temas}
      />
      <BarraControl
        tema={tema}
        reproduciendo={reproduciendo}
        setReproduciendo={setReproduciendo}
      />
    </>
  );
};
