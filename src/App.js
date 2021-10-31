
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Txtform from './components/Txtform';
import React, { useState } from 'react'

function App() {
  const [switchstyle , setvmode] = useState('light')
  const modeselect = () => {
          if(switchstyle === 'light')
          {
            setvmode('dark');
            document.body.style.backgroundColor= '#360989' ;
            document.body.style.color= 'white' ;
          }
          else{
            setvmode('light');
            document.body.style.backgroundColor= 'white' ;
            document.body.style.color= 'black' ;
          }
  }
  return (
    < >
        <Navbar title="Text Editor" style={switchstyle} modeselect={modeselect} />
          {/* <div className=" my-3">
            <About />
            </div>          */}
          <div className=" my-3">
               <Txtform tsst="Enter Yout Text To Analyze" style={switchstyle}/>
                    </div>            
  </ >
  );
}

export default App;