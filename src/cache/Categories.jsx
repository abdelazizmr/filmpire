import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import  action  from "../assets/action.png"
import  adventure  from "../assets/adventure.png"
import  documentary  from "../assets/documentary.png"
import  animation  from "../assets/animation.png"
import  comedy  from "../assets/comedy.png"
import  crime  from "../assets/crime.png"
import  drama  from "../assets/drama.png"
import  fantasy  from "../assets/fantasy.png"
import  horror  from "../assets/horror.png"
import  romance  from "../assets/romance.png"
import  sfiction  from "../assets/sfiction.png"
import  war  from "../assets/war.png"


export const categories = [
   { title : 'Popular', icon : <LocalMoviesIcon/> },
   { title : 'Top Rated', icon : <StarOutlineIcon /> },
   { title : 'Upcoming', icon : <AddToQueueIcon /> }
]

export const genres =  [
    {
        "id": 28,
        "name": "Action",
        "icon" : action
    },
    {
        "id": 12,
        "name": "Adventure",
        "icon" : adventure
    },
    {
        "id": 16,
        "name": "Animation",
        "icon" : animation
    },
    {
        "id": 35,
        "name": "Comedy",
        "icon" : comedy
    },
    {
        "id": 80,
        "name": "Crime",
        "icon" : crime
    },
    {
        "id": 99,
        "name": "Documentary",
        "icon" : documentary
    },
    {
        "id": 18,
        "name": "Drama",
        "icon" : drama
    },
    {
        "id": 14,
        "name": "Fantasy",
        "icon" : fantasy
    },
    {
        "id": 27,
        "name": "Horror",
        "icon" : horror
    },
    {
        "id": 10749,
        "name": "Romance",
        "icon" : romance
    },
    {
        "id": 878,
        "name": "Science Fiction",
        "icon" : sfiction
    },
    
    {
        "id": 10752,
        "name": "War",
        "icon" : war
    }
]

