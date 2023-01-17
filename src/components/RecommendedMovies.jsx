import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from "./MovieCard"
import { Box } from '@mui/material'
import { useMoviesContext } from '../Context'

const RecommendedMovies = ({id}) => {


    const [recommendedMovies, setRecommendedMovies] = useState([])

    const { darkmode } = useMoviesContext()


    //recommended movies based on selected movie
    useEffect(()=>{
        const getRecommendedMovies  = async()=>{
            const {data} = await axios.get(`
        https://api.themoviedb.org/3/movie/${id}/similar?api_key=f012db64b65577ba779bbf1e9b76d451&language=en-US&page=1`) 

       // console.log(data.results);

        setRecommendedMovies(data.results)


        }


        getRecommendedMovies(id)
       


    },[id])




  return (
    <>
    <h2 style={{textAlign:'center',marginTop:'10px',color:darkmode && 'white'}}>You might also like</h2>
    <Box
    className='movies-container'
    display="flex"
    gap={4}
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center" 
    sx={{ flexGrow: 1, p: 3 ,margin:'100px 0px 10px 250px'}}>
        {recommendedMovies?.map((movie,index)=>(
            <MovieCard movie={movie} key={index} />
        ))}
    </Box>
    </>
  )
}

export default RecommendedMovies