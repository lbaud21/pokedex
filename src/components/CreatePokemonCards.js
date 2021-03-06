import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
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
            src={
              picURL ? picURL : `${process.env.PUBLIC_URL}/images/no-image.jpg`
            }
            alt={name}
          ></img>
        </div>
        <p>{`height: ${height} m`}</p>
        <p>{`weight: ${weight} kg`}</p>
        <div className="types">
          {types.map((item) => (
            <img
              key={`${name}-${item.type.name}`}
              src={`${process.env.PUBLIC_URL}/images/types/${item.type.name}.svg`}
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
            src={
              picURL ? picURL : `${process.env.PUBLIC_URL}/images/no-image.jpg`
            }
            alt={name}
          ></img>
        </div>
        <p>{`height: ${height} m`}</p>
        <p>{`weight: ${weight} kg`}</p>
        <div className="types">
          {types.map((item) => (
            <img
              key={`${name}-${item.type.name}`}
              src={`${process.env.PUBLIC_URL}/images/types/${item.type.name}.svg`}
              alt={`${item.type.name} type`}
            />
          ))}
        </div>
      </Link>
    );
  }
}
