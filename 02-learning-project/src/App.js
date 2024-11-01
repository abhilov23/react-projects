import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';



const API_URL = 'https://www.omdbapi.com?apikey=eed81b90';

const movie1 ={
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg"
    };



const App = () =>{
    const [movies, setMovies] = useState([]);


    const searchMovies =async (title)=>{
     const response = await fetch(`${API_URL}&s=${title}`);
     const data = await response.json();

     setMovies(data);
    }
     

     useEffect(()=>{
      searchMovies('spiderman')
     }, [])


    return (
       <div className='app'>
        <h1>MovieLand</h1>

        <div className='search'>
            <input 
            placeholder='Search for movies' 
            value='superman' 
            onChange={()=>{}}/>

            <img
            src={SearchIcon}
            alt="search"
            onClick={()=>{}}
            />
        </div>
        {
            movies?.length > 0
            ? (<div className="container">
             {movies.Search?.map((movie)=>(
                 <MovieCard movie={movie}/>
             ))}
        </div> ) : (
         <div className="empty"> 
            <h2>Mo movies found</h2>
             </div>
        )
        }
       </div>
    )
}

export default App;