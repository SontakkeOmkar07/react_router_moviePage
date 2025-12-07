import React from 'react'
import { useLoaderData } from 'react-router-dom'
// import { getMoviesData } from '../api/GetAPI';
import { Card } from '../UI/Card';

export const Movie = () => {

  const movieData = useLoaderData();
  console.log(movieData);
  return (
    <>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4  ">
        {/* this is a conditioal rendering */}
        {/* Optional Chaining (?.) */}
        {movieData &&
          movieData.Search?.map((curMovie) => {
            return <Card key={curMovie.imdbID} curMovie={curMovie} />
          })}
      </ul>
    </>
  )
}
