import React from 'react'
import MovieCard from '../components/MovieCard'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react';

function MovieList({apiPath, title}) {
  const { data: movies } = useFetch(apiPath);

  useEffect (() => {
    document.title = `${title}/MovieTime` ;
  });
  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex  flex-row justify-start flex-wrap other:justify-evenly '>
          {movies.map ((movie) => (
               <MovieCard key={movie.id} movie={movie} />
          ))}
         
          
        </div>

      </section>
      </main>
  )
}

export default MovieList