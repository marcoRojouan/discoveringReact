import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {




  const pokemonList = [
    {
      name: "Bulbazaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "Mew",
      imgSrc: "https://static.pkmcards.fr/cards/fr/mew/image-cartes-a-collectionner-pokemon-card-game-tcg-pkmcards-mew-fr-193-ecarlate-et-violet-151-mew-ex.webp",
    },
  ]

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1)

  };

  const handleBack = () => {
    setPokemonIndex(pokemonIndex - 1)
  }


  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
      {pokemonIndex > 0 ? <button type="button" onClick={handleBack} >Précédent</button> : null}
      {pokemonIndex < pokemonList.length - 1 ? <button type="button" onClick={handleNext} >Suivant</button> : null}
    </>
  );
}

export default App;
