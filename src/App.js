import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import Header from './components/header';

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
