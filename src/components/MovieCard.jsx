import React from 'react'
import { Link } from 'react-router-dom'
import Backup from '../assets/backup.jpg'
import { IoArrowForwardOutline } from "react-icons/io5";

function MovieCard({movie}) {
  const {id, original_title, overview, poster_path} = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup ;
  return (
    <div className='max-w-xs  bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 m-3 '>
            <Link to={`/movie/${id} `}>
              <img className='rounded-t-lg' src={image} alt="" />
            </Link>
            <div className='p-5'>
              <Link to={`/movie/${id}`}>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{original_title}</h5>
              </Link>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{overview}</p>
               <Link to={`/movie/${id}`} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                ReadMore
                < IoArrowForwardOutline className='ml-3' />
              </Link>
            </div>

          </div>
    
  )
}

export default MovieCard