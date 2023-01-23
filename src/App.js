import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/pages/Home"
import AboutPage from "./components/pages/AboutPage"
import Projects from "./components/pages/Projects"
import Contact from "./components/pages/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
