import React from 'react'

const RnadomMovie = ({movie}) => {

  //console.log(movie);

  return (
    <div 
    className='randomMovie' 
    style={{background:`url(https://image.tmdb.org/t/p/w500/${movie['backdrop_path']})`}}>

    <div className='overlay'></div>

    <h2 className='title'>
      {movie.title}
    </h2>

    <p className='overview'>
      {movie?.overview?.length > 300 ? movie.overview.slice(0,200)+'...' : movie.overview }
    </p>
  
    
    </div>
  )
}

export default RnadomMovie