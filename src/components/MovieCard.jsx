import * as React from 'react';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';


const MovieCard = ({movie})=> {

    const  rate  = movie['vote_average']/2

  return (
    <Link to={`movie/${movie.id}`}>
    
      <div className='movie'>
          <img 
          src={`https://image.tmdb.org/t/p/w500/${movie['poster_path']}`} 
          alt={movie.title}
          loading="lazy" />

          <h3>{movie.title.length > 30 ? movie.title.slice(0,20)+'...' : movie.title }</h3>


          <Rating
              name="simple-controlled"
              value={rate}
              readOnly 
          />

      </div>
    </Link>
  );
}

export default MovieCard