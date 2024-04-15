import { BarraControl } from "../components/barraControl";
import { Hero } from "../components/hero";

export const Home = ({
  setTema,
  setReproduciendo,
  api,
  temas,
  tema,
  reproduciendo,
  nombre,
  setNombre,
  imagen,
  setImagen,
}) => {
  return (
    <>
      <Hero
        setTema={setTema}
        setReproduciendo={setReproduciendo}
        api={api}
        temas={temas}
        nombre={nombre}
        setNombre={setNombre}
        setImagen={setImagen}
      />
      <BarraControl
        tema={tema}
        reproduciendo={reproduciendo}
        setReproduciendo={setReproduciendo}
        nombre={nombre}
        imagen={imagen}
      />
    </>
  );
};
