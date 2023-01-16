import React from 'react'
import "./App.css"
//dependencies
import {Box, Drawer , Toolbar }from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import Feed from "./pages/Feed"
import MovieDetails from "./pages/MovieDetails"
import ErrorPage from "./pages/ErrorPage"
import Favourites from "./pages/Favourites"

//components
import SideBar from './components/SideBar';
import Header from './components/Header';
import { useMoviesContext } from './Context';
//context


const App = () => {


  const  { darkmode } =  useMoviesContext()
  




  return (
    <BrowserRouter>
     

      
        <Box sx={{backgroundColor: darkmode && 'black'}} >
          
          <Header />
          
          <Drawer variant="permanent" className='sidebar-parent' sx={{backgroundColor: darkmode && 'black !important'}}>
            <Toolbar className='toolBar' />
            <SideBar />

          </Drawer>

          <Routes>
            <Route path="/" exaxt element={<Feed />} />
            <Route path="/movie/:id" exaxt  element={<MovieDetails />} />
            <Route path="/favourites" exaxt element={<Favourites />} />
            <Route path="/*" exaxt element={<ErrorPage />} />
          </Routes>

        </Box>

  
    </BrowserRouter>
  )
}

export default App