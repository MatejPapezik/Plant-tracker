import { useState } from "react"

function PlantCard({ id, name, shelf, wateringDays, wateredTimes, handleWatering}) {
  return(
    <li>
      {name} {shelf} {wateringDays} {wateredTimes}
      <button onClick={() => handleWatering(id)}>Zalito!</button>
    </li>
  )
}

function App() {
  const [plants, setPlants] = useState([
    {id: 1, name: "Kopretina", shelf: "Vlevo", wateringDays: 2, wateredTimes: 0},
    {id: 2, name: "Muškát", shelf: "Vlevo", wateringDays: 1, wateredTimes: 0},
    {id: 3, name: "Salát", shelf: "Uprostřed", wateringDays: 3, wateredTimes: 0},
    {id: 4, name: "Kopr", shelf: "Vpravo", wateringDays: 1, wateredTimes: 0},
  ])

  function handleWatering(id){
    setPlants(
      plants.map((plant) =>
        plant.id === id
          ? {...plant, wateredTimes: plant.wateredTimes +1}
          : plant
    ))
  }

  return (
    <div>
      <ul>
       {plants.map((plant) => (
          <PlantCard key={plant.id} id={plant.id} name={plant.name} shelf={plant.shelf} wateringDays={plant.wateringDays} wateredTimes={plant.wateredTimes} handleWatering={handleWatering}/>
        ))}
      </ul>
    </div>
  )
}

export default App
