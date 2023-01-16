import * as React from 'react';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMoviesContext } from '../Context';


const MovieCard = ({movie})=> {

  
  const { darkmode } = useMoviesContext()

    const  rate  = movie['vote_average']/2


     const url = movie['backdrop_path'] !== null ? `https://image.tmdb.org/t/p/w500/${movie['backdrop_path']}` : 'http://via.placeholder.com/300'

  
  

  return (
    <Link to={`/movie/${movie.id}`}>
    
      <div className='movie' style={{boxShadow: darkmode && '-5px 6px 5px -2px #898989 !important'}}>
          <img 
          src={url} 
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