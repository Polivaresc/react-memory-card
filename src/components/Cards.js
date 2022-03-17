import uniqid from 'uniqid';

const Cards = () => {
    const cards = [
        {text: 'Ant Queen', image: 'link', id: uniqid()},
        {text: 'Mirror Tentacle', image: '../../public/images/tentacleMirror.png', id: uniqid()},
        {text: 'Bee', image: '../../public/images/bee.png', id: uniqid()},
    ]

    return cards.map(card => <div key={card.id}><img src={card.image} alt={card.text}/></div>)
}

export default Cards;