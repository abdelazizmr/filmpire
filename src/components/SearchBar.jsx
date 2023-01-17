import React, { useEffect, useState } from 'react'
import { Input } from '@mui/material'
import axios from 'axios';
import { useMoviesContext } from "../Context"
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

  const navigate = useNavigate()

  const { setMovies } = useMoviesContext()

  const [search , setSearch] = useState('')

  const [showSearch, setshowSearch] = useState(false)


    const handleSubmit =(e)=>{
        e.preventDefault();
        setSearch(search)
        if (search === ''){
          return
        } 
        navigate('/')
        searchMovies(search)
      
    }


    // searching for a movie by title
    const searchMovies = async (q)=>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&page=1&api_key=f012db64b65577ba779bbf1e9b76d451`)
      setMovies(data.results)
      //console.log('results for search',data.results)
      setSearch('')
    }

 

  return (
    <form display="flex gap-1" onSubmit={(e)=>handleSubmit(e)} style={{display:'flex',gap:'5px'}} >
        
        <Input 
        className='searchinp'
        style={{width:'200px',color:'white',display: showSearch ? 'block' : 'none' }}
        type="text" value={search} 
        placeholder="Search a movie ..." 
        name="search"
        onChange={(e)=>setSearch(e.target.value)} />
        <button className='search-icon' onClick={()=>setshowSearch(!showSearch)} >
          <SearchIcon style={{fontSize:'25px',verticalAlign:'center'}} />
        </button>
    </form>
  )
}

export default SearchBar