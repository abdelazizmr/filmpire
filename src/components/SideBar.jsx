import { Box,ListItemText,ListItemIcon,ListItemButton,ListItem,Divider,List,Typography } from '@mui/material';
import {categories, genres} from "../cache/Categories"
import { useEffect, useState } from 'react';
import axios from 'axios';
import {data} from "../cache/data"


const SideBar = ({toggleFeed,category,setCategory,genre,setGenre,genreId,setgenreId}) => {





  const handleGenre = (newgenre,id)=>{
    setGenre(newgenre)
    setgenreId(id)
    setCategory('')
  }

  const handleCategory = (newCategory)=>{
    setCategory(newCategory)
    setGenre('')
  }


  //!when genre changes
    useEffect(()=>{


    const getMovies = async(id)=>{

      const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=1&api_key=f012db64b65577ba779bbf1e9b76d451`)
      toggleFeed(data.results)
    }

    getMovies(genreId)

   // toggleFeed(data.results)

  },[genre])

 
   //!when category changes
  useEffect(()=>{
    const getMovies = async(category)=>{

      const q = category.toLowerCase().replace(' ','_')

      if (q === ''){
        console.log('walo')
        return 
      }

      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${q}?api_key=f012db64b65577ba779bbf1e9b76d451&language=en-US&page=1`)
      toggleFeed(data.results)
    }

    getMovies(category)



    

  },[category])

  return (
    <Box sx={{ overflow: 'auto' }} className="sidebar">
          <List>
            <Typography sx={{textAlign:'center',opacity:'0.7',margin:'10px 0px'}}>Categories</Typography>
            {categories.map((c, index) => (
              <ListItem key={index} disablePadding sx={{mb:'5px'}}>
                <ListItemButton 
                onClick={()=>handleCategory(c.title)} 
                selected={category === c.title && true}>
                  <ListItemIcon>
                    {c.icon}
                  </ListItemIcon>
                  <ListItemText primary={c.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
           <Typography sx={{textAlign:'center',opacity:'0.7',margin:'10px 0px'}}>Genres</Typography>
          <List>
            {genres.map((g, index) => (
              <ListItem key={index} disablePadding sx={{mb:'5px'}}>
                <ListItemButton
                onClick={()=>handleGenre(g.name,g.id)}
                selected={genre === g.name && true}>
                  <ListItemIcon>
                    <img src={g.icon} alt={g.name} width="30px" height="30px" />
                  </ListItemIcon>
                  <ListItemText primary={g.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
  )
}

export default SideBar