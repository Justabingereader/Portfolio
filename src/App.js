import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Body from './components/body';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import './App.css';
import "./index.css";
import './toggle.css';
import DarkMode from "./components/DarkMode";


function App() {


 
    return (
      <BrowserRouter> 
        <div className="route-header">
          <nav className="nav-head" style={{position: "fixed"}}>
            <ul className="link-header" >
            <div className="saver">
            <DarkMode />
            </div>
              <li className="link-name">
                <Link to="/">Imran Haroun</Link> 
              </li>
              <div className="dropdown">
               <Dropdown  />
              </div>
              <li className="link-about">
                <Link to="/about" >About</Link>
              </li>
              <li className="link-contact">
                <Link to="/contact" >Contact</Link>
              </li>
              <li className="link-projects">
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
            
          </nav>
         
        <Routes>
          <Route path="/" end element={<Body/>} /> 
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default App;