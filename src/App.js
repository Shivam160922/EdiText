import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
      setmode("dark");
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="EdiText" abouttext="About Us" mode={mode} togglemode={togglemode} />
        <Alert alert="This is an Alert!!" />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter your text" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
