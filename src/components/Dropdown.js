import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../Dropdown.css';
import '../index.css'

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selecteditem, setSelectedItem] = useState(null)

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleSelect = (item) => {
        setSelectedItem(item);
        setIsOpen(false)
  }


  return (
    <div className="dropdown-container">
      <button onClick={isOpen ? closeDropdown : openDropdown} className='toggle' >
        {isOpen ? "Close" : "Menu"}
      </button>
      {isOpen && (
        <nav className='navigate'>
            <ul >
              <li className="about">
                <Link to="/about" onClick={() => handleSelect("About")}>About</Link>
              </li>
              <li className="contact">
                <Link to="/contact" onClick={() => handleSelect("Contact")}>Contact</Link>
              </li>
              <li className="projects">
                <Link to="/projects" onClick={() => handleSelect("Projects")}>Projects</Link>
              </li>
            </ul>
        </nav>
      )}
    </div>
  );
}

export default Dropdown;
