import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/pages/Home"

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<Home/>}></Route>
        <Route path="/projects" element={<Home/>}></Route>
        <Route path="/contact" element={<Home/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
