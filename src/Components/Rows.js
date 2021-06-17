import { useState , useEffect} from 'react'
import axios from '../axios'
import "./Row.css"
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const Rows = ({title,fetchUrl,imgShowLarge}) => {
    const [movies,setMovies]=useState([])
    const [trailerUrl,setTrailerUrl]=useState("")


    const baseUrlPoster='https://image.tmdb.org/t/p/original'
    
    useEffect( () => {
    async function fetchData () {
      const request=await axios.get(fetchUrl)
      setMovies(request.data.results)
      return{
           request
      }
    }
    fetchData()
  },[fetchUrl])

    console.log(movies)
    const opts = {
      height: "390",
      width: "100%",
      playerVars:{
        autoplay:1,
      }, 
    }

    const handleClick = (movie) => {
      if (trailerUrl){
        setTrailerUrl('');
      }
      else{
        movieTrailer(movie?.name|| movie?.original_name || movie?.title || movie?.original_title || "")
        .then(url => {
          const urlParams =new URLSearchParams( new URL(url).search)
          setTrailerUrl(urlParams.get('v'))

 
        }).catch((error)=>console.log(error) )
      }
      

    }


    return (
        <div className='row'>
          <h2 className='row_title'>{title}</h2>
          <div className='row_posters' >
          {movies.map((movie)=>(
          <img key={movie.id} onClick={() => handleClick(movie)} className={`row_poster ${imgShowLarge && 'row_poster_large'}`} src={`${baseUrlPoster}${imgShowLarge?movie.poster_path:(movie.backdrop_path || movie.poster_path)}`} alt={movie.name} ></img>
          ))}
          </div>
          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Rows
