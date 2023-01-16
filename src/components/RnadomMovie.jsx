import React from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../helpers/Spinner'

const RnadomMovie = ({movie}) => {

  
     const url = movie['backdrop_path'] !== null ? `https://image.tmdb.org/t/p/w500/${movie['backdrop_path']}` : 'http://via.placeholder.com/300'

     console.log('random movie',movie);

     if(!movie){
      retrun (
        <Spinner />
      )
     }


  return (
    <Link to={`/movie/${movie.id}`} style={{display:'block !important'}}>
    
      <div 
      className='randomMovie' 
      style={{background:`url(${url})`}}>


        <h2 className='title'>
          {movie.title}
        </h2>

        <p className='overview'>
          {movie?.overview?.length > 300 ? movie.overview.slice(0,200)+'...' : movie.overview }
        </p>
    
      
      </div>
    </Link>
  )
}

export default RnadomMovie