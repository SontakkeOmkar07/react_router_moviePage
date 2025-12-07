import React from "react";
import { NavLink } from "react-router-dom";
import './Card.css';

export const Card = ({ curMovie }) => {
  const { Poster, imdbID } = curMovie;

  return (
    <li className="hero-container h-full">
      <div className="main-container h-full flex flex-col">

        <div className="poster-container">
          <img src={Poster} className="poster" alt={imdbID} />
        </div>

        <div className="ticket-container mt-auto">
          <div className="ticket__content">
            <NavLink to={`/movie/${imdbID}`}>
              <button className="ticket__buy-btn">Watch now</button>

            </NavLink>

          </div>
        </div>
      </div>
    </li>
  );
};
