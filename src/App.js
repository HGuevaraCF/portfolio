import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {
//   Route,
//   Routes,
//   BrowserRouter,
//   Router
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AboutMe from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import Header from './components/header';
// import { AboutMe, Portfolio, Contact, Resume, Footer } from './components'


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <div className='content'>
        <Routes>
          <Route path="/portfolio" element={<AboutMe/>} />
          <Route path="/portfolio/work" element={<Portfolio/>} />
          <Route path="/portfolio/contact" element={<Contact/>} />
          <Route path="/portfolio/resume" element={<Resume/>} />
        </Routes>
      </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
