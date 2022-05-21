import React from 'react'
import bgH from '../../img/homeBg.png'
import { useState, useEffect, createContext } from 'react';
import './Home.scss'
import logo from '../../img/logo.png'
import { motion } from "framer-motion"
import Draggable2 from 'react-draggable';
import play from '../../img/play1.png'
import press from '../../img/pressStart.gif'
import ReactPlayer from 'react-player'


function Home() {


const [boyName, setBoyName] = useState('Chad'); // chap 2/3
const [girlName, setGirlName] = useState('Kate'); // chap 2/3
const [isOpen, setOpen] = useState(false)


const [playVideo, setPlayVideo] = useState(false)


let audio = new Audio("/home.mp3")
 
useEffect(()=> {
  //audio.play();
}, [])

function useWindowSize() {

    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(()=>{
      const handleResize = () => {
        setSize([window.innerHeight, window.innerWidth])
      }
      window.addEventListener('resize', handleResize)
      return () =>{
        window.removeEventListener('resize', handleResize)
      }
    }, [])
    return size;
  }
  
  const [height, width] = useWindowSize();



  function handleStart() {
    setPlayVideo(true)
    audio.stop()
  } 

  return (
    <div className='home'>
       
        

          <img src={logo} alt=""  className='logo'/>

           <motion.div
          transition={{layout: {duration:1, type: "string"} }}
           layout
            onClick={()=> setOpen(!isOpen)}
            className='card'
            style={{borderRadius: "1rem", boxShadow: '0px 10px 30px rgba(0,0,0,0.5)'}}
            
            >
            <motion.h1 layout="position">
            HOW TO PLAY
              </motion.h1>
              {isOpen && (         
              <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration: 1}}
               className='expand'>
               <h3>On this scenario game, you will need to use the click and the drag from the mouse</h3>
               <h3>For the Chapter 3 you will need the arrow on the keyboard</h3>
              

              </motion.div> 
                    )}

          </motion.div> 
          
   <div className='go'>
   <img src={press} alt="ps"  onClick={()=> handleStart()}/>
 {/*  <img src={press} alt="ps"  onClick={()=> handleClick()}/>
       <h2 onClick={()=> handleClick()}> PLAY</h2> */}
  </div>   


  {/* <div className={`play-page ${go? 'visible' : ''} `}>
    <div className="wrap-play-page">
            <div className="info">
              <h1>NickName : </h1>
            <input type="text" onChange={e => setName(e.target.value)} />
            </div>
            <div className="info">
                <h1>gender</h1>
                <button onClick={()=>setBoyName(inputName)}>
                  male
                </button>
                <button onClick={()=>setGirlName(inputName)}>
                  female
                </button>
            </div>

            <div className='finish'>
              <a href="/chap1">START</a> 

            </div>

      </div>

  </div> */}


<div className={`skip-video ${playVideo? 'visible':'invisible'} `}>
       <a href="/chap1"> skip</a>
        
       
</div>
  <div className={`player ${playVideo? 'visible' : 'invisible'} `}>
        <ReactPlayer
          className='react-player'
          url='/2033-txt2.mp4'
          width={width}
          height={height}
          
          playing={playVideo}
          onReady={console.log('ready')}
          onEnded={()=>{
            if (playVideo) {
              window.location = '/chap1'
            }
            
          } }
          
        />
      </div>

    <img src={bgH} alt="h" width={width-2} height={height-2} />


    </div>
  )
}

export default Home