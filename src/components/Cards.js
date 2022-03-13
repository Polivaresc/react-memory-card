import { useState } from "react"

const Cards = () => {

    const[clicked, setClicked] = useState(false)

    const handlePlay = () => {
        if(!clicked) {
            setClicked(true)
            return 'goodPlay'
        } else {
            return 'badPlay'
        }
    }

    return (
        <button onClick={handlePlay}>CARD</button>
    )
}