const Scoreboard = (props) => {
    
    const {currentScore, bestScore} = props

    return (
        <div className="score-board">
            <div className="score"><span>Score: </span><span>{currentScore}</span></div>
            <div className="score"><span>Best score: </span><span>{bestScore}</span></div>
        </div>
    )
}

export default Scoreboard;