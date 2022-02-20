import './App.css';
import Navbar from './components/Navbar';
import Upcase from './components/Upcase';
import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default function App() {
  const [mode, setMode] =  useState('light');
  const [Text, setText] = useState("Enable Dark Mode");
  const[Alert1, setAlert]= useState(null);
  const showAlert= (Message, type)=>{
    setAlert({
      msg:Message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const passMode=()=>{
if(mode ==="light")
{
  setMode("dark");
  document.body.style.backgroundColor = 'grey'
  setText("Enable Light Mode");
  showAlert("Dark Mode is Enable","success");
  document.title="Rk Avenue - Dark Mode On";
      setInterval(() => {
        document.title="Rk Avenue - Home";
      }, 1500);
}
else{
  setMode("light")
  document.body.style.backgroundColor = 'white'
  setText("Enable Dark Mode");
  showAlert("Light Mode Is Enable","success");
  document.title="Rk Avenue - Light Mode On";
      setInterval(() => {
        document.title="Rk Avenue - Home";
      }, 1500);
}

  }
 
  return (
    <>
   <Router>
     <Navbar  title="Rk Avenue"  mode={mode} abouttext="About us" enableMode= {passMode} Text={Text}/>
   <Alert alert={Alert1}/>
   <Upcase mode={mode} showAlert={showAlert}/>
<Routes>
<Route path="/"  element={<Upcase mode={mode} showAlert={showAlert}/>}/>
  <Route path="/upcase"  element={<Upcase mode={mode} showAlert={showAlert} />}/>
       <Route path="/About" element={<About />}/>
  
</Routes>
</Router>


    </>
  );
}
