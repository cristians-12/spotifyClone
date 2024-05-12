import { BarraControl } from "../components/barraControl";
import { Hero } from "../components/hero";

export const Home = ({
  api,
  temas,
  nombre,
  setNombre,
  imagen,
  setImagen,
}) => {
  return (
    <>
      <Hero
        // setReproduciendo={setReproduciendo}
        api={api}
        temas={temas}
        nombre={nombre}
        setNombre={setNombre}
        setImagen={setImagen}
      />
      <BarraControl
        // reproduciendo={reproduciendo}
        // setReproduciendo={setReproduciendo}
        nombre={nombre}
        imagen={imagen}
      />
    </>
  );
};
