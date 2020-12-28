import DisplayPokemonCards from "./DisplayPokemonCards";

function App() {
  return (
    <>
      <header>
        <div>
          <img src="./images/pokeball_logo.jpg" alt="Pokedex logo"></img>
          <h1>Pokedex</h1>
        </div>
      </header>
      <div className="App">
        <DisplayPokemonCards />
      </div>
    </>
  );
}

export default App;
