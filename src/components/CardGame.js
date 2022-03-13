import { useEffect, useState } from "react"
import Scoreboard from "./Scoreboard"

const CardGame = () => {

    const[clicked, setClicked] = useState(false)
    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    const handlePlay = () => {
        if(!clicked) {
            setClicked(true)
            setCurrentScore(currentScore + 1)
        } else {
            setCurrentScore(0)
        }
    }

    useEffect(() => {
        if(currentScore > bestScore) {
            setBestScore(currentScore)
        }
    }, [currentScore])

    return (
        <div>
            <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
            <button onClick={handlePlay}>CARD</button>
        </div>
    )
}

export default CardGame;