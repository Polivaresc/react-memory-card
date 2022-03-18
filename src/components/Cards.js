import uniqid from 'uniqid';

const Cards = (props) => {
    const handlePlay = props

    const cards = [
        {text: 'Ant Queen', image: 'images/antQueen.png', id: uniqid()},
        {text: 'Bee', image: 'images/bee.png', id: uniqid()},
        {text: 'Black Goat', image: 'images/blackGoat.png', id: uniqid()},
        {text: 'Child 13', image: 'images/child13.png', id: uniqid()},
        {text: 'Cockroach', image: 'images/cockroach.png', id: uniqid()},
        {text: 'Corpse Maggots', image: 'images/corpseMaggots.png', id: uniqid()},
        {text: 'Geck', image: 'images/geck.png', id: uniqid()},
        {text: 'Mantis', image: 'images/mantis.png', id: uniqid()},
        {text: 'Mantis God', image: 'images/mantisGod.png', id: uniqid()},
        {text: 'Bell Tentacle', image: 'images/tentacleBell.png', id: uniqid()},
        {text: 'Cards Tentacle', image: 'images/tentacleCards.png', id: uniqid()},
        {text: 'Mirror Tentacle', image: 'images/tentacleMirror.png', id: uniqid()},
        {text: 'Rabbit', image: 'images/rabbit.png', id: uniqid()},
        {text: 'Skink', image: 'images/skink.png', id: uniqid()},
        {text: 'Squirrel', image: 'images/squirrel.png', id: uniqid()},
        {text: 'Stinkbug', image: 'images/stinkBug.png', id: uniqid()},
        {text: 'Stoat', image: 'images/stoat.png', id: uniqid()},
        {text: 'Stunted Wolf', image: 'images/stuntedWolf.png', id: uniqid()},
        {text: 'Wolf Cub', image: 'images/wolfCub.png', id: uniqid()},
        {text: 'Worker Ant', image: 'images/workerAnt.png', id: uniqid()},
    ]
    
    const randomCards = cards.sort(() => Math.random()-0.5).slice(0, 12)

    return randomCards.map(card => <div key={card.id}><img src={card.image} alt={card.text} className="card-image" onClick={handlePlay}/></div>)
}

export default Cards;