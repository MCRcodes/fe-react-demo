import React, { useEffect, useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginPage/LoginForm";
import Page from "./components/Page";
import { catchPokemon } from "./request/catchPokemon";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    catchPokemon(setPokemonData);
  }, []);
  return (
    <div className="App">
      <LoginForm />
      {pokemonData &&
        pokemonData.map((name) => <p key={name.name}> {name.name} </p>)}
      <Page />
    </div>
  );
}

export default App;
