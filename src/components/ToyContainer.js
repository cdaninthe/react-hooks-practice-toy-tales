import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {
  function handleDeleteToy(deletedToy){
    const updatedToys = toys.filter((toy)=> toy.id !== deletedToy.id)
    setToys(updatedToys)
  }

  function handleAddLike(updatedToy){
    const updatedToys = toys.map((toy)=>{
      if (toy.id === updatedToy.id){
        return updatedToy
      } else {
        return toy
      }
    })
    setToys(updatedToys)
  }

  return (
    <div id="toy-collection">
      {toys.map((toy)=>(
        <ToyCard
          key={toy.id} toy={toy}
          onDeleteToy={handleDeleteToy}
          onAddLike={handleAddLike}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
