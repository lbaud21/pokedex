import React from "react";
import "../styles/App.css";
import { Link } from "@reach/router";

export default function CreatePokemonCards({
  name,
  picURL,
  height,
  weight,
  types,
  callbackFunc,
  index,
  listLength,
}) {
  if (listLength === index + 1) {
    return (
      <Link to={`/details/${name}`} className="card" ref={callbackFunc}>
        <div className="card-header">
          <h2>{name}</h2>
          <button type="button" className="team-button" />
        </div>
        <div className="image-container">
          <img
            className="pokemon-image"
            src={picURL ? picURL : "./images/no-image.jpg"}
            alt={name}
          ></img>
        </div>
        <p>{`height: ${height} in weight: ${weight} lb`}</p>
        <div className="types">
          {types.map((item) => (
            <img
              key={`${name} ${item.type.name}`}
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
          <button type="button" className="team-button">
            <img
              src="./images/star.png"
              alt="Click me to add a pokemon to your team"
            />
          </button>
        </div>
        <div className="image-container">
          <img
            className="pokemon-image"
            src={picURL ? picURL : "./images/no-image.jpg"}
            alt={name}
          ></img>
        </div>
        <p>{`height: ${height} in weight: ${weight} lb`}</p>
        <div className="types">
          {types.map((item) => (
            <img
              key={`${name} ${item.type.name}`}
              src={`./images/types/${item.type.name}.svg`}
              alt={`${item.type.name} type`}
            />
          ))}
        </div>
      </Link>
    );
  }
}
