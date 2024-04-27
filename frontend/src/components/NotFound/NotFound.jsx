/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='page notFound'>
      <div className= "Content">
        <img src='/notfound.png' alt='notFound' />
        <Link to={'/'}>RETURN TO HOME </Link>
      </div>
      
    </section>
  )
}

export default NotFound
