import * as React from 'react';
import { Toolbar }from '@mui/material';
import Movies from "../components/Movies"
import NextPage from "../components/NextPage"
import { useMoviesContext } from '../Context';


const  Feed = () =>{
  
  const { movies } = useMoviesContext()

  //Feed page contains movies being displayed

  return (

    <>
    
      <Movies component="main">
        
        <Toolbar />
      
      </Movies>

      {movies?.length > 0 &&
        <NextPage />
      }

    </>

  );
}


export default Feed