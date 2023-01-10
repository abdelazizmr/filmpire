import * as React from 'react';
import { Toolbar }from '@mui/material';
import Movies from "../components/Movies"
import NextPage from "../components/NextPage"


const  Feed = () =>{
  

  return (

    <>
    
      <Movies component="main" >
        <Toolbar />
      
      </Movies>

      <NextPage />

    </>

  );
}


export default Feed