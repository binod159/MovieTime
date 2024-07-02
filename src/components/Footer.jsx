import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
      <span>2025-@ <Link to='/' >MovieTime</Link> All right Reserves. </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 md:mt-0'>
        <li>
          <a href="https://www.instagram.com" target='_blank' rel='noreferrer' className='mr-4 hover:underline md:mr-6 '>Instagram</a>
        </li>
        <li>
          <a href="https://www.facebook.com" target='_blank' rel='noreferrer' className='mr-4 hover:underline md:mr-6'>Facebook</a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target='_blank' rel='noreferrer' className='mr-4 hover:underline md:mr-6'>LinkedIn</a>
        </li>
        <li>
          <a href="https://www.github.com" target='_blank' rel='noreferrer' className='mr-4 hover:underline md:mr-6'>Github</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer