import React, {useState} from 'react';

import './App.css';

import Header from './Components/Header';
import Inspiration from './Components/Inspiration';

import NavBar from './Components/NavBar';
import Plan from './Components/Plan';
import Works from './Components/Works';




function App() {
  const [toggle, setToggle] = useState<boolean>(true)


    const toggleMenu = () =>{
        setToggle(prevMenu => !prevMenu)
    }
 
  return (
    <div className="App">
       <NavBar toggle={toggle} setToggle={setToggle} toggleMenu={toggleMenu} />
       <Header />
       <Works />
      {/* {/*
    {
    toggle?
    <div className='none '>
 
  
    </div> :'' 
    } */}
    {/* <Inspiration /> */}
    {/* <Plan /> */}
    </div>
  );
}

export default App;
