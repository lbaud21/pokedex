import React from "react";
import "../styles/App.css";
import { Link } from "@reach/router";
import DeleteButton from "./DeleteButton";

export default function CreateTeam({ name, picURL, height, weight, types }) {
  return (
    <Link to={`/details/${name}`} className="card">
      <div className="card-header">
        <h2>{name}</h2>
        <DeleteButton pokemonName={name} />
      </div>
      <div className="image-container">
        <img
          className="pokemon-image"
          src={picURL ? picURL : "./images/no-image.jpg"}
          alt={name}
        ></img>
      </div>
      <p>{`height: ${height} m`}</p>
      <p>{`weight: ${weight} kg`}</p>
      <div className="types">
        {types.map((item) => (
          <img
            key={`${name}-${item.type.name}`}
            src={`./images/types/${item.type.name}.svg`}
            alt={`${item.type.name} type`}
          />
        ))}
      </div>
    </Link>
  );
}
