import { useState } from "react";

interface Dog {
  message: string;
  status: string;
}

function App() {
  const [dogs, setDogs] = useState<Dog[]>([]);

  // const handleGetJoke = async () => {
  //   const response = await fetch(
  //     "https://jokestemp.neillbogie.repl.co/jokes/general/random"
  //   );
  //   const jsonBody: Joke[] = await response.json();
  //   setJoke(jsonBody[0]);
  // };

  const handleGetDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((jsonBody: Dog) => setDogs((dogs) => [...dogs, jsonBody]));
  };
  function DogPic(dog: Dog) {
    return (
      <img src={dog.message} alt={dog.message} width="30%" height="auto"></img>
    )
  }

  function clear() {
    return setDogs((dogs) => [])
  }

  if (dogs[0]) {
    return (
      <>
        <h1>🐕 Dog pictures 🐶</h1>
        {dogs.map(DogPic)}
        <hr />
        <button onClick={handleGetDog}>Get another dog</button>
        <button onClick={clear}>clear</button>
      </>
    );
  } else {
    return (
      <div>
        <h1>🐕 Dog pictures 🐶</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          dog picture from an API!
        </p>
        <button onClick={handleGetDog}>Get dog</button>
      </div>
    );
  }
}

export default App;
