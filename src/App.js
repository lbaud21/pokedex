import DisplayPokemonCards from "./components/DisplayPokemonCards";
import DisplayDetailsAndEvolutions from "./components/DisplayDetailsAndEvolutions";
import DisplayTeam from "./components/DisplayTeam";
import { Router, Link } from "@reach/router";

function App() {
  return (
    <>
      <header path="/">
        <Link to="/" className="image-container">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/images/pokeball_logo.jpg`}
            alt="Pokedex logo"
          ></img>
          <img
            className="title"
            src={`${process.env.PUBLIC_URL}/images/Pokedex.png`}
            alt="Pokedex title"
          ></img>
        </Link>
        <Link to="/team" className="team-icon">
          <img
            src={`${process.env.PUBLIC_URL}/images/team_icon.png`}
            alt="Click me to see your team"
          />
        </Link>
      </header>

      <div className="App">
        <Router>
          <DisplayPokemonCards path="/" />
          <DisplayDetailsAndEvolutions path="/details/:name" />
          <DisplayTeam path="/team" />
        </Router>
      </div>
    </>
  );
}

export default App;
