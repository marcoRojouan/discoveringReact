import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [count, setCount] = useState(0);
  const pokemonList = [
    {
      name: "Onion Turtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
      name: "Mew",
    },
  ]

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[0]} />
      </div>
    </>
  );
}

export default App;
