
type Pokemon = {
    name: string;
    imgSrc?: string;
}

type NavBarProps = {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
}





export default function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }: NavBarProps) {

    const handlePikachu = (pokemonIndex: number, name: string) => {
        setPokemonIndex(pokemonIndex)
        if (name === "pikachu") {
            alert("pika pikachu!!!")
        }
    }


    return <div>
        {pokemonList.map((pokemonList, pokemonIndex) => (
            <button key={pokemonList.name}
                type="button"
                onClick={() => handlePikachu(pokemonIndex, pokemonList.name)}
            >
                {pokemonList.name}
            </button>
        ))}

    </div>







}