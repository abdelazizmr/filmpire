import React from 'react'

import { useContext,useState, useEffect, createContext } from 'react'

const ContextMovies = createContext()

export const useMoviesContext = ()=>{
    return useContext(ContextMovies)
}


const Context = ({children}) => {

    const [movies, setMovies] = useState([])
    const [category, setCategory] = useState('Popular')
    const [genre, setGenre] = useState('')
    const [genreId, setgenreId] = useState(0)
    const [favMovies,setfavMovies] = useState([])
    const [showSideBar, setshowSideBar] = useState(false)
    const [darkmode, setDarkmode] = useState(false)





    // fetching movies from ls
    useEffect(()=>{


        const fm = localStorage.getItem('favMovies')


        if (fm === null || fm?.length === 0){
            console.log('nothing in localstorage')
            return
        }
        setfavMovies(JSON.parse(fm))

        console.log('fav movies from ls',JSON.parse(fm))

    },[])



  
    // add movie to ls
    const addToFavourites = (movie)=>{
        const m = [...favMovies,movie]
        console.log('added',m);
        localStorage.setItem('favMovies',JSON.stringify(m))
        setfavMovies(m)
        console.log('added to local storage')
    }
    // removing a movie from ls
    const removeFromFavourites = (id)=>{
        const m = favMovies.filter(movie=>movie.id !== id)
        localStorage.setItem('favMovies',JSON.stringify(m))
        setfavMovies(m)
        console.log('removed from localstorage')
    }




    
    const  value = {
        movies,
        setMovies,
        category,
        setCategory,
        genre,
        setGenre,
        genreId,
        setgenreId,
        favMovies,
        addToFavourites,
        removeFromFavourites,
        showSideBar,
        setshowSideBar,
        darkmode, 
        setDarkmode,
    }

    return (
        <ContextMovies.Provider value={value}>
            {children}
        </ContextMovies.Provider>
    )
}

export default Context