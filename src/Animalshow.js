import React from 'react';
import {useState} from 'react'
import bird from './svg/bird.svg'
import gator from './svg/gator.svg'
import dog from './svg/dog.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'

const svgMap = {
    bird: bird,
    cat: cat,
    cow: cow,
    horse: horse,
    dog: dog,
    gator: gator
}



const Animalshow = ({type}) => {

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
          setClicks(clicks + 1)
    }

    return <div onClick={handleClick}>
        <div>{type}</div>
        <img alt='animal' height='50px' width='50px' src={svgMap[type]}></img>
        <img alt='heart' src={heart} style={{width: 10 + 10 * clicks}}></img>
        </div>
}

export default Animalshow;