import { Box,ListItemText,ListItemIcon,ListItemButton,ListItem,Divider,List,Typography } from '@mui/material';
import { categories, genres , favs } from "../cache/Categories"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMoviesContext } from "../Context"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {

  const navigate = useNavigate()

  const [gotoFavs, setgotoFavs] = useState(false)

  const {setMovies , category , setCategory,genre,setGenre,genreId,setgenreId , showSideBar , setshowSideBar , darkmode} = useMoviesContext()


  const handleGenre = (newgenre,id)=>{
    navigate('/')
    setGenre(newgenre)
    setgenreId(id)
    setCategory('')
    setgotoFavs(false)
    setshowSideBar(false)
  }

  const handleCategory = (newCategory)=>{
    navigate('/')
    setCategory(newCategory)
    setGenre('')
    setgotoFavs(false)
    setshowSideBar(false)
  }

  const handleFavs = ()=>{
    navigate('/favourites')
    setgotoFavs(true)
    setGenre('')
    setCategory('')
    setshowSideBar(false)
  }


  //!when genre changes
    useEffect(()=>{


    const getMovies = async(id)=>{

      const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=1&api_key=f012db64b65577ba779bbf1e9b76d451`)
      setMovies(data.results)
    }

    getMovies(genreId)

   // setMovies(data.results)

  },[genre])

 
   //!when category changes
  useEffect(()=>{
    const getMovies = async(category)=>{

      const q = category.toLowerCase().replace(' ','_')

      if (q === ''){
       // console.log('walo')
        return 
      }

      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${q}?api_key=f012db64b65577ba779bbf1e9b76d451&language=en-US&page=1`)
      setMovies(data.results)
    }

    getMovies(category)



    

  },[category])

 // console.log(showSideBar);

  return (
    <Box sx={{backgroundColor: darkmode && 'black', color: darkmode && 'white', overflow: 'auto', left: showSideBar ? '0px !important' : '-190px !important' }} className="sidebar">
        <List>
            <Typography sx={{textAlign:'center',opacity:'0.7',margin:'10px 0px'}}>Favourites</Typography>
            {favs.map((f, index) => (
              <ListItem key={index} disablePadding sx={{mb:'5px'}}>
                <ListItemButton 
                onClick={()=>handleFavs()}
                selected={gotoFavs} >
                  <ListItemIcon>   
                    <FavoriteIcon style={{filter :darkmode && 'invert(1)'}}  />
                  </ListItemIcon>
                  <ListItemText primary={f.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <Typography sx={{textAlign:'center',opacity:'0.7',margin:'10px 0px'}}>Categories</Typography>
            {categories.map((c, index) => (
              <ListItem key={index} disablePadding sx={{mb:'5px'}}>
                <ListItemButton 
                onClick={()=>handleCategory(c.title)} 
                selected={category === c.title && true}>
                  <ListItemIcon>   
                    <img src={c.icon} alt={c.name} style={{filter :darkmode && 'invert(1)'}} width="30px" height="30px" />
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
                    <img src={g.icon} alt={g.name} width="30px" height="30px" style={{filter :darkmode && 'invert(1)'}}  />
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