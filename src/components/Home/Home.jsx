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
const [go, letsgo] = useState(false)
const [inputName, setName] = useState('')
const [playVideo, setPlayVideo] = useState()

const getName = createContext

let audio = new Audio("/audioHome.mp3")
 
useEffect(()=> {
  audio.play();
}, [])

function useWindowSize() {
    // s/o https://www.youtube.com/watch?v=OHvJqOjToes for the tips ;)
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

  function handleClick() {
    letsgo(true)
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
               <h3>On this scenario game, you will only need to use the click and the drag from the mouse</h3>
               <h3>For the Web3 functionality you will need need <a href="http://" target="_blank" rel="noopener noreferrer">Meatamask</a> set up to the the <a href="http://" target="_blank" rel="noopener noreferrer">Ropsten Test Network</a> and finally get some <a href="http://" target="_blank" rel="noopener noreferrer">test rETH</a>.  (You will be able to skip this part)</h3>
                <p>All the real ETH sent will be lost. Please use Ropsten.</p>

              </motion.div> 
                    )}

          </motion.div> 
         
   <div className='go'>
   <img src={press} alt="ps"  onClick={()=> handleClick()}/>
      {/* <h2 onClick={()=> handleClick()}> PLAY</h2> */}
  </div>   

  <div className={`play-page ${go? 'visible' : ''} `}>
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

  </div>

  <div className={`player ${playVideo? 'visible' : 'invisible'} `}>
        <ReactPlayer
          className='react-player'
          url='/2033.mp4'
          width={width}
          height={height - 30}
          controls={true}
        />
      </div>

    <img src={bgH} alt="h" width={width-2} height={height-2} />


    </div>
  )
}

export default Home