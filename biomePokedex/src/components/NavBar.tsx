
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


    return <div>
        {pokemonList.map((p, index) => (<button key={p.name} type="button" onClick={() => setPokemonIndex(index)}>{p.name}</button>))}
    </div>







}