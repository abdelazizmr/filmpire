import * as React from 'react';

import { Rating } from '@mui/material';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const MovieCard = ({movie})=> {

    const [rate, setRating] = useState(movie['vote_average']/2)

  return (
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
  );
}

export default MovieCard