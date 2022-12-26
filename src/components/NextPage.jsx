import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useEffect } from 'react';
import axios from 'axios';

const NexPage = ({toggleFeed,category,genre,genreId}) => {


    const [page, setPage] = useState(1)

    console.table({page,category,genre})

 

    useEffect(()=>{
   
        //console.log('page : ',page)
        if (genre === ''){ // bring categories on page changinf
          const getMovies = async(c)=>{
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${c}?api_key=f012db64b65577ba779bbf1e9b76d451&language=en-US&page=${page}`)
            toggleFeed(data.results)
        }
          const q = category.toLowerCase().replace(' ','_')
          getMovies(q)

          return
        }

        if (category === ''){
        const getMovies = async(id)=>{

              const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${page}&api_key=f012db64b65577ba779bbf1e9b76d451`)
              toggleFeed(data.results)
            }

            getMovies(genreId)

            return
        }

        


    },[page])


    // useEffect(()=>{
    //     setPage(1)
    //     console.log('wazbi');
    // },[category])


  return (
    <Stack spacing={2} sx={{display:'flex',justifyContent:'center'}}>
      <Pagination
        count={10}
        value={page}
        sx={{margin:'50px auto'}}
        onChange={(e,value)=>setPage(value)}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}

export default NexPage