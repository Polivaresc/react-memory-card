import { useState } from "react";

const Scoreboard = (props) => {
    
    const {currentScore, bestScore} = props

    return (
        <div>
            <div><span>Score: </span><span>{currentScore}</span></div>
            <div><span>Best score: </span><span>{bestScore}</span></div>
        </div>
    )
}

export default Scoreboard;