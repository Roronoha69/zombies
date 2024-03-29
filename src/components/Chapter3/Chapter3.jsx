import React from 'react'
import './Chapter3.scss'
import gif1 from '../../img/walking.gif'
import gif2 from '../../img/girlfriend.gif'
import { useState, useEffect } from 'react';
import {TypeWriter} from '../index';
import ReactPlayer from 'react-player'

import boy from '../../img/boy.png'
import girl from '../../img/girl.png'
import next from '../../img/next2.png'
import myst from '../../img/mysteriousMan.png'
import Board from './Board/Board.jsx';


function Chapter3() {

    const [isLoading, setLoading] = useState(true)
    const [img1, setImg1] = useState(false)
    const [img2, setImg2] = useState(false)
    const [playVideo, setPlayVideo] = useState(false)
    const [n, setN] = useState(0) 
    const [text, setText] = useState('fjzeoh')
    const [isPaused, setPause] = useState();
    const [istextReady,setTextReady] = useState(false)


    let audio = new Audio("/audiochap2.mp3")
 
    useEffect(() => {
    
        let timer1 = setTimeout(() => setLoading(false), 7000);
        let timer2 = setTimeout(() => setImg1(true), 5200)
        let timer3 = setTimeout(() => setImg2(true), 8900)
        let timer4 = setTimeout(() => setImg1(false), 10600)
        let timer5 = setTimeout(() => handleTextReady(), 12600)
     
        audio.play();
        
        let timer6 = setTimeout(() => audio.pause(), 25000);
        
        return () => {
          clearTimeout(timer1);
        };
    },[])

    function handleTextReady() {
      setTextReady(true)
      setText("   This is my wife, she was one of the first to be contaminated. She is still alive ...")
    }

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

      function handleClick() {
        const arrText = [ `  AAAIEEEE! Why there are snakes? What are you doing with her ?!?`, `  Calm down, she uncunsius and i'm trying to save her`, '  Do you have a phone? I think I know what to do', '   Yes we found one in the first chapter', '   okay perfect, you must play Snake game.', '  The magnetic vibrations of the Snake game will remove the virus present in her body.'  ]
        setText(arrText[n])
        setN(n+1)
        if (n==6) {
          setPlayVideo(true)

        }
        if (n==5) {
          setPause(true)
          //audio.pause()
        }   
        if (n==3) {
          setPause(true)
          audio.pause()
        }   
      }

      
    
     
  return (
    <div>
        <div className={`chapter3 ${isLoading? '' : 'invisible'} `}>
          <div className="texts">
          <h2>Final Chapter : The Experiment</h2>
          <p>
          <TypeWriter text={'   Chad and Kate enter the real laboratory and feel like something strange is going on ...'} />
          </p>         
          </div>
          <div className="container">
	          <div className="loading-bar">
		          <div className="progress-bar"></div>
	          </div>
          </div>
        </div>
        <div className={`text ${istextReady?'':'invisible'} `}>
          <div className='wrap-text'>

           <div className={`girlImage ${n == 1 ? 'visible' : 'invisible'}`}>
                <img src={girl} alt="g" />
            </div>            
            <div className={`mistImage ${n ==0 || n == 2 || n==3 ||n > 4 ? 'visible' : 'invisible'}`}>
                <img src={myst} alt="m" />
            </div>
            <div className={`boyImage ${n == 4  ? 'visible' :'invisible'}`} >
              <img src={boy} alt="b" />
            </div>          
            <h1>
              <TypeWriter text={text} />
            </h1>
            </div>
            <div  className={`the-next ${isPaused? 'invisible':'visible'} `}>
              <button onClick={ () => handleClick()}>
                <img src={next} alt="next" />
              </button>
            </div>          
        </div>

        <div className={`snaky ${n>3 || playVideo? '':'invisible'} `}>
            <Board></Board>
            <button onClick={()=> setPlayVideo(true)}>
              next
            </button>
        </div>
        
        <div className={`img1 ${img1? 'visible': 'invisible'} `}>
        <img src={gif1} alt="g1" width={width} height={height}/>

        </div>

        <div className={`img2 ${img2? 'visible':'invisible'} `}>
        <img src={gif2} alt="g1" width={width} height={height}/>

        </div>

        <div className={`player-chap3 ${playVideo? 'visible' : 'invisible'} `}>
        <ReactPlayer
          className='react-player'
          url='/video-end-end.mp4'
          width={width}
          height={height}
          playing={playVideo}
       
          onReady={console.log('ready')}         
        />
      </div>
    </div>


  )
}

export default Chapter3