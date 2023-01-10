import React, { useEffect, useState } from 'react'
import { Input } from '@mui/material'
import axios from 'axios';
import { useMoviesContext } from "../Context"


const SearchBar = () => {


  const { setMovies } = useMoviesContext()

  const [search , setSearch] = useState('')


    const handleSubmit =(e)=>{
        e.preventDefault();
        setSearch(search)
        if (search === ''){
          return
        } 
        searchMovies(search)
        //setSearch('')
    }

    const searchMovies = async (q)=>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&page=1&api_key=f012db64b65577ba779bbf1e9b76d451`)
      setMovies(data.results)
    }

  return (
    <form display="flex gap-1" onSubmit={(e)=>handleSubmit(e)}>
        <Input 
        className='jss9'
        style={{color:'white'}}
        type="text" value={search} 
        placeholder="Search a movie ..." 
        name="search"
        onChange={(e)=>setSearch(e.target.value)} 
        sx={{width:'200px'}}/>
    </form>
  )
}

export default SearchBar