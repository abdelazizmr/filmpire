import React from 'react'
import "./App.css"
//dependencies
import {Box, Drawer , Toolbar }from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import Feed from "./pages/Feed"
import MovieDetails from "./pages/MovieDetails"
import ErrorPage from "./pages/ErrorPage"

//components
import SideBar from './components/SideBar';
import Header from './components/Header';
//context

import Context from './Context';

const App = () => {

  



  return (
    <BrowserRouter>
       <Context>

      
        <Box >
          
          <Header />
          
          <Drawer variant="permanent" className='sidebar-parent'>
            <Toolbar />
            <SideBar />

          </Drawer>

          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/movie:id" element={<MovieDetails />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>

        </Box>

      </Context>
    </BrowserRouter>
  )
}

export default App