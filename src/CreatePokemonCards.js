import React from "react";

export default function CreatePokemonCards({ name, picURL, height, weight }) {
  return (
    <div className="card">
      <p>{name}</p>
      <img src={picURL} alt={name}></img>
      <p>{height}</p>
      <p>{weight}</p>
    </div>
  );
}
