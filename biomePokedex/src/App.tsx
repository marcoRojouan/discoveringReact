import { useEffect, useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";


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

  useEffect(() => {
    alert("hello pokemon trainer :)")
  },
    []
  );

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <NavBar
          setPokemonIndex={setPokemonIndex}
          pokemonIndex={pokemonIndex}
          pokemonList={pokemonList}
        />
      </div>

    </>
  );
}

export default App;
