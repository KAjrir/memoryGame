import { useEffect, useState } from 'react'
import { useProducts } from './hooks/useFetchData'



export default function Header({onRefresh, score, bestScore, limit, setLimit}) {
    const [number, setNumber] = useState(0)

    function generateNewImages(){

    }

    return (
        <header>
            <div className='h1-wrapper'>
                <h1>Pokemon Memory Game</h1>
            </div>
            <div className="generate-images">
                <input type="number" name="quantity" value={number}
                onChange={(e) => setNumber(e.target.value)}/>
                <button onClick={() => {onRefresh();
                     setLimit(number)
                     }}>
                        Generate New Images
                </button>
            </div>
            <div className='score-board'>
                <p>Score: {score}</p>
                <p>Best score: {bestScore}</p>
            </div>
        </header>
    )
}