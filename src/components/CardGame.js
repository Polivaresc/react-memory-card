import { useEffect, useState } from "react"
import Scoreboard from "./Scoreboard"
import Cards from "./Cards"

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
            <div className="cards"><Cards handlePlay={handlePlay}/></div>
        </div>
    )
}

export default CardGame;