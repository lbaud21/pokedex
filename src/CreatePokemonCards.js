import React from "react";
import "./styles/App.css";
import { Link } from "@reach/router";

export default function CreatePokemonCards({
  name,
  picURL,
  height,
  weight,
  types,
}) {
  return (
    <Link to={`/details/${name}`} className="card">
      <h2>{name}</h2>
      <div className="image-container">
        <img
          className="pokemon-image"
          src={picURL ? picURL : "./images/no-image.jpg"}
          alt={name}
        ></img>
      </div>
      <p>{`height: ${height} in weight: ${weight} lb`}</p>
      <div>
        {types.map((item) => (
          <img
            src={`./images/types/${item.type.name}.svg`}
            alt={`${item.type.name} type`}
          />
        ))}
      </div>
    </Link>
  );
}
