import { BarraControl } from "../components/barraControl";
import { Hero } from "../components/hero";

export const Home = ({ api, temas }) => {
  return (
    <>
      <Hero api={api} temas={temas} />
      <BarraControl />
    </>
  );
};
