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
import fizer from '../../img/FIZER.png'


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
  const [invalid, setInvalid] = useState('')
  const [passwordOk, setPasswordOk] = useState(false)
  const [verify, setVerify] = useState(false)
  const [tryLeft, settryleft] = useState(3)

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
    const arrText = [`  Hey ?! What is this place ?? Dammn it's huge`, `  Looks like there's someone there, he looks scary with the mask on his face...`, `  What are you doing  in my laboratory? Arrgh... I don't have the time for this`, `   If you can't help me you'll have to leave. I don't have enought water`, `  Wait there are zombies outside! You need help for what?`, `  That's not your business for now ... Take this test, it's from the NASA. if you fail you get out `, `  Are you sure this test is from the NASA? The questions are ... surprising`, "   I had to pass the same to be part of the part of the scientist team who searched a cure for Alpha-7 variant", "   What? You're a Covid-19 scientist? I taught they were all dead?!?", "   I survived by truning myself into a cyborg", "   Wait what?? I thaught that was a mask! But who tried to kill you guys and why?", "  It was Greta Thunberg and her army of environmental terrorists. They thought the last hope for the planet was to eradicate humanity.", " I'm still looking for the cure, but for that I need to access the Fizer Database to get more informations on the variant Alpha-7", "  The only hint I have is this, but i don't speak french and I don't have internet : 'DIEU ME DETESTE DONC JE N'AI NI BRAS NI JAMBES' ", "  Follow me I have to try something!"]
    setText(arrText[n])
    setN(n+1)
    if (n==5) {
      setPause(true)
    }

    if (n==13) { 
      setPause(true)
      }
      if (n==14) {
        setPause(true)
      }
  }


  const getInputValue = (event)=>{

    const userValue = event.target.value;
    const snake = 'snake' || 'Snake' || 'serpent' 

     if (userValue == snake) {
       setPasswordOk(true)
     }
    
    
};


function handleEnter() {
  
if (passwordOk == false) {  
  
    setInvalid(`  invalid password `)
} else if (passwordOk == true){
    setText("  Amazing you got it. Wait ... What is this language ? It's written in reptilian, Fizer are aliens ?!?")
    setPause(false)
    setVerify(true)
}

}

function handleFail() {
  setFailed(true)
  setText("  NO NO NOOO wrong answer ... ! Get OUT !")
}

function handleFinal() {
    setPause(false)
    setSucceed(true)
    setText('   Well, well, well, ... Looks like we have 2 genuis here. 148IQ is very impressing')
  
}
console.log('#####################################');
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

           <div className={`girlImage ${n == 2 || n == 7 || n ==11? 'visible' : 'invisible'}`}>
                <img src={girl} alt="g" />
            </div>
             
            <div className={`mistImage ${n ==0 || n == 3 || n == 4 || n== 6 || n==8 || n==10 || n > 11? 'visible' : 'invisible'}`}>
                <img src={myst} alt="m" />
            </div>

            <div className={`boyImage ${n == 1 || n == 5 || n == 9 ? 'visible' :'invisible'}`} >
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

            <div  className={`the-next ${n==15? 'visible':'invisible'} `}>
              <a href="/chap3">
              <button onClick={ () => handleClick()}>
                <img src={next} alt="next" />
              </button>
              </a>
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
                👋🏾  black
                </button>
                <button onClick={()=> setQ2(true)}>
                👋🏻  white
                </button>
              
              <button onClick={()=> setQ2(true)}>
              👤 grey
                </button>
          </div>

          <div className={`text-calcul ${q2 && q3 == undefined? 'visible':'invisible'} `}>
          <p>2/3 You are lost in the dessert and you can take one item. What would it be ?</p>
              
                  <button onClick={()=> setQ3(true)}>
                  🎣 Fishing pole
                </button>
                <button onClick={()=> setQ3(true)}>
                  Couscous
                </button>
      
              <button onClick={()=> setQ3(true)}>               
              🌱 Seeds
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
      <div  className={`calcul-cards ${n >= 13? 'visible' : 'invisible'} `}>
        <div className="status-bar">
        <div className="close-btn">X</div>
          <div className="window-name">Fizer Website</div>
        </div>
        <div className="paper">

           <div className={`text-calcul ${verify? 'invisible' : ''} `}> 
             
             <img src={fizer} alt="f" />

            <input type="text" placeholder='password' onChange={(e) => getInputValue(e)} />
            <button onClick={() => handleEnter()}>
              Enter
            </button>

                   <div className='red'>
            <p>
            <TypeWriter text={invalid} />
            </p>
                  </div>
               </div> 

               <div className={`${verify? '':'invisible'} `}>
                 <h2>Sssss,</h2>
                 <p>SssSsSSssss SSs SssS sSSs s sssss ss SSsS sS</p>
                 <p>SsSSssSSssSs sssSSSs s</p>
                 <p>SssS sSsSs SSSSs s</p>
                 <p>SsSSssSSSs s</p>
                 <p>SsssS ssSs sSSsSSSs s</p>
                 <p>SSSssssSSSsSS s</p>
                 <p>ssSSS sSsSS sss SSs s</p>

           

               </div>
        </div>
{/*        
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
        </div> */}

      </div>
    </Draggable2>

    {/* <Draggable2 handle=".status-bar"  >
      <div  className={`guess-cards ${n > 13? 'visible' : 'invisible'} `}>
        <div className="status-bar">
          <div className="window-name">hint</div>
        </div>
        <div className="paper">

          <div className={`pre-text ${n<8 ? 'visible':'invisible'} `}>
          <h2>Password hint from ex collegue</h2>
          <h2>Press play when ready ... </h2>
          </div>



         
        </div>

      
      </div>
    </Draggable2> */}

    <div className={`videoContainer  `}>
        
          <img src={succesVideo} width={width-20} height={height-20}  className={` ${isSucceed? 'visible':'invisible'} `}/>
          <img src={fail} alt="f" width={width-10} height={height-10} className={` ${isFailed? 'visible':'invisible'} `} />
      </div>
  
      
      </div>
  )
}

export default Chapter2