import React from "react";
import "../styles/App.css";
import { Link } from "@reach/router";
import HandleFavoriteButtonClick from "./HandleFavoriteButtonClick";

export default function CreatePokemonCards({
  name,
  picURL,
  height,
  weight,
  types,
  callbackFunc,
  index,
  listLength,
  handleButtonClick,
}) {
  if (listLength === index + 1) {
    return (
      <Link to={`/details/${name}`} className="card" ref={callbackFunc}>
        <div className="card-header">
          <h2>{name}</h2>
          <HandleFavoriteButtonClick pokemonName={name} />
        </div>
        <div className="image-container">
          <img
            className="pokemon-image"
            src={picURL ? picURL : "./images/no-image.jpg"}
            alt={name}
          ></img>
        </div>
        <p>{`height: ${height} m weight: ${weight} kg`}</p>
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
  } else {
    return (
      <Link to={`/details/${name}`} className="card">
        <div className="card-header">
          <h2>{name}</h2>
          <HandleFavoriteButtonClick pokemonName={name} />
        </div>
        <div className="image-container">
          <img
            className="pokemon-image"
            src={picURL ? picURL : "./images/no-image.jpg"}
            alt={name}
          ></img>
        </div>
        <p>{`height: ${height} m weight: ${weight} kg`}</p>
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
}
