import altaFidelidade from "../../../assets/altaFidelidade.jpg";
import anoMacaco from "../../../assets/anoMacaco.jpg";
import contoAia from "../../../assets/contoAia.jpg";
import guia from "../../../assets/guia.jpg";
import ilumina from "../../../assets/ilumina.jpg";
import impressao from "../../../assets/impressao.jpg";
import livre from "../../../assets/livre.jpg";
import maoEsquerda from "../../../assets/maoEsquerda.jpg";
import Murakami from "../../../assets/Murakami.jpg";
import peso from "../../../assets/peso.jpg";
import torto from "../../../assets/torto.jpg";
import virgens from "../../../assets/virgens.jpg";

const defaultState = [
  {
    id: 1,
    name: "Alta Fidelidade",
    author: "Nick Hornby",
    price: 40,
    img: altaFidelidade,
  },
  {
    id: 2,
    name: "Kafka à beira-mar",
    author: "Haruki Murakami",
    price: 60,
    img: Murakami,
  },
  {
    id: 3,
    name: "A mão esquerda da escuridão",
    author: "Ursula K. Le Guin",
    price: 40,
    img: maoEsquerda,
  },
  {
    id: 4,
    name: "O conto do aia",
    author: "Margaret Atwood",
    price: 30,
    img: contoAia,
  },
  {
    id: 5,
    name: "O ano do macaco",
    author: "Patti Smith",
    price: 30,
    img: anoMacaco,
  },
  { id: 6, name: "Livre", author: "Cheryl Strayed", price: 35, img: livre },
  {
    id: 7,
    name: "As virgens suicidas",
    author: "Jeffrey Eugenides",
    price: 28,
    img: virgens,
  },
  {
    id: 8,
    name: "O peso do pássaro morto",
    author: "Aline Bei",
    price: 31,
    img: peso,
  },
  {
    id: 9,
    name: "Torto Arado",
    author: "Itamar Vieira Junior",
    price: 28,
    img: torto,
  },
  {
    id: 10,
    name: "Impressão sua",
    author: "André Dahmer",
    price: 38,
    img: impressao,
  },
  {
    id: 11,
    name: "Tudo se ilumina",
    author: "Jonathan Safran Foer",
    price: 40,
    img: ilumina,
  },
  {
    id: 12,
    name: "Guia dos mochileiros das Galáxias",
    author: "Douglas Adams",
    price: 55,
    img: guia,
  },
];

const productsReducer = (state = defaultState, action) => {
  return state;
};

export default productsReducer;
