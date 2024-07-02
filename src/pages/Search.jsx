import React from 'react'
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react';

function Search({apiPath}) {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const{ data: movies } = useFetch(apiPath, queryTerm);

  useEffect (() => {
    document.title = `Search Result For${queryTerm}/MovieTime` ;
  });

  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-800 dark:text-white'>{ movies?.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'`}</p>
      </section>
       <section className='max-w-7xl mx-auto py-9'>
        <div className='flex justify-start flex-wrap '>
          {movies?.map ((movie) => (
               <MovieCard key={movie.id} movie={movie} />
          ))}
         
          
        </div>

      </section>
    </main>
  )
}

export default Search