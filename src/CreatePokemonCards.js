import React from "react";
import "./styles/App.css";

export default function CreatePokemonCards({ name, picURL, height, weight }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="image-container">
        <img className="pokemon-image" src={picURL} alt={name}></img>
      </div>
      <p>{`height: ${height} in weight: ${weight} lb`}</p>
    </div>
  );
}
