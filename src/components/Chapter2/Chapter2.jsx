import React, {useState, useEffect} from 'react'
import './Chapter2.scss'
import Typewriter from 'typewriter-effect';
import {TypeWriter} from '../index';
import Draggable2 from 'react-draggable';

import bgA from '../../img/chap2bg.jpg'
import boy from '../../img/boy.png'
import girl from '../../img/girl.png'
import next from '../../img/next2.png'
import myst from '../../img/mysteriousMan.png'
import play from '../../img/play.png'
import subm from '../../img/submit.png'
//import succesVideo from '../../img/video-succes.mp4'
import succesVideo from '../../img/video-succes.gif' 
import fail from '../../img/video-echec.gif'


function Chapter2() {

  const [isLoading, setLoading] = useState(false)
  const [text, setText] = useState(`  Aaarhg... Aaaarrrhg...! AAAAAARRHHG!! My calcul are wrong! `)
  const [isPaused, setPause] = useState();
  const [n, setN] = useState(0) 
  const [numberX, setX] =useState();
  const [numberY, setY] = useState()
  const [isSucceed, setSucceed] = useState(false)
  const [isFailed, setFailed] = useState(false)
  const [isPlaying, setPlayQuizz] = useState()
  const [q1, setQ1] = useState();
  const [q3, setQ3] = useState();
  const [q2, setQ2] = useState();

  let audio = new Audio("/audiochap2.mp3")

  useEffect(() => {
    
      let timer1 = setTimeout(() => setLoading(false), 8400);
      audio.play();
      
      return () => {
        clearTimeout(timer1);
      };
  },[])

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
    const arrText = [`  Hey ?! What is this place ?? Dammn it's huge`, `  Looks there is someone there, he looks creepy with the mask on his face...`, `  What are you doing  in my laboratory? Arrgh... I don't have the time for this`, `   Look, if you can't help me you'll have to leave, i don't have enought water`, `  Wait there are zombies outside! You need help for what?`, `  That's not your business for now ... Take this test, it's from the NASA. if you fail you get out `, `  Are you sure this is the test from the NASA? `, "   Yes 100%, I had to pass the same to be part of the part of the scientist team and search a cure for Alpha-3 variant", "   What? You're a Covid-19 scientist? I taught they were all dead?!?", "  Well, they did try to kill me... and din't completly fail since i'm a cyborg now", "   Wait what?? I thaught that was a mask! But who tried to kill you guys and why?", "  We don't have the time to speak now! Here look ... this his the last calcul that I need to solve to find the Covid-19 cure ..."  ]
    setText(arrText[n])
    setN(n+1)
    if (n==5) {
      setPause(true)
    }


  }


  function handleQ(params) {
    
  }

  function handleCalcul() {
    setX(9)
    var min=11; 
    var max=19;  
    setY(Math.floor(Math.random() * (max - min)) + min)
  }

  const getInputValue = (event)=>{
    // show the user input value to console
    const userValue = event.target.value;

     if (userValue == numberX*numberY) {
       
       setText("  You Found it !! let's go to my lab NOW !")
       setPause(false)
     }
    
    
};



function handleFail() {
  setFailed(true)
  setText("  NO NO NOOO wrong answer ... ! Get OUT !")
}

function handleFinal() {
    setPause(false)
    setSucceed(true)
    setText('Well, well, well, ... Looks like we have 2 genuis here. 148 is very impressing')
  
}
console.log(n);


  return (
    <div className='app'>

        <div className={`chapter2 ${isLoading? '' : 'invisible'} `}>
          <div className="texts">
          <h2>Chapter 2 : A New Friend ?</h2>

          <p>
          <TypeWriter text={'   The door does not lead to the exit but to a strange place where a mysterious man stands behind...'} />
          </p>
          <p>Just10</p>
          </div>
          <div className="container">
	          <div className="loading-bar">
		          <div className="progress-bar"></div>
	          </div>
          </div>
        </div>

      <img src={bgA} alt="" width={width -10} height={height-10} />

      <div className='text'>
          <div className='wrap-text'>

           <div className={`girlImage ${n == 2 || n ==6 ? 'visible' : 'invisible'}`}>
                <img src={girl} alt="g" />
            </div>
             
            <div className={`mistImage ${n ==0 || n == 3 || n == 4 || n== 7 ? 'visible' : 'invisible'}`}>
                <img src={myst} alt="m" />
            </div>

            <div className={`boyImage ${n == 1 || n == 5 ? 'visible' :'invisible'}`} >
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

            {/* <div className={`${chapterOneOver? 'visible' : 'invisible'} `}>
              <button>
                <a href="/chap3"> get Out</a>
              </button>
          </div>            */}

        </div>


        <Draggable2 handle=".status-bar"  >
      <div  className={`guess-cards ${n >= 6 && n < 7? 'visible' : 'invisible'} `}>
        <div className="status-bar">
          <div className="window-name">NASA Test</div>
        </div>
        <div className="paper">

          <div className={`pre-text ${q1 == undefined ? 'visible':'invisible'} `}>
          <h2>You need to score 140 IQ to pass this level</h2>
          <h2>Press play when ready ... </h2>
          </div>

          <div className={`text-calcul ${q1 && q2 == undefined? 'visible':'invisible'} `}>
          <p>1/3 Waht was the skin color of Michael Jackson ?</p>
                  
                <button onClick={()=> setQ2(true)}>
                  black
                </button>
                <button onClick={()=> setQ2(true)}>
                  white
                </button>
              
              <button onClick={()=> setQ2(true)}>
                  grey
                </button>
          </div>

          <div className={`text-calcul ${q2 && q3 == undefined? 'visible':'invisible'} `}>
          <p>2/3 You are lost in the dessert and you take one item. What would it be ?</p>
              
                  <button onClick={()=> setQ3(true)}>
                  A fishing pole
                </button>
                <button onClick={()=> setQ3(true)}>
                  Big Couscous bag
                </button>
      
              <button onClick={()=> setQ3(true)}>               
                vegetable seed
              </button>
                  
          </div>

          <div className={`text-calcul ${q3 && isSucceed == false? 'visible':'invisible'} `}>
                  <p>3/3 What was the skin color of Michael Jackson ?</p>

                  <button onClick={()=> handleFinal()
                   }>
                  black
                </button>
                <button onClick={()=> handleFinal()}>
                  white
                </button>

              <button onClick={()=>handleFinal()}>
                  grey
                </button>
                  
          </div>

          <div className={isSucceed? '':'invisible'} >
              <h1>148 IQ</h1>
          </div>
              
        </div>

        <div className='card-footer'>
            <div className={q1?'invisible':''}>
              <button onClick={()=> setQ1(true)}>
                <img src={play} alt="p" />
              </button>
            </div>
        </div>
      </div>
    </Draggable2>


<Draggable2 handle=".status-bar"  >
      <div  className={`calcul-cards ${n >= 12? 'visible' : 'invisible'} `}>
        <div className="status-bar">
          <div className="window-name">Peice of Paper</div>
        </div>
        <div className="paper">

          <div className={`pre-text ${numberX? 'invisible':'visible'} `}>
          <h2> You will have 20 seconds to solve the calculation</h2>
          <h2>Press play to start ... </h2>
          </div>

          <div className={`text-calcul ${numberX? 'visible':'invisible'} `}>
              <p>{numberX} x {numberY} </p>
              <p>=</p>

              <input type="text" onChange={() => getInputValue()} />
              
              </div>
        </div>
       
        <div className='card-footer'>
        <div className={numberX? 'invisible' :'visible'}>
        <button onClick={()=> handleCalcul()}>
          <img src={play} alt="p" />
        </button>
        </div>
        <div className={numberX? 'visible' :'invisible'}>
        <button onClick={()=> handleFail()}>
        <img src={subm} alt="s" />
        </button>
        </div>
        </div>
      </div>
    </Draggable2>

    <div className={`videoContainer  `}>
        
          <img src={succesVideo} width={width-20} height={height-20}  className={` ${isSucceed? 'visible':'invisible'} `}/>
          <img src={fail} alt="f" width={width-10} height={height-10} className={` ${isFailed? 'visible':'invisible'} `} />
      </div>
  
      
      </div>
  )
}

export default Chapter2