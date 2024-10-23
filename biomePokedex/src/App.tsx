import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [count, setCount] = useState(0);
  const pokemonList = [
    {
      name: "Bulbazaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
      name: "Mew",
      imgSrc: "https://static.pkmcards.fr/cards/fr/mew/image-cartes-a-collectionner-pokemon-card-game-tcg-pkmcards-mew-fr-193-ecarlate-et-violet-151-mew-ex.webp",
    },
  ]

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[0]} />
        <PokemonCard pokemon={pokemonList[1]} />
      </div>
    </>
  );
}

export default App;
