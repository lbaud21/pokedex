import DisplayPokemonCards from "./components/DisplayPokemonCards";
import DisplayDetailsAndEvolutions from "./components/DisplayDetailsAndEvolutions";
import { Router, Link } from "@reach/router";

function App() {
  return (
    <>
      <header path="/">
        <Link to="/">
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
        </Link>
      </header>

      <div className="App">
        <Router>
          <DisplayPokemonCards path="/" />
          <DisplayDetailsAndEvolutions path="/details/:name" />
        </Router>
      </div>
    </>
  );
}

export default App;
