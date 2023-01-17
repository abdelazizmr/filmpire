import React from 'react'
import { useMoviesContext } from '../Context'
import { Box } from '@mui/material'
import MovieCard from "../components/MovieCard"

const Favourites = () => {

    const { favMovies, darkmode } = useMoviesContext()

  return (
    <>
    {favMovies?.length ? 
    <>
        <Box
        className='movies-container'
        display="flex"
        gap={4}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center" 
        sx={{ flexGrow: 1, p: 3 ,margin:'100px 0px 10px 250px'}}>
            {favMovies?.reverse().map((movie,index)=>(
                <MovieCard movie={movie} key={index} />
            ))}
        </Box>
    </>
    : 
    <h2 className='error' style={{color:darkmode && 'white',height:'100vh',backgroundColor:darkmode && 'black'}} >You didn't add any favourite movies !😔</h2>}
   
    </>
  )
}

export default Favourites