import React from "react";
import { Link } from "@reach/router";
import "../styles/pokemonDetails.css";

export default function CreateEvolutionChain({
  evolutionsNames,
  evolutionsImages,
  loading,
}) {
  if (loading) {
    return <div></div>;
  }
  return (
    <div className="evolution-container container">
      <div className="container-title">
        <h3>Evolutions</h3>
      </div>
      <div className="container-content">
        {evolutionsNames.map((name, index) => {
          return (
            <Link
              to={`/pokedex/details/${name}`}
              key={`evolution ${name}`}
              className="evolution-data"
            >
              <p className="evolution-name">{name}</p>
              <div className="image-container">
                <img
                  className="pokemon-image"
                  src={
                    evolutionsImages[index]
                      ? evolutionsImages[index]
                      : `${process.env.PUBLIC_URL}/images/no-image.jpg`
                  }
                  alt={name}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
