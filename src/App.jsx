import * as React from 'react';
import "./App.css"
import {Box, Drawer , Toolbar }from '@mui/material';
//!components
import Movies from "./components/Movies"
import SideBar from './components/SideBar';
import Header from './components/Header';
import NexPage from './components/NextPage';
import { useState } from 'react';

const  App = () =>{
  
  const [feed, setFeed] = useState([])
  const [category, setCategory] = useState('Popular')
  const [genre, setGenre] = useState('')
  const [genreId, setgenreId] = useState(0)
  const [search, setSearch] = useState('')
  




  //when clicking on side bar categories and fetching from api it changes the movie feed
  const toggleFeed = (newfeed)=>{
    setFeed(newfeed)
  }


  return (
    <Box >
      
      <Header
      toggleFeed={toggleFeed} />
      
      <Drawer variant="permanent" className='sidebar-parent'>
        <Toolbar />
        <SideBar 
        toggleFeed={toggleFeed} 
        category={category} 
        setCategory={setCategory} 
        genre={genre} 
        setGenre={setGenre}
        genreId={genreId}
        setgenreId={setgenreId}  />

      </Drawer>
      <Movies component="main" movies={feed} >
        <Toolbar />
      
      </Movies>

        <NexPage 
        toggleFeed={toggleFeed} 
        category={category} 
        genre={genre}
        genreId={genreId} />

    </Box>
  );
}


export default App