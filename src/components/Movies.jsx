import React from 'react'
import { Box } from '@mui/system'
import MovieCard from './MovieCard'
import Spinner from '../helpers/Spinner'
import RnadomMovie from './RnadomMovie'
import { useMoviesContext } from "../Context"

const Movies = () => {

  const { movies } = useMoviesContext()

  const random = Math.floor(Math.random()*movies.length)

  const randomMovie = movies[random]

  
  console.log(movies)

  if (movies?.length === 0){
    return(
      <Spinner />
    )
  }


  return (
    <Box
    className='movies-container'
    display="flex"
    gap={4}
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center" 
    sx={{ flexGrow: 1, p: 3 ,margin:'100px 20px 20px 250px'}} >
      <RnadomMovie movie={randomMovie ? randomMovie : {}}/>
      {movies?.filter(movie=>movie.id !== randomMovie.id)
        .map((movie,index)=>(
          <MovieCard movie={movie} key={index} />
        ))
}
    </Box>
  )
}

export default Movies