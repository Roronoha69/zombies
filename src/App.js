import { useState, useEffect, ImageBackground } from 'react';
import {TypeWriter, Chapter1, Chapter2, Home} from './components/index';


import {Route, Routes, BrowserRouter } from "react-router-dom";

// assets

import './App.scss';


function App() {


  return (
    <div className="App">



   <BrowserRouter>
     <Routes> 
     <Route path="/" element={<Home />}/> 
     <Route path="/chap1" element={<Chapter1 />}/>  
     <Route path="/chap2" element={<Chapter2 />}/>   
     </Routes>
  </BrowserRouter>

      
    
    </div>
  );
}

export default App;
