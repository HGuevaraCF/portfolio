// import './App.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// // import {
// //   Route,
// //   Routes,
// //   BrowserRouter,
// //   Router
// // } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import AboutMe from './components/about';
// import Portfolio from './components/portfolio';
// import Contact from './components/contact';
// import Resume from './components/resume';
// import Footer from './components/footer';
// import Header from './components/footer';
// // import { AboutMe, Portfolio, Contact, Resume, Footer } from './components'


// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Router>
//       {/* <Navbar className='navbar' expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">Hector Guevara</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="/portfolio">About Me</Nav.Link>
//               <Nav.Link href="/portfolio/work">Portfolio</Nav.Link>
//               <Nav.Link href="/portfolio/contact">Contact</Nav.Link>
//               <Nav.Link href="/portfolio/resume">Resume</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar> */}
//       <div className='content'>
//         <Routes>
//           <Route path="/portfolio" element={<AboutMe/>} />
//           <Route path="/portfolio/work" element={<Portfolio/>} />
//           <Route path="/portfolio/contact" element={<Contact/>} />
//           <Route path="/portfolio/resume" element={<Resume/>} />
//         </Routes>
//       </div>
//       </Router>
//       <Footer/>
//     </div>
//   );
// }

// export default App;


import { Route, Switch, Redirect } from 'react-router-dom'
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
// import Resume from "./pages/Resume";
// import Header from './components/Header';
import AboutMe from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import Header from './components/footer';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route
          // Used to default / to the homepage
          exact path="/portfolio/"
          render={() => {
            return (
              <Redirect to="/Tec20ReactPortfolio/home" />
            )
          }}
        />
        <Route path="/portfolio/" component={AboutMe} />
        <Route path="/portfolio/work" component={Portfolio} />
        <Route path="/portfolio/contact" component={Contact} />
        <Route path="/portfolio/resume" component={Resume} />
      </Switch >
      <Footer />
    </div >
  )
}

export default App;