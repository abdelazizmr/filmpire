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

  






    
    const  value = {
        movies,
        setMovies,
        category,
        setCategory,
        genre,
        setGenre,
        genreId,
        setgenreId
    }

    return (
        <ContextMovies.Provider value={value}>
            {children}
        </ContextMovies.Provider>
    )
}

export default Context