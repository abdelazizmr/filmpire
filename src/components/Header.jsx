import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {Toolbar,AppBar,Link,Typography} from '@mui/material';
import SearchBar from './SearchBar';
import  logo  from "../assets/logo.png"



const Header = ({toggleFeed}) => {
  return (

    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar className='flex justify-between p-3'>
          <Link to="/">
          <img src={logo}alt="filmpire" className='bg-white w-20' />
          </Link>
          
          <header className='flex justify-between gap-5'>
            <SearchBar toggleFeed={toggleFeed} />
            <button onClick={()=>console.log('dark mode')}><DarkModeIcon /></button>
          </header>
        </Toolbar>
      </AppBar>
    
  )
}

export default Header