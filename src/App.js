import {useState} from 'react';
import './App.css';
import Alert from './Componenets/Alert';
import About from './Componenets/About';
import Navbar from './Componenets/Navbar';
import TextForm from './Componenets/TextForm';
import { BrowserRouter as Router,Routes, Route,} from "react-router-dom";
function App() {
  const[ mode,  setmode]=useState('light');
  const[ alert,  setalert]=useState(null);
  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }
  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Light mode is enabled","success");
      document.title='Textutil-light mode';
      // setInterval(() => {
      //   document.title='Textutil is amazing mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title='download Textutils `';
      // }, 1500);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showAlert("Dark mode is enabled","success");
      document.title='Textutil-dark mode';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes> 
        <Route exact path="/about" element={<About/>}/>
      </Routes> 
        <TextForm  showAlert ={showAlert} heading="Enter text to utilize" mode={mode}/>
    </div>
     </Router>
    </>
  );
}

export default App;
