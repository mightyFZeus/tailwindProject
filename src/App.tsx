import {useState} from 'react';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
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
     
    </div>
  );
}

export default App;
