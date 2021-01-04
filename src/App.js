import DisplayPokemonCards from "./components/DisplayPokemonCards";
import ComponentsAssembly from "./components/ComponentsAssembly";
import { Router } from "@reach/router";

function App() {
  return (
    <>
      <header>
        <img
          className="logo"
          src="/./images/pokeball_logo.jpg"
          alt="Pokedex logo"
        ></img>
        <img
          className="title"
          src="/./images/Pokedex.png"
          alt="Pokedex title"
        ></img>
      </header>
      <div className="App">
        <Router>
          <DisplayPokemonCards path="/" />
          <ComponentsAssembly path="/details/:id" />
        </Router>
      </div>
    </>
  );
}

export default App;
