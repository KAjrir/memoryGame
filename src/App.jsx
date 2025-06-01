import { useEffect, useState } from 'react'
import Pokemons from './pokemons'
import Header from './Header'
import { useProducts } from './hooks/useFetchData'



function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [limit, setLimit] = useState(6)

  
  const response = useProducts(limit, refreshTrigger)

  useEffect(() => {
    if(score > bestScore) setBestScore(count => count + 1)
  }, [score])

  function handleRefresh() {
    setRefreshTrigger(prev => prev + 1); // trigger opnieuw ophalen
    setScore(0)
    setBestScore(0)
  }


  return (
    <>
      <Header 
      onRefresh={handleRefresh} 
      score={score} 
      bestScore={bestScore}
      limit={limit}
      setLimit={setLimit}
      />
      <main>
        <Pokemons response={response} setScore={setScore}/>
      </main>
    </>
  )
}

export default App
