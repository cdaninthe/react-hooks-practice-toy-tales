import React, {useState} from "react";

function ToyForm({onAddToy}) {
  const [name, setName] = useState('')
  const [image, setImage]= useState('https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg')
  const [likes, setLikes] = useState(0)

  function handleSubmit(e){
    e.preventDefault()
    const toyData = {
      name : name,
      image : image,
      likes: likes
    }
    fetch(`http://localhost:3001/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
    .then((r)=>r.json())
    .then((newToy)=> onAddToy(newToy))
  }

  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e)=> setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default ToyForm;
