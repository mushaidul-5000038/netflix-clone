import { useState , useEffect} from 'react'
import axios from '../axios'
import requests from '../requests'
import './Banner.css'

const Banner = () => {
    const [movie,setMovie]= useState([])

    useEffect(()=> {
        async function fetchDataBanner (){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            )
            return{
                request
            }
        }
        fetchDataBanner();

    },[])

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
        
      }



    return (
        <header className='banner_container' style={{
            backgroundSize:'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className='banner_contents'>
                <h2 className='banner_title'>{movie?.name|| movie?.original_name || movie?.title || movie?.original_title }</h2>
                
                <div className='banner_buttons'>
                    <button className='banner_button play_btn'>
                        <i className="fas fa-play"></i>
                        <span> </span>
                        <span>Play</span>
                        
                    </button>
                    <button className='banner_button my_list_btn'>
                        <i className="fas fa-info-circle"></i>
                        <span> </span>
                        <span>My list</span>
                    </button>
                </div>
                <h1 className='banner_overview'>{truncate(movie?.overview,150)}</h1>                   
                    
            </div>
            <div className='banner_fadeBottom'/>
            
        </header>
    )
}

export default Banner
