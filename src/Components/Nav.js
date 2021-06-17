import { useState,useEffect } from 'react' 
import './Nav.css' 

const Nav = () => {
    const [show,handleShow]=useState(false)

    useEffect( ()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY>50){
            handleShow(true)
        }
        else handleShow(false)
      })
      return () =>{
          window.removeEventListener("scroll")
      }
    },[])


    return (
        <div className={`nav_bar ${show && 'nav_bar_background'}`}>

            <img className='netflix_logo' 
                 src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' 
                 alt='netflix logo'></img>

            <img className='netflix_avatar' 
                 src='https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png' 
                 alt='netflix avatar'></img>

            
        </div>
    )
}

export default Nav

