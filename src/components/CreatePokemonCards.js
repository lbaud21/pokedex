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
