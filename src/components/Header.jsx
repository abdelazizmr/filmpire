import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {Toolbar,AppBar} from '@mui/material';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import  logo  from "../assets/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import { useMoviesContext } from '../Context';
import LightModeIcon from '@mui/icons-material/LightMode';



const Header = () => {

  const { showSideBar,setshowSideBar, darkmode, setDarkmode } = useMoviesContext()



  return (

    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor : darkmode && 'black'  }}>
        <Toolbar className='flex justify-between p-3'>
          <button className='menu-icon' onClick={()=>setshowSideBar(!showSideBar)}>
            <MenuIcon style={{fontSize:'25px'}}  />
          </button>
          <Link to="/">
            <img src={logo}alt="filmpire" className='logo' />
          </Link>
          
          <header className='flex justify-between gap-5'>
            <SearchBar  />
            <button onClick={()=>setDarkmode(!darkmode)} style={{fontSize:'25px'}}>
              {darkmode ? <LightModeIcon /> : <DarkModeIcon /> }
            </button>
          </header>
        </Toolbar>
      </AppBar>
    
  )
}

export default Header