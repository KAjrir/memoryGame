import { useEffect, useState } from 'react'


function Pokemons({response, setScore}) {
    const {data, isLoading, error} = response
    const [pokemons, setPokemons] = useState();
    const [clickedPokemons, setClickedPokemons] = useState([])

    useEffect(() => {
        if (data) {
          setPokemons(data);
        }
      }, [data]);

    if (isLoading) return <p>Loading...</p>;
    if (!pokemons.length) return <p>No Pokemons for yer...</p>
    if (error) return <p>Error loading Pokémon data</p>;

    function shuffleCards(array){

        let array1 = [...array]
        for(let i = array1.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array1[i], array1[j]] = [array1[j], array1[i]];
        }
        
        setPokemons(array1)
    }

    function handleCardScore(e){
        shuffleCards(pokemons)
        if(clickedPokemons.includes(e.currentTarget.id)){
            setScore(0)
            setClickedPokemons([])
            return
        }

        setClickedPokemons([...clickedPokemons, e.currentTarget.id])
        setScore(count => count + 1)
    }


    return (
        <div className='pokemon-container'>
        {pokemons.map(pokemon => (
            <div onClick={handleCardScore} className='pokemon' key={pokemon.id} id={pokemon.id}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
        ))}
        </div>
    )
}

export default Pokemons
