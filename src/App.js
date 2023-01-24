import React from 'react';
import {useState} from 'react';
import Animalshow from './Animalshow';
import './App.css'

const getRandomAnimal = () => {
    const animals = ['cat','dog','bird','gator','cow','horse']

    return animals[Math.floor(Math.random() * animals.length) ]

}
console.log(getRandomAnimal())



const App = () => {

const [animalsState,setAnimal] = useState([])

const handleClick = () => {
    setAnimal([...animalsState,getRandomAnimal()] )
}

const renderedAnimals = animalsState.map((animal, index) => {
      return <Animalshow type={animal} key={index}/>
})

return (
    <div>
       <button id='add-button' onClick={handleClick}>Add animal</button>
       <div>{renderedAnimals}</div>
   
    </div>
)


}





export default App;