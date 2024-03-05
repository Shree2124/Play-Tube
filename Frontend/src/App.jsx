import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/jokes")
      .then((res) => {
        setJokes(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>hello</h1>

      <h1>jokes</h1>
      <p>Length: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.id}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
