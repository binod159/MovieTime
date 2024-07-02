import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Backup from '../assets/backup.jpg'
import { CiStar } from "react-icons/ci";
import { PiStarFill } from 'react-icons/pi';


function MovieDetail({title}) {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Backup ;

  useEffect (() => {
    async function fetchmovie (){
      const response = await fetch (`https://api.themoviedb.org/3/movie/${params.id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`);
      const json = await response.json()
      setMovie(json);
    

    }
    fetchmovie();
  }, []);

  useEffect (() => {
    document.title = `${movie.title}/MovieTime` ;
  });
  return (
    <main>
      <section className='flex justify-around flex-wrap py-5'>
        <div className='max-w-sm'>
          <img className='rounded' src={image} alt={movie.title} />
        </div>
        <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
          <h1 className='text-4xl font-bold my-3 text-center lg:text-left'>{movie.title}</h1>
          <p className='my-4'>{movie.overview}</p>
          {movie.genres ? (
             <p className='my-7 flex flex-wrap gap-2'>
             {movie.genres.map((genre) => (
               <span className='mr-2 border border-gray-200 rounded dark:border-gray-600 p-2' key={genre.id}>{genre.name}</span>
             ))}
           </p>
          ) : "" }

            <div className='flex items-center'>
              <CiStar className='text-yellow-500'/>
              <PiStarFill className='text-yellow-500' />
              <p className='ml-2 dark:text-white '>{movie.vote_average}</p>
              <span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400'></span>
              <span className='text-gray-900 dark:text-white '>{movie.vote_count} reviews</span>
            </div>

            <p className='my-4'>
              <span className='mr-2 font-bold'>Runtime:</span>
              <span>{movie.runtime} min.</span>
            </p>

            <p className='my-4'>
              <span className='mr-2 font-bold'>Budget:</span>
              <span>{movie.budget}</span>
            </p>

            <p className='my-4'>
              <span className='mr-2 font-bold'>Revenue:</span>
              <span>{movie.revenue}</span>
            </p>

            <p className='my-4'>
              <span className='mr-2 font-bold'>Release Date:</span>
              <span>{movie.release_date}</span>
            </p>

            <p className='my-4'>
              <span className='mr-2 font-bold'>IMDB Code:</span>
              <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target='_blank' rel='noreferrer'>{movie.imdb_id}</a>
            </p>
        </div>
      </section>
    </main>
  )
}

export default MovieDetail