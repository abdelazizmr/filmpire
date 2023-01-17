import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./MovieDetails.css"
import RecommendedMovies from "../components/RecommendedMovies"
import axios from 'axios'
import {genres} from "../cache/Categories"
import Spinner from '../helpers/Spinner'
import { useMoviesContext } from '../Context'

const MovieDetails = () => {



  const {id}  = useParams()

  const [movie, setMovie] = useState({}) // to the movie being dispalyed

  const [loading, setLoading] = useState(true) 

  const [ added , setAdded ] = useState(false)

  const { addToFavourites , removeFromFavourites, favMovies , darkmode } = useMoviesContext()



  //this to makea request every time the id changed
  //isLiked function checkes if a movie in the ls so it already added
  useEffect(()=>{
      const getMovie  = async ()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f012db64b65577ba779bbf1e9b76d451&language=en-US`)

        setLoading(false)
        setMovie(data)
        window.scrollTo(0, 0);

      }

      const checkLiked =  () =>{
        const isLiked = favMovies.find(movie=> movie.id == id)
  
        if (isLiked === undefined){
          setAdded(false)
          console.log('not in favs');
          return
        }
        setAdded(true)
        console.log('in favs')
      }
      checkLiked()
      getMovie()

  },[id])

 const  rate  = (movie['vote_average'])?.toFixed(1)

  const poster = `https://image.tmdb.org/t/p/w500/${movie?.['poster_path']}`


  //to match the genres and grab also the pictures from cache/categories
  const matchedGenres = ()=>{
    const genresIds = movie?.genres?.map(genre => genre.id)

   // console.log(genresIds);
    let matchedGenre = []

    for (let i of genresIds){
      for (let j of genres){
        if (i == j.id){
          matchedGenre.push(j)
        }
      }
    }

    //console.log(matchedGenre);

    return matchedGenre

  }

  //setting the add to favourite button
  const handleAddFavMovie  = ()=>{
    if(added === true){
      setAdded(false)
      removeFromFavourites(movie?.id)
      return
    }
    setAdded(true)
    addToFavourites(movie)
  }

//  console.log(movie)

  if (loading){
    return (
      <Spinner sx={{margin:'100px 20px 20px 250px'}} />
    )
  }

 
  return (
    


      <>

      <div className='movie-detail' style={{color : darkmode && 'white'}}>
        <img src={poster} alt={movie?.title} className='poster' />
        <div className='movie-detail-info'>
            <h2>{movie?.title}</h2>
            <div className='rating-timing-realeased'>
                <div className='rating'>
                    <Rating
                    name="simple-controlled"
                    value={rate/2}
                    readOnly 
                    />
                  <span>{rate}/10</span>
                </div>
                <div className='timing'>
                  <span>{movie?.runtime} minutes</span>
                  <span>|</span>
                  <span>{movie?.['release_date']}</span>
                </div>
            </div>
            <div className='genres'>
              {matchedGenres()?.map((genre,index)=>(
                <div className='genre' key={index}>
                  <img src={genre.icon} alt={genre.name} />
                  <span>{genre.name}</span>
              </div>
              ))}
              
            </div>

            <div className='description' style={{color : darkmode && 'white'}}>
              <h4>Overview</h4>
              <p>{movie?.overview}</p>
            </div>
        </div>
      </div>

        <div className="links">
             <a className='link' href={`${movie?.homepage}`} target="_blank" >Watch Movie</a>
          <a 
          className='link' 
          href={`https://www.imdb.com/title/${movie?.imdb_id}/`} 
          target="_blank" >Watch Trailer</a>
          <button className='link' onClick={()=>handleAddFavMovie()}>
            Add to watchlist 
            <span>
              <FavoriteIcon style={{color : added ? 'red' : 'white'}} />
            </span>
          </button>
          <Link className='link' to="/">Go Back</Link>
        </div>

    

        <RecommendedMovies id={movie?.id}  />
      </>

  
  
  )



  }

  


export default MovieDetails