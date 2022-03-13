import { useState } from "react";

const Scoreboard = (props) => {
    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    if (props === 'goodPlay') {
        setCurrentScore(currentScore + 1)
        if (bestScore < currentScore) {
            setBestScore(currentScore)
        }
    } 

    return (
        <div>
            <div><span>Score: </span><span>{currentScore}</span></div>
            <div><span>Best score: </span><span>{bestScore}</span></div>
        </div>
    )
}

export default Scoreboard;