import { useState, useEffect } from "react";

export function useProducts(limit, refreshTrigger) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        async function fetchPokemons(){
            try {
                setLoading(true);
                const allDetails = []
                for(let i = 0; i < limit; i++){
                    const randomIndex = Math.floor(Math.random() * 1025)
                    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`);
                    const json = await res.json();
                    allDetails.push(json)
                }

                
                
                // const allDetails = await Promise.all(
                //     json.results.map(pokemon => fetch(pokemon.url).then(res => res.json()))
                // );
                
                setData(allDetails)

            } catch(err){
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchPokemons()

    }, [limit, refreshTrigger]);
  
    return { data, isLoading, error };
  }


//   data.sprites.front_default