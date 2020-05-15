import React from 'react';
// import css from './Cast.module.css';

const Cast = ({ actors }) => {
  return (
    actors && (
      <div>
        {actors.length ? (
          <ul>
            {actors.map(actor => (
              <li key={actor.cast_id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`portrait of ${actor.name}`}
                />
                <h2>{actor.name}</h2>
                <p>{actor.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          // eslint-disable-next-line jsx-a11y/accessible-emoji
          <h2>No actors for this movie for today, please come back later 🎬</h2>
        )}
      </div>
    )
  );
};

export default Cast;
