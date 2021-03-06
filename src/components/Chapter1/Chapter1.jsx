import { useState, useEffect, ImageBackground } from 'react';
import {TypeWriter} from '../index';
import Draggable2 from 'react-draggable';
import Draggable3 from 'react-draggable';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import './Chapter1.scss'

// assets
import bgZ from '../../img/Zombies.gif'
import '../../App.scss';
import boy from '../../img/boy.png'
import girl from '../../img/girl.png'
import key from  '../..//img/key.png'
import next from '../../img/next.png'
import phone from '../../img/cellphone.png'
import unknownObject from '../../img/unknown-object.png'
import hammer from '../../img/hache.png'
import open from '../../img/open.png'



function Chapter1() {

  let audio = new Audio("/audiochap1.mp3")
 

  
  useEffect(()=> {
    audio.play()

  }, [])
        
 
const [n, setN] = useState(0) // chap 2/3

const [boyName, setBoyName] = useState('Chad'); // chap 2/3
const [isLoading, setLoading] = useState(true);

const [text, setText] = useState(`  We ran to get here but we won't be safe for long ${boyName} ! `)
const [bagText, setBagtext] = useState(' ..(empty)..');
const [isPaused, setPause] = useState();
const [isKeyFounded, setKeyFounded] = useState(false); 
const [isPhoneFounded, setPhoneFounded] = useState(false); // chap 2/3
const [isHammerFounded, setHammerFounded] = useState(false); // chap 2 
const [text2, setText2] = useState('   invalid sequence')
const [tryLeft, setTryLeft] = useState(5)
const [time, setTime] = useState(30)

 const [isTwo, setTwo] = useState(false); const [isThree, setThree] = useState(false); const [isFour, setFour] = useState(false); const [isFive, setFive] = useState(false); const [isSix, setSix] = useState(false); const [isSeven, setSeven] = useState(false); const [isHeight, setHeight] = useState(false); const [isNine, setNine] = useState(false); const [isTen, setTen] = useState(false); const [isEleven, setEleven] = useState(false); const [isTwelve, setTwelve] = useState(false); const [isThirteen, setThirteen] = useState(false); const [isFourteen, setFourteen] = useState(false);  const [isFiveteen, setFiveteen] = useState(false);



useEffect(() => {
    
    let timer1 = setTimeout(() => setLoading(false), 7000);
    

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
  const arrText = ["  Yeah they are gonna break the door, there must be another way out", `  Look ${boyName} there is a backpag here, we should use it`,`  Okay perfect. There is a door here ...  Ahhhahg... It's looked, we have to find the key ...`, `  It's not working ! there is no lock .... ` , `   Yeah we are in 2033, nobody use key anymore. We gotta find something else quick`, `  I think we gotta find something that can hack the door system ... `, `  Okay perfect the phone we found is working, let's try to get inside the door system `, `   ( CRIIIIICK ) Look Chad the window is broken and zombies are coming in we have to hurry ! `]
  setText(arrText[n])
  setN(n+1)
  if (n === 2) {
    setPause(true)
    setBagtext('You can drag items here')
  }
  if (n ===5 && isPhoneFounded === false) {
    setPause(true);
   // setChapterOne(true);
  }

  if (n === 7) {
    setPause(true);

    for (let i = 0; i < 31; i++) {
      setTimeout(() => setTime(30-i), 1000 *i)
    }
  }

}

function handleOnDragEnd(result) {

  if (result.destination.droppableId === 'items' && result.draggableId == 'theKey' && n > 2 == true) {
    setKeyFounded(true);
    setPause(false);}  
  
  if (result.destination.droppableId == 'items' && result.draggableId == 'theHammer') {
    setHammerFounded(true); }
  
  if (result.destination.droppableId == 'items' && result.draggableId == 'thePhone') {
    setPhoneFounded(true);
    setPause(false)
  }
  
  if (result.destination.droppableId == 'items' && result.draggableId == 'theX') {
    setText('  Thats gross! put that thing down ...');}
}

console.log(n);

function retry() {
  setTryLeft(tryLeft-1)
  setTwo(false)
  setThree()
  setFour()
  setFive()
  setSix()
  setSeven()
  setHeight()
  setNine()
  setTen()
  setEleven()
  setTwelve()
  setThirteen()
  setFourteen()
  setFiveteen()
  
}



function handleError1() {
  setTwo(true);
  setText2('    Invalid sequence')
  setTimeout(() => {
    retry()
  }, 1700);

}
function handleError2() {
  setThree(true);
  setText2('   Invalid sequence')
  setTimeout(() => {
    retry()
  }, 1700);
}
function handleError3() {
  setFour(true);
  setText2('   Invalid sequence')
  setTimeout(() => {
    retry()
  }, 1700);
}
function handleError4() {
  setSix(true);
    setText2('    Invalid sequence')

  setTimeout(() => {
    retry()
  }, 1700);
}
function handleError5() {
  setSeven(true);
    setText2('      Invalid sequence')

  setTimeout(() => {
    retry()
  }, 1700);
}
function handleError6() {
  setHeight(true);
    setText2('     Invalid sequence')

  setTimeout(() => {
    retry()
  }, 1700);
}
function handleError7() {
  setEleven(true);
    setText2('  Invalid sequence')

  setTimeout(() => {
    retry()
  }, 1700);
}
function handleError8() {
  setTwelve(true);
    setText2('       Invalid sequence')

  setTimeout(() => {
    retry()
  }, 1700);
}
function handleError9() {
  setThirteen(true);
    setText2('        Invalid sequence')

  setTimeout(() => {
    retry()
  }, 1700);
}

console.log(time);
  return (
    <div className="App">

        <div className={`chapter1 ${isLoading? '' : 'invisible'} `}>
          <div className="texts">
          <h2>Chapter 1 : Trapped</h2>

          <p>
          <TypeWriter text={'   Chad and Kate try to find a refuge. '} />
          </p>
          </div>
          <div className="container">
	          <div className="loading-bar">
		          <div className="progress-bar"></div>
	          </div>
          </div>
        </div>


        <img src={bgZ} alt="bg" className='background' width={width - 5} height={height}/>
        
        <div className='text'>
          <div className='wrap-text'>
            <div className={`girlImage ${n % 2 == 0? 'visible' : 'invisible'}`}>
                <img src={girl} alt="g" />
            </div>

            <div className={`boyImage ${n % 2 == 0? 'invisible' :'visible'}`} >
              <img src={boy} alt="b" />
            </div>
          
            <h1>
              <TypeWriter text={text}/>
            </h1>
            </div>

            <div  className={`the-next ${isPaused? 'invisible':'visible'} `}>
              <button onClick={ () => handleClick()}>
                <img src={next} alt="next" />
              </button>
            </div>

            <div className={`timer ${n>7? 'visible' : 'invisible'} `}>
             <p>00:{time}</p>
          </div>           
        </div>

   <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='soloItem'>
        {(provided)=> (
        <div  {...provided.droppableProps} ref={provided.innerRef}> 
          <Draggable draggableId='theKey' key={"theKey"} index={1}>
           {(provided)=> (  
             <div className={`key ${isKeyFounded? 'invisible' : ''} `} key={"theKey"} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
              <img src={key} alt="drag-key" className="dragable2"/>
             </div>
          )}
          </Draggable>
       </div>
         )}
      </Droppable>

      <Droppable droppableId='soloX'>
        {(provided)=> (
           <div  {...provided.droppableProps} ref={provided.innerRef}> 
            <Draggable draggableId='theX' key={"theX"} index={2}>
             {(provided)=> (  
              <div className={`the-x`} key={"theX"} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
               <img src={unknownObject} alt="drag-object" className="dragable3"/>
              </div>
            )}
           </Draggable>
           </div>
          )} 
      </Droppable>

      <Droppable droppableId='soloHammer'>
          {(provided)=> (
            <div  {...provided.droppableProps} ref={provided.innerRef}> 
            <Draggable draggableId='theHammer' key={"theHammer"} index={3}>
               {(provided)=> (  
              <div className={`hammer ${isHammerFounded? 'invisible' : ''} `} key={"theHammer"} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
               <img src={hammer} alt="drag-object" className="dragable4"/>
              </div>
            )}
            </Draggable>
            </div>
            )}
          
      </Droppable>

      <Droppable droppableId='soloPhone'>
          {(provided)=> (
             <div  {...provided.droppableProps} ref={provided.innerRef}> 
               <Draggable draggableId='thePhone' key={"thePhone"} index={4}>
                {(provided)=> (  
              <div className={`phone ${isPhoneFounded? 'invisible' : ''} `} key={"thePhone"} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <img src={phone} alt="drag-object" className="dragable5"/>
              </div>
            )}
              </Draggable>
            </div>
            )} 
      </Droppable>

      <Draggable2 handle=".status-bar"  >
      <div  className={`drag-cards ${n >= 2? 'visible' : 'invisible'} `}>
        <div className="status-bar">
          <div className="window-name">Inventory</div>
          <div className="close-btn">X</div>
        </div>

        <Droppable droppableId="items">
           {(provided)=> (      
            <div className="Console" {...provided.droppableProps} ref={provided.innerRef}>
              <p>{bagText}</p>
              <div className="all-img">
                <img src={key} alt="founded-key" className={`founded-key ${isKeyFounded? 'visible' : 'invisible' } `}/>
                <img src={phone} alt="founded-phone" className={`founded-phone ${isPhoneFounded? 'visible' : 'invisible' } `}/>
                <img src={hammer} alt="founded-hammer" className={`founded-hammer ${isHammerFounded? 'visible' : 'invisible' } `}/>
              </div>
            </div>
         )}
        </Droppable>         
        <div className='card-footer'>
     
        </div>
      </div>
    </Draggable2>
  
   </DragDropContext>

 <Draggable3 handle=".status-bar" >
   <div className={`game-two ${n>7?'': 'invisible'}` }>
  
        <div className="status-bar">
          <div className="window-name">Door System</div>
          <div className="close-btn">X</div>
        </div>
        <div className="Console">
        
        <h3>Join the point A to the point B</h3>
          <div className="line1 lines">
            <div className="items init"><p>A</p></div>
            <div onClick={()=> handleError1()} className={`items ${isTwo? 'error' :''} `} ><p>??????</p></div>
            <div onClick={()=> handleError2()} className={`items ${isThree? 'error' :''}`}><p>??????</p></div>
            <div onClick={()=> handleError3()} className={`items ${isFour? 'error' :''} `}><p>??????</p></div>
           
          </div>

          <div className="line2 lines">
          <div onClick={()=> setFive(true) }  className={`items ${isFive? 'yes' :''} `}   ><p>??????</p></div>
          <div onClick={()=> handleError4()}  className={`items ${isSix? 'error' :''} `}  ><p>??????</p></div>
          <div onClick={()=> handleError5()}  className={`items ${isSeven? 'error' :''} `}><p>??????</p></div>
          <div onClick={()=> handleError6()}  className={`items ${isHeight? 'error' :''}`}><p>??????</p></div>
        
          </div>

          <div className="line3 lines">
          <div onClick={()=> setNine(true) }  className={`items ${isNine? 'yes' :''} `}><p>??????</p></div>
          <div onClick={()=> setTen(true) }  className={`items ${isTen? 'yes' :''} `} ><p>??????</p></div>
          <div onClick={()=> handleError7()}  className={`items ${isEleven? 'error' :''} `}><p>??????</p></div>
          <div onClick={()=> handleError8()}  className={`items ${isTwelve? 'error' :''} `}><p>??????</p></div>
        
     
          </div>

          <div className="line4 lines">
          <div onClick={()=> handleError9()}  className={`items ${isThirteen? 'error' :''} `}><p>??????</p></div>
          <div onClick={()=> setFourteen(true) }  className={`items ${isFourteen? 'yes' :''} `}><p>??????</p></div>
          <div onClick={()=> setFiveteen(true) }  className={`items ${isFiveteen? 'yes' :''} `}><p>??????</p></div>
          <div className="items init"><p>B</p></div>

          </div>
  
         
 <p> <TypeWriter text={text2} /> </p>
 <p>{tryLeft} try left </p>
        </div>

        <div className='card-footer'>
          <div className={isFiveteen && isFourteen && isTen && isFive &&isNine && isFive ? '':'invisible'}>

          
          <button onClick={()=> window.location = '/chap2'}>
          <img src={open} alt="op" />
          </button>
        </div>
</div>

   </div>
</Draggable3>

    </div>
  )
}

export default Chapter1