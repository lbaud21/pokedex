import DisplayPokemonCards from "./DisplayPokemonCards";

function App() {
  return (
    <>
      <header>
        <img
          className="logo"
          src="./images/pokeball_logo.jpg"
          alt="Pokedex logo"
        ></img>
        <img
          className="title"
          src="./images/Pokedex.png"
          alt="Pokedex title"
        ></img>
      </header>
      <div className="App">
        <div className="wrapper">
          <DisplayPokemonCards />
        </div>
      </div>
    </>
  );
}

export default App;
