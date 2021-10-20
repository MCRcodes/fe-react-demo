const APIENDPOINT = "https://pokeapi.co/api/v2/pokemon?limit=5";
export const catchPokemon = async (setPokemonData) => {
  await fetch(APIENDPOINT).then((response) =>
    response.json().then((data) => {
      console.log(data.results);
      setPokemonData(data.results);
    })
  );
};
