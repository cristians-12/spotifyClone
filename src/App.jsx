import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BarraControl } from "./components/barraControl";
import { Hero } from "./components/hero";

function App() {
  const [tema, setTema] = useState("https://severmp3teca.xyz/-/mp3/Feid - Ferxxo 151.mp3");
  const [reproduciendo, setReproduciendo] = useState(false);

  const api = [
    {
      id: 1,
      nombre: 'Prohibidox',
      url: "https://severmp3teca.xyz/-/mp3/Feid - Prohibidox.mp3",
      imagen: "https://elgeneroplus.net/wp-content/uploads/2023/07/Feid-Feliz-Cumple-Ferxxo-Album-2022.jpg"
    },
    {
      id:2,
      nombre: 'Ferxxo 151',
      url: "https://severmp3teca.xyz/-/mp3/Feid - Ferxxo 151.mp3",
      imagen: 'https://mp3teca.co/-/images/26004_1400_20230825004731-300x300.jpg'
    },
    {
      id:3,
      nombre: 'Diluvio',
      url: "https://severmp3teca.xyz/-/mp3/Rauw Alejandro - Diluvio.mp3",
      imagen: "https://mp3teca.co/-/images/18398_1440_20230707045703-150x150.jpg"
    },
    {
      id:4,
      nombre: 'Volver',
      url:"https://elgeneroplus.com/download/Tainy_Ft._Rauw_Alejandro__Skrillex_Y_Four_Tet_-_VOLVER_(WWW.ELGENEROPLUS.COM).mp3",
      imagen: "https://elgeneroplus.com/wp-content/uploads/data-640x640-1.jpg",
    },
    {
      id:5,
      nombre: 'Medallo',
      url: "https://severmp3teca.xyz/-/mp3/Blessd ft Justin Quiles ft Lenny Tavarez - Medallo.mp3",
      imagen: "https://elgeneroplus.net/wp-content/uploads/2021/10/Blessd-Hecho-En-Medellin-Album-2021.jpg",
    }
  ]

  const datos = {
    albums: {
      totalCount: 672,
      items: [
        {
          data: {
            uri: "spotify:album:4jtQUtS4ABgER3DnGfKJCv",
            name: "CLASSY 101",
            artists: {
              items: [
                {
                  uri: "spotify:artist:2LRoIwlKmHjgvigdNGBHNo",
                  profile: {
                    name: "Feid",
                  },
                },
                {
                  uri: "spotify:artist:3qsKSpcV3ncke3hw52JSMB",
                  profile: {
                    name: "Young Miko",
                  },
                },
              ],
            },
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e0229ebee2b5fb008871fcd201a",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000485129ebee2b5fb008871fcd201a",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b27329ebee2b5fb008871fcd201a",
                  width: 640,
                  height: 640,
                },
              ],
            },
            date: {
              year: 2023,
            },
          },
        },
        {
          data: {
            uri: "spotify:album:0d3Wh2K6sHodVPdABbJrgF",
            name: "La Inocente",
            artists: {
              items: [
                {
                  uri: "spotify:artist:7K5OqI5GnphpZMfIRs2UsI",
                  profile: {
                    name: "Mar Lucas",
                  },
                },
              ],
            },
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e02baecc0648b21da28d1b52e4d",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d00004851baecc0648b21da28d1b52e4d",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b273baecc0648b21da28d1b52e4d",
                  width: 640,
                  height: 640,
                },
              ],
            },
            date: {
              year: 2023,
            },
          },
        },
        {
          data: {
            uri: "spotify:album:3tKHDHYrbcCFDC1yDeLOx2",
            name: "La Intención",
            artists: {
              items: [
                {
                  uri: "spotify:artist:0XwVARXT135rw8lyw1EeWP",
                  profile: {
                    name: "Christian Nodal",
                  },
                },
                {
                  uri: "spotify:artist:12GqGscKJx3aE4t07u7eVZ",
                  profile: {
                    name: "Peso Pluma",
                  },
                },
              ],
            },
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e022adc67663c45fdbbbd049fa9",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d000048512adc67663c45fdbbbd049fa9",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b2732adc67663c45fdbbbd049fa9",
                  width: 640,
                  height: 640,
                },
              ],
            },
            date: {
              year: 2024,
            },
          },
        },
        {
          data: {
            uri: "spotify:album:2vbmdHFnbWA3y9Li7rmHre",
            name: "La Inocente",
            artists: {
              items: [
                {
                  uri: "spotify:artist:6LNlfExL1VfbLmpkVfg4N9",
                  profile: {
                    name: "Perdidos De Sinaloa",
                  },
                },
              ],
            },
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e025394963bce80dc47cc768f95",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d000048515394963bce80dc47cc768f95",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b2735394963bce80dc47cc768f95",
                  width: 640,
                  height: 640,
                },
              ],
            },
            date: {
              year: 2022,
            },
          },
        },
        {
          data: {
            uri: "spotify:album:5elDXKomKQ4hLFCHO06Db1",
            name: "Inocente",
            artists: {
              items: [
                {
                  uri: "spotify:artist:7iK8PXO48WeuP03g8YR51W",
                  profile: {
                    name: "Myke Towers",
                  },
                },
              ],
            },
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e020293ad9bb7369b130182b3a8",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d000048510293ad9bb7369b130182b3a8",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b2730293ad9bb7369b130182b3a8",
                  width: 640,
                  height: 640,
                },
              ],
            },
            date: {
              year: 2019,
            },
          },
        },
        {
          data: {
            uri: "spotify:album:0SoJvPHbKVhvmVJOp3kzp3",
            name: "ESTRELLA",
            artists: {
              items: [
                {
                  uri: "spotify:artist:0Q8NcsJwoCbZOHHW63su5S",
                  profile: {
                    name: "Mora",
                  },
                },
              ],
            },
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e024cc96ed1e38fa517608c2fb0",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d000048514cc96ed1e38fa517608c2fb0",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b2734cc96ed1e38fa517608c2fb0",
                  width: 640,
                  height: 640,
                },
              ],
            },
            date: {
              year: 2023,
            },
          },
        },
        {
          data: {
            uri: "spotify:album:06SZ3a3J46TvXeriXbWVZ4",
            name: "La Inocente",
            artists: {
              items: [
                {
                  uri: "spotify:artist:0CuT7R1m8QixpXo8sCZLHQ",
                  profile: {
                    name: "Bryant Flow",
                  },
                },
              ],
            },
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e026b42fba8ab4bfd4eeb59d100",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d000048516b42fba8ab4bfd4eeb59d100",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b2736b42fba8ab4bfd4eeb59d100",
                  width: 640,
                  height: 640,
                },
              ],
            },
            date: {
              year: 2023,
            },
          },
        },
        {
          data: {
            uri: "spotify:album:7azq3plJ1x80tMRD5IzUbk",
            name: "En la Intimidad",
            artists: {
              items: [
                {
                  uri: "spotify:artist:1i8SpTcr7yvPOmcqrbnVXY",
                  profile: {
                    name: "Ozuna",
                  },
                },
              ],
            },
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e026d308739fc725bc4edba9c92",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d000048516d308739fc725bc4edba9c92",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b2736d308739fc725bc4edba9c92",
                  width: 640,
                  height: 640,
                },
              ],
            },
            date: {
              year: 2016,
            },
          },
        },
        {
          data: {
            uri: "spotify:album:4qT2UyJk4GmLiTysBAsgwi",
            name: "Inocente",
            artists: {
              items: [
                {
                  uri: "spotify:artist:00me4Ke1LsvMxt5kydlMyU",
                  profile: {
                    name: "Cosculluela",
                  },
                },
              ],
            },
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e02428a556e5ea9de39c95bfb6e",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d00004851428a556e5ea9de39c95bfb6e",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b273428a556e5ea9de39c95bfb6e",
                  width: 640,
                  height: 640,
                },
              ],
            },
            date: {
              year: 2022,
            },
          },
        },
        {
          data: {
            uri: "spotify:album:6uO5XCH1zNc8o8HMxFbTAb",
            name: "La Inocente",
            artists: {
              items: [
                {
                  uri: "spotify:artist:7dozMZWHNAKyuyDF8vDVLg",
                  profile: {
                    name: "Ally D",
                  },
                },
              ],
            },
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e0220c0cadfc0c4f2e8da5ffb86",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000485120c0cadfc0c4f2e8da5ffb86",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b27320c0cadfc0c4f2e8da5ffb86",
                  width: 640,
                  height: 640,
                },
              ],
            },
            date: {
              year: 2023,
            },
          },
        },
      ],
    },
    artists: {
      totalCount: 32,
      items: [
        {
          data: {
            uri: "spotify:artist:2LRoIwlKmHjgvigdNGBHNo",
            profile: {
              name: "Feid",
            },
            visuals: {
              avatarImage: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6761610000e5eb9e7c05016af970bb9bf76cc1",
                    width: 640,
                    height: 640,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6761610000f1789e7c05016af970bb9bf76cc1",
                    width: 160,
                    height: 160,
                  },
                  {
                    url: "https://i.scdn.co/image/ab676161000051749e7c05016af970bb9bf76cc1",
                    width: 320,
                    height: 320,
                  },
                ],
              },
            },
          },
        },
        {
          data: {
            uri: "spotify:artist:7EQ9iuyTpUsFKqHP1w27nG",
            profile: {
              name: "La Incontenible Banda Astilleros",
            },
            visuals: {
              avatarImage: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6761610000e5ebbae0fe39bee4b3b66c603f13",
                    width: 640,
                    height: 640,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6761610000f178bae0fe39bee4b3b66c603f13",
                    width: 160,
                    height: 160,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616100005174bae0fe39bee4b3b66c603f13",
                    width: 320,
                    height: 320,
                  },
                ],
              },
            },
          },
        },
        {
          data: {
            uri: "spotify:artist:77JusW9TBpD4pfdcMSSNE3",
            profile: {
              name: "La Inolvidable Banda Agua De La Llave",
            },
            visuals: {
              avatarImage: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6761610000e5eb875dfc2b0e9b17fe5592a58e",
                    width: 640,
                    height: 640,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6761610000f178875dfc2b0e9b17fe5592a58e",
                    width: 160,
                    height: 160,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616100005174875dfc2b0e9b17fe5592a58e",
                    width: 320,
                    height: 320,
                  },
                ],
              },
            },
          },
        },
        {
          data: {
            uri: "spotify:artist:0Q8NcsJwoCbZOHHW63su5S",
            profile: {
              name: "Mora",
            },
            visuals: {
              avatarImage: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6761610000e5ebc8f6d4d6eb8e7dd5206bd5f4",
                    width: 640,
                    height: 640,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6761610000f178c8f6d4d6eb8e7dd5206bd5f4",
                    width: 160,
                    height: 160,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616100005174c8f6d4d6eb8e7dd5206bd5f4",
                    width: 320,
                    height: 320,
                  },
                ],
              },
            },
          },
        },
        {
          data: {
            uri: "spotify:artist:4YJvtnJmqjklDKpHteBpiT",
            profile: {
              name: "Maridalia La Inocente",
            },
            visuals: {
              avatarImage: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6761610000e5eb2239532ba42d9df0bd2ed983",
                    width: 640,
                    height: 640,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6761610000f1782239532ba42d9df0bd2ed983",
                    width: 160,
                    height: 160,
                  },
                  {
                    url: "https://i.scdn.co/image/ab676161000051742239532ba42d9df0bd2ed983",
                    width: 320,
                    height: 320,
                  },
                ],
              },
            },
          },
        },
        {
          data: {
            uri: "spotify:artist:4v9FqYH2zbatul49FnFJxm",
            profile: {
              name: "La Internacional Banda Innovación",
            },
            visuals: {
              avatarImage: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b2730b1899f3693b5a50a3a483a2",
                    width: 640,
                    height: 640,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d000048510b1899f3693b5a50a3a483a2",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e020b1899f3693b5a50a3a483a2",
                    width: 300,
                    height: 300,
                  },
                ],
              },
            },
          },
        },
        {
          data: {
            uri: "spotify:artist:7DFKQG8YFGEB8T17ynFr4x",
            profile: {
              name: "La Inquieta Tipica",
            },
            visuals: {
              avatarImage: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b2736b1bfbd02436d6c070449502",
                    width: 640,
                    height: 640,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d000048516b1bfbd02436d6c070449502",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e026b1bfbd02436d6c070449502",
                    width: 300,
                    height: 300,
                  },
                ],
              },
            },
          },
        },
        {
          data: {
            uri: "spotify:artist:6UzesULg5iDcR2FRCAUGAq",
            profile: {
              name: "La Inersia",
            },
            visuals: {
              avatarImage: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b273c5503efe668be294bab94574",
                    width: 640,
                    height: 640,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00004851c5503efe668be294bab94574",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e02c5503efe668be294bab94574",
                    width: 300,
                    height: 300,
                  },
                ],
              },
            },
          },
        },
        {
          data: {
            uri: "spotify:artist:3SfFVSxPXkPELbvJcpHh11",
            profile: {
              name: "La Inmensidad",
            },
            visuals: {
              avatarImage: null,
            },
          },
        },
        {
          data: {
            uri: "spotify:artist:3zGU4WFApuXLYKDURImTVE",
            profile: {
              name: "Banda La Iniciativa",
            },
            visuals: {
              avatarImage: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6761610000e5eb3bfcae633cd1b5f55385a2bf",
                    width: 640,
                    height: 640,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6761610000f1783bfcae633cd1b5f55385a2bf",
                    width: 160,
                    height: 160,
                  },
                  {
                    url: "https://i.scdn.co/image/ab676161000051743bfcae633cd1b5f55385a2bf",
                    width: 320,
                    height: 320,
                  },
                ],
              },
            },
          },
        },
      ],
    },
    episodes: {
      totalCount: 619,
      items: [
        {
          data: {
            uri: "spotify:episode:0kNVWoyCA21sp3IKkrYwKx",
            name: "PEPE EL TORO ES INOCENTE | Miércoles 07 de Febrero de 2024",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68dfd21cbfaa402e94ce3122fba",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1ffd21cbfaa402e94ce3122fba",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8afd21cbfaa402e94ce3122fba",
                  width: 640,
                  height: 640,
                },
              ],
            },
            duration: {
              totalMilliseconds: 2930181,
            },
            releaseDate: {
              isoString: "2024-02-07T22:14:00Z",
            },
            podcast: {
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6765630000f68dfd21cbfaa402e94ce3122fba",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67656300005f1ffd21cbfaa402e94ce3122fba",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6765630000ba8afd21cbfaa402e94ce3122fba",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            },
            description:
              "# Señora bonita, véngase a lo más cancelado, lo más desinformado, lo más ‘funado’ del internet, de este mundo y los que vienen. Aquí está la Radio de la República, el peor noticiero con su tuitero favorito Chumel Torres.",
            contentRating: {
              label: "NONE",
            },
          },
        },
        {
          data: {
            uri: "spotify:episode:1qXKQ0WAVxGue39nGl9tGf",
            name: "0. Whisky, patatas y Spain as a Service",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68d3337a01d5e5783da27f93d64",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1f3337a01d5e5783da27f93d64",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8a3337a01d5e5783da27f93d64",
                  width: 640,
                  height: 640,
                },
              ],
            },
            duration: {
              totalMilliseconds: 3363690,
            },
            releaseDate: {
              isoString: "2024-01-31T08:44:00Z",
            },
            podcast: {
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6765630000f68d96231e9b81561aae35b23730",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67656300005f1f96231e9b81561aae35b23730",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6765630000ba8a96231e9b81561aae35b23730",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            },
            description:
              "Antes de empezar el programa no teníamos ni nombre. Muy español todo. Episodio 0 para explicar de qué va todo esto y porqué nos metemos en un berenjenal del que es difícil salir indemne: abordar la Marca España desde la perspectiva del branding y la resolución de problemas complejos --- Consulta todas las notas del episodio en este enlace: https://www.laingobernable.org/whisky-patatas-y-spain-as-a-service/  ---   Send in a voice message: https://podcasters.spotify.com/pod/show/la-ingobernable/message",
            contentRating: {
              label: "NONE",
            },
          },
        },
        {
          data: {
            uri: "spotify:episode:4s3dJarhozFsmQ8PQnC0Ks",
            name: "Juana Barraza, La Mataviejitas.... ¿cruel o inocente?",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68dac406b962d6b45885571341a",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1fac406b962d6b45885571341a",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8aac406b962d6b45885571341a",
                  width: 640,
                  height: 640,
                },
              ],
            },
            duration: {
              totalMilliseconds: 2176105,
            },
            releaseDate: {
              isoString: "2024-02-01T20:28:00Z",
            },
            podcast: {
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6765630000f68dac406b962d6b45885571341a",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67656300005f1fac406b962d6b45885571341a",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6765630000ba8aac406b962d6b45885571341a",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            },
            description:
              "Durante años un/a asesina serial amenazó la vida de  mujeres de la tercera edad.  las atacaba aprovechando su vulnerabilidad, hasta que detuvieron a Juana Barraza, la Mataviejitas.  Ella dice ser inocente.Conviértete en un seguidor de este podcast: https://www.spreaker.com/podcast/almas-rotas--5914001/support.",
            contentRating: {
              label: "NONE",
            },
          },
        },
        {
          data: {
            uri: "spotify:episode:4GHaYYAbzHAXzO5IBfECRP",
            name: "La intención es la diferencia",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68dbe80daada4362d8ad40f18bd",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1fbe80daada4362d8ad40f18bd",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8abe80daada4362d8ad40f18bd",
                  width: 640,
                  height: 640,
                },
              ],
            },
            duration: {
              totalMilliseconds: 322168,
            },
            releaseDate: {
              isoString: "2023-10-13T14:16:00Z",
            },
            podcast: {
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6765630000f68d4ebeb9d71c1272a971df34d7",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67656300005f1f4ebeb9d71c1272a971df34d7",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6765630000ba8a4ebeb9d71c1272a971df34d7",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            },
            description:
              "La intención amorosa es lo que abre el camino a los fotones para iluminar, dar vida y congruencia a cada uno de nuestros actos.See omnystudio.com/listener for privacy information.",
            contentRating: {
              label: "NONE",
            },
          },
        },
        {
          data: {
            uri: "spotify:episode:76a7xtpz6HyZ9MPzdbjxOm",
            name: "Acabé en la cárcel siendo inocente - Episodio 24",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68de23ca9459a7003e75bd618f1",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1fe23ca9459a7003e75bd618f1",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8ae23ca9459a7003e75bd618f1",
                  width: 640,
                  height: 640,
                },
              ],
            },
            duration: {
              totalMilliseconds: 2693355,
            },
            releaseDate: {
              isoString: "2023-04-12T06:00:00Z",
            },
            podcast: {
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6765630000f68de23ca9459a7003e75bd618f1",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67656300005f1fe23ca9459a7003e75bd618f1",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6765630000ba8ae23ca9459a7003e75bd618f1",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            },
            description:
              "De ser una gran empresario y tenerlo todo, pasó a ser un presidario debido a una injusticia que lo privó de su libertad durante un año. Esta experiencia tan dura, que para la mayoría le hubiera destrozado, le hizo más fuerte y sobre todo un mejor ser humano. Conoce la historia de Jorge Cueto.Conviértete en un seguidor de este podcast: https://www.spreaker.com/podcast/caras-vemos-sufrimientos--6047464/support.",
            contentRating: {
              label: "NONE",
            },
          },
        },
        {
          data: {
            uri: "spotify:episode:0GRnQXRowSmWEjwAE1fVtg",
            name: "LA INCÓGNITA DE MI VIDA",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68dd2f0bc982228e5f9bca4161b",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1fd2f0bc982228e5f9bca4161b",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8ad2f0bc982228e5f9bca4161b",
                  width: 640,
                  height: 640,
                },
              ],
            },
            duration: {
              totalMilliseconds: 95457,
            },
            releaseDate: {
              isoString: "2024-02-18T23:46:00Z",
            },
            podcast: {
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6765630000f68dd2f0bc982228e5f9bca4161b",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67656300005f1fd2f0bc982228e5f9bca4161b",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6765630000ba8ad2f0bc982228e5f9bca4161b",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            },
            description:
              "Mi vida, lucerito sin vela   ---   Send in a voice message: https://podcasters.spotify.com/pod/show/enelreinodelasinrazon/message",
            contentRating: {
              label: "NONE",
            },
          },
        },
        {
          data: {
            uri: "spotify:episode:3ICMzfjnXP921hon1MZd2E",
            name: "‘La Mataviejitas’ se declara inocente en una entrevista en televisión.",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68dc4d233cf60fa3f3319423075",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1fc4d233cf60fa3f3319423075",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8ac4d233cf60fa3f3319423075",
                  width: 640,
                  height: 640,
                },
              ],
            },
            duration: {
              totalMilliseconds: 1020186,
            },
            releaseDate: {
              isoString: "2024-02-06T23:20:00Z",
            },
            podcast: {
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6765630000f68dc4d233cf60fa3f3319423075",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67656300005f1fc4d233cf60fa3f3319423075",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6765630000ba8ac4d233cf60fa3f3319423075",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            },
            description:
              "Encarcelada desde 2006 por 17 bajas de mujeres en Ciudad de México, Juana Barraza da su testimonio a ‘Canal 14’. Guion elaborado por: Guiontube  Distribuido por Genuina Media",
            contentRating: {
              label: "EXPLICIT",
            },
          },
        },
        {
          data: {
            uri: "spotify:episode:2IKgpAGa3Ym1KUl8qt1Yv5",
            name: "La Inocencia Tras El Escándalo",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68d4c4b27259d606e5919e9a5ea",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1f4c4b27259d606e5919e9a5ea",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8a4c4b27259d606e5919e9a5ea",
                  width: 640,
                  height: 640,
                },
              ],
            },
            duration: {
              totalMilliseconds: 16567822,
            },
            releaseDate: {
              isoString: "2023-06-26T15:37:00Z",
            },
            podcast: {
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6765630000f68ddd381db7c81e079389127cb3",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67656300005f1fdd381db7c81e079389127cb3",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6765630000ba8add381db7c81e079389127cb3",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            },
            description:
              "Todo el mundo hablaba de esa pareja... Desde Londres a San Petersburgo.La fotógrafa Zoe Collins estaba dispuesta a que el multimillonario Maks Marchetti despertara sus sentidos. Le habían hecho daño muchas veces y estaba dispuesta a proteger el corazón, pero quería dejar de proteger su inocencia.Maks no había conocido a nadie que lo intrigara tanto como Zoe. Era huérfana e inocente, pero parecía casi tan escéptica respecto al amor como él... lo que hacía que las noches que pasaban juntos fueran peligrosamente adictivas. Sin embargo, ¿un vínculo forjado en la cama podría resistir el asedio constante de la prensa?Support this podcast at — https://redcircle.com/audioquin/donationsAdvertising Inquiries: https://redcircle.com/brandsPrivacy & Opt-Out: https://redcircle.com/privacy",
            contentRating: {
              label: "EXPLICIT",
            },
          },
        },
        {
          data: {
            uri: "spotify:episode:22i2bUamSdSuV0czfWdGhM",
            name: "Capítulo 3 - La Percepción Inocente - Un Curso de Milagros (Audiolibro)",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/beeed320a09fe59fdd4a6a4e2584be7d6b0788ce",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/1e23d0e2a3963edbd4ed80f83070dd6c6a87e736",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/1d75d4cf862b0891f26d6ab5d6c852bd710e8997",
                  width: 640,
                  height: 640,
                },
              ],
            },
            duration: {
              totalMilliseconds: 3396075,
            },
            releaseDate: {
              isoString: "2020-05-20T16:32:00Z",
            },
            podcast: {
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/beeed320a09fe59fdd4a6a4e2584be7d6b0788ce",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/1e23d0e2a3963edbd4ed80f83070dd6c6a87e736",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/1d75d4cf862b0891f26d6ab5d6c852bd710e8997",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            },
            description:
              'Un Curso De Milagros (también conocido como UCDM) es un libro de autoaprendizaje que propone un sistema de pensamiento espiritual. Originalmente escrito en inglés por Helen Schucman, entre 1965 y 1972, y editado con la ayuda de su compañero de trabajo William Thetford (Bill), el libro fue publicado en 1976 por la Fundación para la Paz Interior, el que posee los derechos de autor. Compuesto por tres volúmenes (Texto, Libro de ejercicios y Manual del maestro), el libro enseña que el camino hacia la paz y el amor universales, o recordar a Dios, se alcanza mediante el perdón y la eliminación de la culpa. El curso luego se enfoca en las relaciones de curación, haciéndolas santas. Un Curso de Milagros también enfatiza que es solo una versión del plan de estudios universal, y que hay "miles" de otras maneras. En consecuencia, aunque el lenguaje del Curso es tradicionalmente cristiano, expresa una espiritualidad no sectaria. Un Curso de Milagros es, por lo tanto, una enseñanza espiritual universal, no una religión.Escuchalo en Youtube con el texto en telemprompter https://youtu.be/QcEB4XK8bG0?list=PLCbFpQl4lbxoL6Mj0ILsBZjeWxplGWPGCPlaylists en Youtube. Todo el TEXTO de UN CURSO DE MILAGROS https://youtu.be/QcEB4XK8bG0?list=PLCbFpQl4lbxoL6Mj0ILsBZjeWxplGWPGC #psicoterapia #transpersonal #audiolibro #uncursodemilagros #ucdm #kikeposada #leccion #lecciones #manualdelmaestro #texto #completo #enriccorbera #enriquevillanueva #espiritualidad #bioneuroemoción #biodescodificación #acourseinmiracles #Dios #ego #espíritusanto #expiación #spanish #español #abundancia #transformacion #inspiracion #UCEM #helenshucman #Thetford #fundacionparalapazinteriorConviértete en un seguidor de este podcast: https://www.spreaker.com/podcast/un-curso-de-milagros-audiolibro--4403666/support.',
            contentRating: {
              label: "NONE",
            },
          },
        },
        {
          data: {
            uri: "spotify:episode:30tBR3a17eg0RmhzHUqykh",
            name: "9.- LA INOCENTE SECUESTRADA - MIEDO (RADIOTEATRO DE SUSPENSO)",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68dedd50d636405f661c549b9be",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1fedd50d636405f661c549b9be",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8aedd50d636405f661c549b9be",
                  width: 640,
                  height: 640,
                },
              ],
            },
            duration: {
              totalMilliseconds: 2383361,
            },
            releaseDate: {
              isoString: "2022-08-30T15:04:00Z",
            },
            podcast: {
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6765630000f68dedd50d636405f661c549b9be",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67656300005f1fedd50d636405f661c549b9be",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6765630000ba8aedd50d636405f661c549b9be",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            },
            description:
              "9.- LA INOCENTE SECUESTRADA - MIEDO (RADIOTEATRO DE SUSPENSO)",
            contentRating: {
              label: "NONE",
            },
          },
        },
      ],
    },
    genres: {
      totalCount: 0,
      items: [],
    },
    playlists: {
      totalCount: 489,
      items: [
        {
          data: {
            uri: "spotify:playlist:35p2fZZO2X9aOXO3Z5LUIH",
            name: "Mora, Feid - LA INOCENTE",
            description:
              "Te di lo que pedía&#x27; Y no fue suficiente, Tu solo mentías y yo tu fiel creyente, Mil sueños me vendías, Yo fui tu cliente, Siempre era yo el culpable, Y tu jugando a la inocente #MORA #LAINOCENTE #MICRODOSIS #Feid 5908",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c6b76f941a5aa1d6e2cbe27d",
                      width: null,
                      height: null,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "Música para complacer",
            },
          },
        },
        {
          data: {
            uri: "spotify:playlist:1a57Qdx74fL2V2zfLUep1K",
            name: "LA INOCENTE",
            description: "",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://mosaic.scdn.co/640/ab67616d00001e024891d9b25d8919448388f3bbab67616d00001e0249d694203245f241a1bcaa72ab67616d00001e02851222dc5c5681bd4c3119d3ab67616d00001e02c2e05d426c037a71556c9f14",
                      width: 640,
                      height: 640,
                    },
                    {
                      url: "https://mosaic.scdn.co/300/ab67616d00001e024891d9b25d8919448388f3bbab67616d00001e0249d694203245f241a1bcaa72ab67616d00001e02851222dc5c5681bd4c3119d3ab67616d00001e02c2e05d426c037a71556c9f14",
                      width: 300,
                      height: 300,
                    },
                    {
                      url: "https://mosaic.scdn.co/60/ab67616d00001e024891d9b25d8919448388f3bbab67616d00001e0249d694203245f241a1bcaa72ab67616d00001e02851222dc5c5681bd4c3119d3ab67616d00001e02c2e05d426c037a71556c9f14",
                      width: 60,
                      height: 60,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "Mily",
            },
          },
        },
        {
          data: {
            uri: "spotify:playlist:37i9dQZF1E8PHA33yHn7Gg",
            name: "LA INOCENTE Radio",
            description: "With Mora, SAIKO, Eladio Carrion, Dei V and more",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://seeded-session-images.scdn.co/v2/img/122/secondary/track/5jt25aFjW2kNoBqaEVaz5W/en",
                      width: null,
                      height: null,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "Spotify",
            },
          },
        },
        {
          data: {
            uri: "spotify:playlist:6TjihS2GucxpwuWLbAhp5k",
            name: "LA INOCENTE",
            description: "",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://i.scdn.co/image/ab67616d00001e02851222dc5c5681bd4c3119d3",
                      width: null,
                      height: null,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "Guadalupe Mora",
            },
          },
        },
        {
          data: {
            uri: "spotify:playlist:3Itg4GLorCEGE5ggATFL9k",
            name: "LA INTENCIÓN - Peso Pluma, Christian Nodal",
            description: "",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da841b6aeb8dd41d26fbf0242352",
                      width: null,
                      height: null,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "Play Music",
            },
          },
        },
        {
          data: {
            uri: "spotify:playlist:26JcWfJsRbyUzBJ6j5iz6Y",
            name: "LA INOCENTE - Mora x Feid - te di lo que querias y no fue suficiente tu solo mentias",
            description:
              "LA INOCENTE - Mora x Feid - te di lo que querias y no fue suficiente tu solo mentias y yo tu fiel creyente",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8428b5cbba636f315bb34c0f40",
                      width: null,
                      height: null,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "El Chichitilufo",
            },
          },
        },
        {
          data: {
            uri: "spotify:playlist:7myTAAYFn3crIQQgUH5kpL",
            name: "LA INOCENTE",
            description: "",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://mosaic.scdn.co/640/ab67616d00001e0249d694203245f241a1bcaa72ab67616d00001e02548f7ec52da7313de0c5e4a0ab67616d00001e02851222dc5c5681bd4c3119d3ab67616d00001e02abe9c2b5f03653d6b87696e6",
                      width: 640,
                      height: 640,
                    },
                    {
                      url: "https://mosaic.scdn.co/300/ab67616d00001e0249d694203245f241a1bcaa72ab67616d00001e02548f7ec52da7313de0c5e4a0ab67616d00001e02851222dc5c5681bd4c3119d3ab67616d00001e02abe9c2b5f03653d6b87696e6",
                      width: 300,
                      height: 300,
                    },
                    {
                      url: "https://mosaic.scdn.co/60/ab67616d00001e0249d694203245f241a1bcaa72ab67616d00001e02548f7ec52da7313de0c5e4a0ab67616d00001e02851222dc5c5681bd4c3119d3ab67616d00001e02abe9c2b5f03653d6b87696e6",
                      width: 60,
                      height: 60,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "Rob",
            },
          },
        },
        {
          data: {
            uri: "spotify:playlist:37i9dQZF1E8NWc15m0blpT",
            name: "La Intención Radio",
            description:
              "With Christian Nodal, Espinoza Paz, El Bebeto, Pepe Aguilar and more",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://seeded-session-images.scdn.co/v2/img/122/secondary/track/05tGmdz9dVZ4yGqz4YJdPK/en",
                      width: null,
                      height: null,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "Spotify",
            },
          },
        },
        {
          data: {
            uri: "spotify:playlist:2qD1lnQDKlZNpLRwOsGvr6",
            name: "La INOCENTE 💔 - Feid X Mora",
            description:
              "Te di lo que pedía&#x27; Y no fue suficiente #MORA #LAINOCENTE #MICRODOSIS 51",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84fa3bbb3244c59103f8460269",
                      width: null,
                      height: null,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "Fabricando Flows",
            },
          },
        },
        {
          data: {
            uri: "spotify:playlist:1jNyqwPQGFGBJEbfiqui90",
            name: "LA INOCENTE",
            description: "",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://mosaic.scdn.co/640/ab67616d00001e02548f7ec52da7313de0c5e4a0ab67616d00001e02851222dc5c5681bd4c3119d3ab67616d00001e02cf7e54f668d6a31dd6566f24ab67616d00001e02dcec31b44548687b2a81d0c2",
                      width: 640,
                      height: 640,
                    },
                    {
                      url: "https://mosaic.scdn.co/300/ab67616d00001e02548f7ec52da7313de0c5e4a0ab67616d00001e02851222dc5c5681bd4c3119d3ab67616d00001e02cf7e54f668d6a31dd6566f24ab67616d00001e02dcec31b44548687b2a81d0c2",
                      width: 300,
                      height: 300,
                    },
                    {
                      url: "https://mosaic.scdn.co/60/ab67616d00001e02548f7ec52da7313de0c5e4a0ab67616d00001e02851222dc5c5681bd4c3119d3ab67616d00001e02cf7e54f668d6a31dd6566f24ab67616d00001e02dcec31b44548687b2a81d0c2",
                      width: 60,
                      height: 60,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "Felipe Martínez",
            },
          },
        },
      ],
    },
    podcasts: {
      totalCount: 150,
      items: [
        {
          data: {
            uri: "spotify:show:1kHWNOPoVWEdDCHoGDIZhw",
            name: "Esclava Remix",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68d33ed4a97db27f94c451827c2",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1f33ed4a97db27f94c451827c2",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8a33ed4a97db27f94c451827c2",
                  width: 640,
                  height: 640,
                },
              ],
            },
            type: "PODCAST",
            publisher: {
              name: "David Ante",
            },
            mediaType: "AUDIO",
          },
        },
        {
          data: {
            uri: "spotify:show:40EwHUoWabJN5SvGma69Qn",
            name: "Bromas Telefónicas | PIA Podcast",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/18a08c665d49736a3c4d2d69c0e818b4ace3b59d",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/55e2f55063567ff5d533211410a1956e023bec7d",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/57213601767702dfbac556e9cb61b7191228bb71",
                  width: 640,
                  height: 640,
                },
              ],
            },
            type: "PODCAST",
            publisher: {
              name: "PIA Podcast",
            },
            mediaType: "AUDIO",
          },
        },
        {
          data: {
            uri: "spotify:show:3DpFrcffLxyt5on2ef32ta",
            name: "La Incongruencia",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68dff61a1b0ee0160691904443e",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1fff61a1b0ee0160691904443e",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8aff61a1b0ee0160691904443e",
                  width: 640,
                  height: 640,
                },
              ],
            },
            type: "PODCAST",
            publisher: {
              name: "Luis Calero",
            },
            mediaType: "AUDIO",
          },
        },
        {
          data: {
            uri: "spotify:show:4xZBTzKdnILcl7yHnAuWnJ",
            name: "ferxxo 81",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68d22d28f474789c70502d3f149",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1f22d28f474789c70502d3f149",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8a22d28f474789c70502d3f149",
                  width: 640,
                  height: 640,
                },
              ],
            },
            type: "PODCAST",
            publisher: {
              name: "Xxalejo Morales",
            },
            mediaType: "AUDIO",
          },
        },
        {
          data: {
            uri: "spotify:show:6nb7CunxSjGmyIuaepTIUA",
            name: "La sombras de los inocentes ",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68d1aae4c77831a63466903e098",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1f1aae4c77831a63466903e098",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8a1aae4c77831a63466903e098",
                  width: 640,
                  height: 640,
                },
              ],
            },
            type: "PODCAST",
            publisher: {
              name: "AleB",
            },
            mediaType: "AUDIO",
          },
        },
        {
          data: {
            uri: "spotify:show:2yOWSu1VhFdCqvafhnNu6e",
            name: "La invitación es a reconocerte...",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68dccebc9e603a7a1589f19ad55",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1fccebc9e603a7a1589f19ad55",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8accebc9e603a7a1589f19ad55",
                  width: 640,
                  height: 640,
                },
              ],
            },
            type: "PODCAST",
            publisher: {
              name: "Gaby Bustos",
            },
            mediaType: "MIXED",
          },
        },
        {
          data: {
            uri: "spotify:show:35nP9yXIe2yGXvFwZv4skw",
            name: "Las Lic.",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68dbfb5a535da9e62340ae8614f",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1fbfb5a535da9e62340ae8614f",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8abfb5a535da9e62340ae8614f",
                  width: 640,
                  height: 640,
                },
              ],
            },
            type: "PODCAST",
            publisher: {
              name: "Las Lic.",
            },
            mediaType: "AUDIO",
          },
        },
        {
          data: {
            uri: "spotify:show:0H3C4AxP85bQPBwhQJ7KYq",
            name: "La Incómoda",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68df7a209113f3a4c0a3cc6cd3d",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1ff7a209113f3a4c0a3cc6cd3d",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8af7a209113f3a4c0a3cc6cd3d",
                  width: 640,
                  height: 640,
                },
              ],
            },
            type: "PODCAST",
            publisher: {
              name: "Nuridya Oseguera",
            },
            mediaType: "AUDIO",
          },
        },
        {
          data: {
            uri: "spotify:show:07rzK0nj9n2RFz4zzKtlLD",
            name: "es un crimen.",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68de156f517fd4d656b0361d209",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1fe156f517fd4d656b0361d209",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8ae156f517fd4d656b0361d209",
                  width: 640,
                  height: 640,
                },
              ],
            },
            type: "PODCAST",
            publisher: {
              name: "María de los Ángeles Bernárdez",
            },
            mediaType: "AUDIO",
          },
        },
        {
          data: {
            uri: "spotify:show:1icjmpGtWn6WrAj8SY82se",
            name: "Inocentes inconscientes ",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68dcdba6c675bf5f237b0bcf630",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1fcdba6c675bf5f237b0bcf630",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8acdba6c675bf5f237b0bcf630",
                  width: 640,
                  height: 640,
                },
              ],
            },
            type: "PODCAST",
            publisher: {
              name: "Alexis mejia y Daniel Villegas",
            },
            mediaType: "AUDIO",
          },
        },
      ],
    },
    topResults: {
      items: [
        {
          data: {
            uri: "spotify:track:5jt25aFjW2kNoBqaEVaz5W",
            id: "5jt25aFjW2kNoBqaEVaz5W",
            name: "LA INOCENTE",
            albumOfTrack: {
              uri: "spotify:album:0QLDQG7Jx78rEUDW03IhHC",
              name: "MICRODOSIS",
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e02851222dc5c5681bd4c3119d3",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00004851851222dc5c5681bd4c3119d3",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b273851222dc5c5681bd4c3119d3",
                    width: 640,
                    height: 640,
                  },
                ],
              },
              id: "0QLDQG7Jx78rEUDW03IhHC",
              sharingInfo: {
                shareUrl:
                  "https://open.spotify.com/album/0QLDQG7Jx78rEUDW03IhHC?si=BkW1I3ptRq2mn0ZOL06zMg",
              },
            },
            artists: {
              items: [
                {
                  uri: "spotify:artist:0Q8NcsJwoCbZOHHW63su5S",
                  profile: {
                    name: "Mora",
                  },
                },
                {
                  uri: "spotify:artist:2LRoIwlKmHjgvigdNGBHNo",
                  profile: {
                    name: "Feid",
                  },
                },
              ],
            },
            contentRating: {
              label: "EXPLICIT",
            },
            duration: {
              totalMilliseconds: 202173,
            },
            playability: {
              playable: true,
            },
          },
        },
        {
          data: {
            uri: "spotify:track:2hLXUbsOU9cDb9RFva9FYr",
            id: "2hLXUbsOU9cDb9RFva9FYr",
            name: "MEMORIAS",
            albumOfTrack: {
              uri: "spotify:album:0QLDQG7Jx78rEUDW03IhHC",
              name: "MICRODOSIS",
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e02851222dc5c5681bd4c3119d3",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00004851851222dc5c5681bd4c3119d3",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b273851222dc5c5681bd4c3119d3",
                    width: 640,
                    height: 640,
                  },
                ],
              },
              id: "0QLDQG7Jx78rEUDW03IhHC",
              sharingInfo: {
                shareUrl:
                  "https://open.spotify.com/album/0QLDQG7Jx78rEUDW03IhHC?si=BkW1I3ptRq2mn0ZOL06zMg",
              },
            },
            artists: {
              items: [
                {
                  uri: "spotify:artist:0Q8NcsJwoCbZOHHW63su5S",
                  profile: {
                    name: "Mora",
                  },
                },
                {
                  uri: "spotify:artist:6nVcHLIgY5pE2YCl8ubca1",
                  profile: {
                    name: "Jhayco",
                  },
                },
              ],
            },
            contentRating: {
              label: "NONE",
            },
            duration: {
              totalMilliseconds: 228750,
            },
            playability: {
              playable: true,
            },
          },
        },
        {
          data: {
            uri: "spotify:track:0X8P2HTRrCH7S3ByFdU9er",
            id: "0X8P2HTRrCH7S3ByFdU9er",
            name: "La Inocente",
            albumOfTrack: {
              uri: "spotify:album:6Y8Lmy3YLqhVmzb71By4oS",
              name: "Pa´la Calle",
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e02da6ff2df9627a8715d667982",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00004851da6ff2df9627a8715d667982",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b273da6ff2df9627a8715d667982",
                    width: 640,
                    height: 640,
                  },
                ],
              },
              id: "6Y8Lmy3YLqhVmzb71By4oS",
              sharingInfo: {
                shareUrl:
                  "https://open.spotify.com/album/6Y8Lmy3YLqhVmzb71By4oS?si=1_5qXxoFQe2UcDAQqWCpBQ",
              },
            },
            artists: {
              items: [
                {
                  uri: "spotify:artist:4gf0sPFgVk6KLAAnhIbg77",
                  profile: {
                    name: "Yader Romero",
                  },
                },
                {
                  uri: "spotify:artist:3fwLvzwmgJkUwtn9YmpTiB",
                  profile: {
                    name: "La Banda del 5",
                  },
                },
                {
                  uri: "spotify:artist:0XaKCScs9dh3P9vsyKeIOX",
                  profile: {
                    name: "Luis Campillo",
                  },
                },
              ],
            },
            contentRating: {
              label: "NONE",
            },
            duration: {
              totalMilliseconds: 244396,
            },
            playability: {
              playable: true,
            },
          },
        },
        {
          data: {
            uri: "spotify:artist:2LRoIwlKmHjgvigdNGBHNo",
            profile: {
              name: "Feid",
            },
            visuals: {
              avatarImage: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab6761610000e5eb9e7c05016af970bb9bf76cc1",
                    width: 640,
                    height: 640,
                  },
                  {
                    url: "https://i.scdn.co/image/ab6761610000f1789e7c05016af970bb9bf76cc1",
                    width: 160,
                    height: 160,
                  },
                  {
                    url: "https://i.scdn.co/image/ab676161000051749e7c05016af970bb9bf76cc1",
                    width: 320,
                    height: 320,
                  },
                ],
              },
            },
          },
        },
        {
          data: {
            uri: "spotify:playlist:35p2fZZO2X9aOXO3Z5LUIH",
            name: "Mora, Feid - LA INOCENTE",
            description:
              "Te di lo que pedía&#x27; Y no fue suficiente, Tu solo mentías y yo tu fiel creyente, Mil sueños me vendías, Yo fui tu cliente, Siempre era yo el culpable, Y tu jugando a la inocente #MORA #LAINOCENTE #MICRODOSIS #Feid 5908",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c6b76f941a5aa1d6e2cbe27d",
                      width: null,
                      height: null,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "Música para complacer",
            },
          },
        },
      ],
      featured: [
        {
          data: {
            uri: "spotify:playlist:37i9dQZF1DZ06evO1AVNEQ",
            name: "This Is Feid",
            description:
              "This is Feid. The essential tracks, all in one playlist.",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1AVNEQ-default.jpg",
                      width: null,
                      height: null,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "Spotify",
            },
          },
        },
        {
          data: {
            uri: "spotify:playlist:37i9dQZF1E4uKEDCrc4KID",
            name: "Feid Radio",
            description: "With Mora, Ryan Castro, Blessd and more",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/2LRoIwlKmHjgvigdNGBHNo/en",
                      width: null,
                      height: null,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "Spotify",
            },
          },
        },
        {
          data: {
            uri: "spotify:playlist:37i9dQZF1DX43v1NFXUzji",
            name: "Latin Gaming",
            description:
              "Latin music bangers for your gaming session! Santa Fe Klan, Peso Pluma y Duki on cover",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://i.scdn.co/image/ab67706f00000002e448c34571cfa7db1b538a22",
                      width: null,
                      height: null,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "Spotify",
            },
          },
        },
        {
          data: {
            uri: "spotify:playlist:37i9dQZF1DX10zKzsJ2jva",
            name: "Viva Latino",
            description:
              "Today's top Latin hits, elevando nuestra música. Cover: KAROL G",
            images: {
              items: [
                {
                  sources: [
                    {
                      url: "https://i.scdn.co/image/ab67706f000000023df4cce5debf34cb2bfc6a4d",
                      width: null,
                      height: null,
                    },
                  ],
                },
              ],
            },
            owner: {
              name: "Spotify",
            },
          },
        },
      ],
    },
    tracks: {
      totalCount: 845,
      items: [
        {
          data: {
            uri: "spotify:track:5jt25aFjW2kNoBqaEVaz5W",
            id: "5jt25aFjW2kNoBqaEVaz5W",
            name: "LA INOCENTE",
            albumOfTrack: {
              uri: "spotify:album:0QLDQG7Jx78rEUDW03IhHC",
              name: "MICRODOSIS",
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e02851222dc5c5681bd4c3119d3",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00004851851222dc5c5681bd4c3119d3",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b273851222dc5c5681bd4c3119d3",
                    width: 640,
                    height: 640,
                  },
                ],
              },
              id: "0QLDQG7Jx78rEUDW03IhHC",
              sharingInfo: {
                shareUrl:
                  "https://open.spotify.com/album/0QLDQG7Jx78rEUDW03IhHC?si=0Ojcuwh3TLug4kedIerM4A",
              },
            },
            artists: {
              items: [
                {
                  uri: "spotify:artist:0Q8NcsJwoCbZOHHW63su5S",
                  profile: {
                    name: "Mora",
                  },
                },
                {
                  uri: "spotify:artist:2LRoIwlKmHjgvigdNGBHNo",
                  profile: {
                    name: "Feid",
                  },
                },
              ],
            },
            contentRating: {
              label: "EXPLICIT",
            },
            duration: {
              totalMilliseconds: 202173,
            },
            playability: {
              playable: true,
            },
          },
        },
        {
          data: {
            uri: "spotify:track:2hLXUbsOU9cDb9RFva9FYr",
            id: "2hLXUbsOU9cDb9RFva9FYr",
            name: "MEMORIAS",
            albumOfTrack: {
              uri: "spotify:album:0QLDQG7Jx78rEUDW03IhHC",
              name: "MICRODOSIS",
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e02851222dc5c5681bd4c3119d3",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00004851851222dc5c5681bd4c3119d3",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b273851222dc5c5681bd4c3119d3",
                    width: 640,
                    height: 640,
                  },
                ],
              },
              id: "0QLDQG7Jx78rEUDW03IhHC",
              sharingInfo: {
                shareUrl:
                  "https://open.spotify.com/album/0QLDQG7Jx78rEUDW03IhHC?si=0Ojcuwh3TLug4kedIerM4A",
              },
            },
            artists: {
              items: [
                {
                  uri: "spotify:artist:0Q8NcsJwoCbZOHHW63su5S",
                  profile: {
                    name: "Mora",
                  },
                },
                {
                  uri: "spotify:artist:6nVcHLIgY5pE2YCl8ubca1",
                  profile: {
                    name: "Jhayco",
                  },
                },
              ],
            },
            contentRating: {
              label: "NONE",
            },
            duration: {
              totalMilliseconds: 228750,
            },
            playability: {
              playable: true,
            },
          },
        },
        {
          data: {
            uri: "spotify:track:0X8P2HTRrCH7S3ByFdU9er",
            id: "0X8P2HTRrCH7S3ByFdU9er",
            name: "La Inocente",
            albumOfTrack: {
              uri: "spotify:album:6Y8Lmy3YLqhVmzb71By4oS",
              name: "Pa´la Calle",
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e02da6ff2df9627a8715d667982",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00004851da6ff2df9627a8715d667982",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b273da6ff2df9627a8715d667982",
                    width: 640,
                    height: 640,
                  },
                ],
              },
              id: "6Y8Lmy3YLqhVmzb71By4oS",
              sharingInfo: {
                shareUrl:
                  "https://open.spotify.com/album/6Y8Lmy3YLqhVmzb71By4oS?si=jte6fKUxT12ZWyG-tWIrwQ",
              },
            },
            artists: {
              items: [
                {
                  uri: "spotify:artist:4gf0sPFgVk6KLAAnhIbg77",
                  profile: {
                    name: "Yader Romero",
                  },
                },
                {
                  uri: "spotify:artist:3fwLvzwmgJkUwtn9YmpTiB",
                  profile: {
                    name: "La Banda del 5",
                  },
                },
                {
                  uri: "spotify:artist:0XaKCScs9dh3P9vsyKeIOX",
                  profile: {
                    name: "Luis Campillo",
                  },
                },
              ],
            },
            contentRating: {
              label: "NONE",
            },
            duration: {
              totalMilliseconds: 244396,
            },
            playability: {
              playable: true,
            },
          },
        },
        {
          data: {
            uri: "spotify:track:6F9yAYUaNbUhdlQyt5uZ3b",
            id: "6F9yAYUaNbUhdlQyt5uZ3b",
            name: "La Incondicional",
            albumOfTrack: {
              uri: "spotify:album:6JSqwckfTYWbJj4R1fdOOo",
              name: "Busca Una Mujer",
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e0284fe22dc0e9d864fd44ff9f8",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d0000485184fe22dc0e9d864fd44ff9f8",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b27384fe22dc0e9d864fd44ff9f8",
                    width: 640,
                    height: 640,
                  },
                ],
              },
              id: "6JSqwckfTYWbJj4R1fdOOo",
              sharingInfo: {
                shareUrl:
                  "https://open.spotify.com/album/6JSqwckfTYWbJj4R1fdOOo?si=JoVd2WE5TCaRihtQqzcAeg",
              },
            },
            artists: {
              items: [
                {
                  uri: "spotify:artist:2nszmSgqreHSdJA3zWPyrW",
                  profile: {
                    name: "Luis Miguel",
                  },
                },
              ],
            },
            contentRating: {
              label: "NONE",
            },
            duration: {
              totalMilliseconds: 257026,
            },
            playability: {
              playable: true,
            },
          },
        },
        {
          data: {
            uri: "spotify:track:7bywjHOc0wSjGGbj04XbVi",
            id: "7bywjHOc0wSjGGbj04XbVi",
            name: "LUNA",
            albumOfTrack: {
              uri: "spotify:album:0lgs2Sa82lyX89nBUWyUy6",
              name: "FERXXOCALIPSIS",
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e02f1aad814a40ec7419c234242",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00004851f1aad814a40ec7419c234242",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b273f1aad814a40ec7419c234242",
                    width: 640,
                    height: 640,
                  },
                ],
              },
              id: "0lgs2Sa82lyX89nBUWyUy6",
              sharingInfo: {
                shareUrl:
                  "https://open.spotify.com/album/0lgs2Sa82lyX89nBUWyUy6?si=F2mAdfEiSnOqG82FU3d2vw",
              },
            },
            artists: {
              items: [
                {
                  uri: "spotify:artist:2LRoIwlKmHjgvigdNGBHNo",
                  profile: {
                    name: "Feid",
                  },
                },
                {
                  uri: "spotify:artist:7jAs1uPnpfNmT6e5qtEPxq",
                  profile: {
                    name: "ATL Jacob",
                  },
                },
              ],
            },
            contentRating: {
              label: "NONE",
            },
            duration: {
              totalMilliseconds: 196800,
            },
            playability: {
              playable: true,
            },
          },
        },
        {
          data: {
            uri: "spotify:track:6CaYgoV2QPjLjsypPhFDno",
            id: "6CaYgoV2QPjLjsypPhFDno",
            name: "LA INOCENTE",
            albumOfTrack: {
              uri: "spotify:album:0MNUtER5p2NrsLxFqjF1xn",
              name: "LO K SIGUE",
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e02722153d2e2f907773758944f",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00004851722153d2e2f907773758944f",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b273722153d2e2f907773758944f",
                    width: 640,
                    height: 640,
                  },
                ],
              },
              id: "0MNUtER5p2NrsLxFqjF1xn",
              sharingInfo: {
                shareUrl:
                  "https://open.spotify.com/album/0MNUtER5p2NrsLxFqjF1xn?si=nfDsZhEsREy0Ju3PZJcz2w",
              },
            },
            artists: {
              items: [
                {
                  uri: "spotify:artist:18Cgc3wh2bCEW8HzEz3db3",
                  profile: {
                    name: "Lil Baby Grand",
                  },
                },
              ],
            },
            contentRating: {
              label: "NONE",
            },
            duration: {
              totalMilliseconds: 216989,
            },
            playability: {
              playable: true,
            },
          },
        },
        {
          data: {
            uri: "spotify:track:6rXvMpWJbTyhSrVWye7jPE",
            id: "6rXvMpWJbTyhSrVWye7jPE",
            name: "Inocente",
            albumOfTrack: {
              uri: "spotify:album:17HsiXfqKUPoTP6Y5ebs1L",
              name: "Fórmula, Vol. 2 (Deluxe Edition)",
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e02e9da42890bbd629df1e8f640",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00004851e9da42890bbd629df1e8f640",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b273e9da42890bbd629df1e8f640",
                    width: 640,
                    height: 640,
                  },
                ],
              },
              id: "17HsiXfqKUPoTP6Y5ebs1L",
              sharingInfo: {
                shareUrl:
                  "https://open.spotify.com/album/17HsiXfqKUPoTP6Y5ebs1L?si=Brgai-yoQJW3RZeiJJ5gdg",
              },
            },
            artists: {
              items: [
                {
                  uri: "spotify:artist:5lwmRuXgjX8xIwlnauTZIP",
                  profile: {
                    name: "Romeo Santos",
                  },
                },
              ],
            },
            contentRating: {
              label: "NONE",
            },
            duration: {
              totalMilliseconds: 236293,
            },
            playability: {
              playable: true,
            },
          },
        },
        {
          data: {
            uri: "spotify:track:559YUIWxUc8Mx4lsla13Ff",
            id: "559YUIWxUc8Mx4lsla13Ff",
            name: "MODELITO",
            albumOfTrack: {
              uri: "spotify:album:7b3PrkHcWx17AQwlI2M1Uc",
              name: "PARAÍSO",
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e02076ef0fed51ff7a4911459e9",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00004851076ef0fed51ff7a4911459e9",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b273076ef0fed51ff7a4911459e9",
                    width: 640,
                    height: 640,
                  },
                ],
              },
              id: "7b3PrkHcWx17AQwlI2M1Uc",
              sharingInfo: {
                shareUrl:
                  "https://open.spotify.com/album/7b3PrkHcWx17AQwlI2M1Uc?si=BVz1pwVFQ3y5q1q5fiKmwA",
              },
            },
            artists: {
              items: [
                {
                  uri: "spotify:artist:0Q8NcsJwoCbZOHHW63su5S",
                  profile: {
                    name: "Mora",
                  },
                },
                {
                  uri: "spotify:artist:4aSlfXDn9R60UlbZEboBUy",
                  profile: {
                    name: "YOVNGCHIMI",
                  },
                },
              ],
            },
            contentRating: {
              label: "EXPLICIT",
            },
            duration: {
              totalMilliseconds: 190496,
            },
            playability: {
              playable: true,
            },
          },
        },
        {
          data: {
            uri: "spotify:track:3Ek2eYoi58bAksHpP7jSEw",
            id: "3Ek2eYoi58bAksHpP7jSEw",
            name: "La Inocente",
            albumOfTrack: {
              uri: "spotify:album:0d3Wh2K6sHodVPdABbJrgF",
              name: "La Inocente",
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e02baecc0648b21da28d1b52e4d",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d00004851baecc0648b21da28d1b52e4d",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b273baecc0648b21da28d1b52e4d",
                    width: 640,
                    height: 640,
                  },
                ],
              },
              id: "0d3Wh2K6sHodVPdABbJrgF",
              sharingInfo: {
                shareUrl:
                  "https://open.spotify.com/album/0d3Wh2K6sHodVPdABbJrgF?si=bLVYFpEUQO-9DXnNNrdefA",
              },
            },
            artists: {
              items: [
                {
                  uri: "spotify:artist:7K5OqI5GnphpZMfIRs2UsI",
                  profile: {
                    name: "Mar Lucas",
                  },
                },
              ],
            },
            contentRating: {
              label: "NONE",
            },
            duration: {
              totalMilliseconds: 136800,
            },
            playability: {
              playable: true,
            },
          },
        },
        {
          data: {
            uri: "spotify:track:07eET3PAzpSz5CLE4wGgN5",
            id: "07eET3PAzpSz5CLE4wGgN5",
            name: "Inocente",
            albumOfTrack: {
              uri: "spotify:album:5elDXKomKQ4hLFCHO06Db1",
              name: "Inocente",
              coverArt: {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67616d00001e020293ad9bb7369b130182b3a8",
                    width: 300,
                    height: 300,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d000048510293ad9bb7369b130182b3a8",
                    width: 64,
                    height: 64,
                  },
                  {
                    url: "https://i.scdn.co/image/ab67616d0000b2730293ad9bb7369b130182b3a8",
                    width: 640,
                    height: 640,
                  },
                ],
              },
              id: "5elDXKomKQ4hLFCHO06Db1",
              sharingInfo: {
                shareUrl:
                  "https://open.spotify.com/album/5elDXKomKQ4hLFCHO06Db1?si=_B6sRXVXSbuKq3GEJ-GSLQ",
              },
            },
            artists: {
              items: [
                {
                  uri: "spotify:artist:7iK8PXO48WeuP03g8YR51W",
                  profile: {
                    name: "Myke Towers",
                  },
                },
              ],
            },
            contentRating: {
              label: "EXPLICIT",
            },
            duration: {
              totalMilliseconds: 201579,
            },
            playability: {
              playable: true,
            },
          },
        },
      ],
    },
    users: {
      totalCount: 25,
      items: [
        {
          data: {
            uri: "spotify:user:22mikgnesehtpecevyc3i2qpq",
            id: "22mikgnesehtpecevyc3i2qpq",
            displayName: "Lana Inocente",
            username: "22mikgnesehtpecevyc3i2qpq",
            image: {
              smallImageUrl:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1129970520358464&height=50&width=50&ext=1712174025&hash=AfrHVDJZ1iJuuMfob0GwD3w4ATMpX_FnhTBk_aQmZ5zapQ",
              largeImageUrl:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1129970520358464&height=300&width=300&ext=1712174024&hash=Afq_NnkbntkCL-Cvt253E68fBxAYx-OXzFtaTYFVFZFPWg",
            },
          },
        },
        {
          data: {
            uri: "spotify:user:12168980336",
            id: "12168980336",
            displayName: "Inocente Lagunas",
            username: "12168980336",
            image: {
              smallImageUrl:
                "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/397963684_24356759823968351_2879777645447251062_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=107&ccb=1-7&_nc_sid=4da83f&_nc_ohc=Hq0H3V-KFbkAX8hGzUy&_nc_ht=scontent-iad3-1.xx&edm=AP4hL3IEAAAA&oh=00_AfCSJoj4LWp2yOpndGh2iEYxDZQadK5Nye046EQPsKQEnA&oe=65EBACC8",
              largeImageUrl:
                "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/397963684_24356759823968351_2879777645447251062_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=9e7101&_nc_ohc=Hq0H3V-KFbkAX8hGzUy&_nc_ht=scontent-iad3-1.xx&edm=AP4hL3IEAAAA&oh=00_AfC_AK6BSK88jFE2IgVFNhPJd2_xTRERN-ms3GDM5UkpWA&oe=65EBACC8",
            },
          },
        },
        {
          data: {
            uri: "spotify:user:12182765945",
            id: "12182765945",
            displayName: "Laura Beatriz Inocente",
            username: "12182765945",
            image: {
              smallImageUrl:
                "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/272000408_6758583494215954_437520983309502119_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=101&ccb=1-7&_nc_sid=4da83f&_nc_ohc=VBjwCGnztCoAX84hnK6&_nc_ht=scontent-iad3-1.xx&edm=AP4hL3IEAAAA&oh=00_AfCeJ93ZUw3SLNeDSeq5cXRX3dM9yf02jifzDRn9yt8ySA&oe=65EAA70F",
              largeImageUrl:
                "https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-1/272000408_6758583494215954_437520983309502119_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=9e7101&_nc_ohc=VBjwCGnztCoAX84hnK6&_nc_ht=scontent-iad3-1.xx&edm=AP4hL3IEAAAA&oh=00_AfDgVoP1ORWzohmJ_pT3UkkbCNFyDoJQmUmzM1QuVYCb7g&oe=65EAA70F",
            },
          },
        },
        {
          data: {
            uri: "spotify:user:22yiimmii7ffffm3b5tdu4dgq",
            id: "22yiimmii7ffffm3b5tdu4dgq",
            displayName: "Yusely Laura Inocente",
            username: "22yiimmii7ffffm3b5tdu4dgq",
            image: {
              smallImageUrl:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1189446427799092&height=50&width=50&ext=1712191009&hash=AfpdQT52NceTy10XvzLt0cPkrN56yfSebcNA_-y6TW4YpA",
              largeImageUrl:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1189446427799092&height=300&width=300&ext=1712191009&hash=AfrnU5ib_DuzGOPg8y0Diee61dkRkd7kDAvXGC5WYFR6Aw",
            },
          },
        },
        {
          data: {
            uri: "spotify:user:laradream08",
            id: "laradream08",
            displayName: "Lara Inocente Ramos",
            username: "laradream08",
            image: {
              smallImageUrl:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1109890049027912&height=50&width=50&ext=1712174024&hash=Afpw088i0AOwQf-y41dxpYOMkawcO9Kk275G7Y296gdVKA",
              largeImageUrl:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1109890049027912&height=300&width=300&ext=1712174024&hash=Afq5eQS1NyQbuMUlHqqU0_aTs2qcSunoQSj3DkAVf506fA",
            },
          },
        },
        {
          data: {
            uri: "spotify:user:1292616225",
            id: "1292616225",
            displayName: "Inocente Lara Pedraza",
            username: "1292616225",
            image: {
              smallImageUrl:
                "https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-1/112362264_10158805844677392_9166619404640020832_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=db1b99&_nc_ohc=_-LMQjxAnbcAX_IGmYp&_nc_ht=scontent-atl3-1.xx&edm=AP4hL3IEAAAA&oh=00_AfC5Js6xC5r2mVz6T-J2BMqxNIDrX6Q16TmCz3mhPBlS4Q&oe=660E0707",
              largeImageUrl:
                "https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-1/112362264_10158805844677392_9166619404640020832_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=0be577&_nc_ohc=_-LMQjxAnbcAX_IGmYp&_nc_ht=scontent-atl3-1.xx&edm=AP4hL3IEAAAA&oh=00_AfDvpF7frziYI2wZHE6J3EF0IOS2ajQyiWThZpOjHgJc7A&oe=660E0707",
            },
          },
        },
        {
          data: {
            uri: "spotify:user:31cbp3zah6axu2y24daqycufe3m4",
            id: "31cbp3zah6axu2y24daqycufe3m4",
            displayName: "Inocente de la Rosa",
            username: "31cbp3zah6axu2y24daqycufe3m4",
            image: {
              smallImageUrl:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1274046526290010&height=50&width=50&ext=1712199949&hash=AfqMnS8ukZmgve9P1HtZzVU7y4u4ncqzoTg6LNhv5683jg",
              largeImageUrl:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1274046526290010&height=300&width=300&ext=1712199949&hash=Afp_pA4sVxh3Tx-YaTDSga_E8Iew75n03f8D6QDOHxlNLg",
            },
          },
        },
        {
          data: {
            uri: "spotify:user:31jekujnas7ufwrzdhqnu6tzbism",
            id: "31jekujnas7ufwrzdhqnu6tzbism",
            displayName: "la inocente",
            username: "31jekujnas7ufwrzdhqnu6tzbism",
            image: {
              smallImageUrl:
                "https://i.scdn.co/image/ab67757000003b82af7bba9bb53e6eb1bcbf27de",
              largeImageUrl:
                "https://i.scdn.co/image/ab6775700000ee85af7bba9bb53e6eb1bcbf27de",
            },
          },
        },
        {
          data: {
            uri: "spotify:user:542vlmioylugxbtrgoulcv6zc",
            id: "542vlmioylugxbtrgoulcv6zc",
            displayName: "La inocente",
            username: "542vlmioylugxbtrgoulcv6zc",
            image: {
              smallImageUrl: null,
              largeImageUrl: null,
            },
          },
        },
        {
          data: {
            uri: "spotify:user:31bot4bl7d4spx2xhzredh2lohwe",
            id: "31bot4bl7d4spx2xhzredh2lohwe",
            displayName: "Yanella Lara Inocente",
            username: "31bot4bl7d4spx2xhzredh2lohwe",
            image: {
              smallImageUrl:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=657327787654723&height=50&width=50&ext=1712202954&hash=AfpmY8NnS0SHZKaMJTL36X52BKnnqWOC2XICUt1v_Rx5tQ",
              largeImageUrl:
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=657327787654723&height=300&width=300&ext=1712202954&hash=AfqPBvNMxUpkXJ8bR2ltmtWo59MiHIdIAuSQyz4sQM8how",
            },
          },
        },
      ],
    },
  };

  //   const url =
  //     "https://spotify23.p.rapidapi.com/search/?q=la%20inocente&type=multi&offset=0&limit=10&numberOfTopResults=5";
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "47d19caf48msh6d99a868248c466p114a55jsnde8b4aa351ef",
  //       "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  //     },
  //   };

  //   useEffect(() => {
  //     const fetchss = async () => {
  //       const response = await fetch(url, options);
  //       const data = await response.json();
  //       console.log(data);
  //       // setTema(data)
  //     };
  //     // fetchss()
  //     console.log(datos.tracks.items);
  //     setTema(datos.tracks.items);
  //   }, []);

  return (
    <>
      {/* {tema.map((elemento) => (
        <li key={elemento.id}>
          {elemento.data.name}
          <img
            src={elemento.data.albumOfTrack.coverArt.sources[0].url}
            alt=""
          />
        </li>
      ))}
      {tema.forEach((elemento) => {
        console.log(elemento.data);
      })} */}
      <Hero setTema={setTema} setReproduciendo={setReproduciendo} api={api} />
      <BarraControl tema={tema} reproduciendo={reproduciendo} setReproduciendo={setReproduciendo} />
    </>
  );
}

export default App;
