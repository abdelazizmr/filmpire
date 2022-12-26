import React from 'react'
import { Box } from '@mui/system'
import MovieCard from './MovieCard'
import Spinner from '../helpers/Spinner'
import RnadomMovie from './RnadomMovie'

const Movies = ({movies}) => {

  const random = Math.floor(Math.random()*movies.length)

  const randomMovie = movies[random]


  console.log(movies)
  return (
    <Box
    className='movies-container'
    display="flex"
    gap={4}
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center" 
    sx={{ flexGrow: 1, p: 3 ,margin:'100px 20px 20px 250px', }} >
      <RnadomMovie movie={randomMovie ? randomMovie : {}}/>
      {movies?.length > 0 ? 
        movies
        .filter(movie=>movie.id !== randomMovie.id)
        .map((movie,index)=>(
          <MovieCard movie={movie} key={index} />
        ))
     : <Spinner /> }
    </Box>
  )
}

export default Movies