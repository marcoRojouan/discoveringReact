type Pokemon = {
    name: string;
    imgSrc?: string;
}

type NavBarProps = {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
}





export default function NavBar({ pokemonIndex, pokemonList, setPokemonIndex }: NavBarProps) {

    const handleBack = () => {
        setPokemonIndex(pokemonIndex - 1)
    };

    const handleNext = () => {
        setPokemonIndex(pokemonIndex + 1)

    };


    return (

        <>
            <div>
                {pokemonIndex > 0 ? <button type="button" onClick={handleBack}  >Précédent</button> : null}
                {pokemonIndex < pokemonList.length - 1 ? <button type="button" onClick={handleNext} >Suivant</button> : null}
            </div>
        </>
    )

}