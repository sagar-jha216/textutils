//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'; // Add useState here
import Alert from './components/Alert';

function App() {

  const[mode , setMode]=useState('light'); //wheather dark mode is enabled or not

  const[alert , setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark'); // Call setMode with the new state
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode is Enabled" , "success");
    } else {
      setMode('light'); // Call setMode with the new state
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is Enabled" , "success");

    }
  }

  return(
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert}/>

      <div className="container">
        <TextForm heading="Enter text to analyze it " mode={mode} showAlert={showAlert}/>
        <About/>
      </div>

    </>
  );
}
export default App;
