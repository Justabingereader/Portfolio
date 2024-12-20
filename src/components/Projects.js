import Calc from "../images/calculator.png";
import Tip from '../images/tipCalculator.png';
import Key from '../images/key.png';
import Fusion from '../images/fusion.png';
import pass from '../images/password.png';
import FED from '../images/FED.jpeg';
import hider from '../images/hider.jpg';
import PM from '../images/PM.png';
import PyKey from '../images/PyLogger.jpg';
import weather from '../images/weather.png'

import '../Projects.css';
import "../index.css";
function Projects(){
    
    return (
        <div className="project-header">
            <div className="project-content">
                <h1 className="project-head">Projects</h1>
                <p className="project-body">Below are some of the various sites
                    i've worked on and deployed, of course this 
                    is not everything but these few i believe have had
                    more impact on me while i was building them than the rest.
                </p>
            </div>
            <div className="project-display">
            <div className="calculator">
            <h5 >Calculator App</h5>
            <img src={Calc} alt="calculator App"  className="img"/>
            <p className="project-body">This calculator app returns the sum of the different
            operations on two or more numbers inputted by a user.
            </p>
            <a href="https://justacalculatorapp.netlify.app/" className="live" target="_blank" rel="noreferrer">Live Site</a>
            <a href="https://github.com/Justabingereader/The-Calculator-App" className="repo" target="_blank" rel="noreferrer">Code Repo</a>
            </div>
            <div className="tipcalculator">
                <h5 >Tip Calculator </h5>
               <img src={Tip} alt="Tip Calculator" className="img"/>
                <p className="project-body">This tip calculator App gets the number of persons,
                tip percentage and total bill and returns the amount to tip.
                </p>
                <a href="https://thetipcalculatorapp.netlify.app/" className="live" target="_blank" rel="noreferrer">Live Site</a>
                <a href="https://github.com/Justabingereader/The-tipCalculator-App" className="repo" target="_blank" rel="noreferrer">Code Repo</a>
            </div>
            <div className="dom">
                <h5 >Encryption App</h5>
            <img src={Key} alt="Dom pic" className="img"/>
            <p className="project-body">A Graphical-user Interface(GUI) Application that encrypts and decrypts messages with a secret password.
            </p>
            <a href="" className="live" target="_blank" rel="noreferrer">None</a>
            <a href="https://github.com/Justabingereader/EnD" className="repo" target="_blank" rel="noreferrer">Code Repo</a>
            </div>
            <div className="fusion">
                <h5 >Fusion Landing Page</h5>
            <img src={Fusion} alt="Fusion landing pic" className="img"/>
            <p className="project-body">Fusion landing page is a landing page for the website 
            of a fictional tech firm. It is a recreation of a Frontend Mentors task. 
            it displays the information of different individuals in the firm. 
            </p>
            <a href="https://fusion-landing-page.netlify.app/" className="live" target="_blank" rel="noreferrer">Live Site</a>
            <a href="https://github.com/Justabingereader/Fusion-landing-page" className="repo" target="_blank" rel="noreferrer">Code Repo</a>
            </div>
            <div className="drum">
                <h5 >Password-Checker App</h5>
            <img src={pass} alt="Robo-friends pic" className="img"/>
            <p className="project-body">A Command-Line Interface(CLI) Application that checks for the strength of a password
            and gives a remark on the password entered based on the number of conditions the password satisfies.
            </p>
            <a href="" className="live" target="_blank" rel="noreferrer">None</a>
            <a href="https://github.com/Justabingereader/passwordchecker" className="repo" target="_blank" rel="noreferrer">Code Repo</a>
            </div>
            <div className="drum">
                <h5 >CyberSteg App</h5>
            <img src={hider} alt="star wars pic" className="img"/>
            <p className="project-body">In a world where confidentiality is crucial for both individuals and organizations,
                protecting data from unauthorized access becomes equally essential.
                This project addresses that need by hiding sensitive information in plain sight using images.
            </p>
            <a href="" className="live" target="_blank" rel="noreferrer">None</a>
            <a href="https://github.com/Justabingereader/DataHider" className="repo" target="_blank" rel="noreferrer">Code Repo</a>
            </div>
            <div className="drum">
                <h5>FED</h5>
            <img src={FED} alt="star wars pic" className="img"/>
            <p className="project-body">This is a standalone Python Script
                that makes use of symmetric encryption to encrypt and decrypt files,
                This script aims to make the transfer of files over the internet much more secure.
            </p>
            <a href="" className="live" target="_blank" rel="noreferrer">None</a>
            <a href="https://github.com/Justabingereader/FED" className="repo" target="_blank" rel="noreferrer">Code Repo</a>
            </div>
            <div className="drum">
                <h5>PM</h5>
            <img src={PM} alt="star wars pic" className="img"/>
            <p className="project-body">The Password Manager CLI is a command-line application designed to provide
                a safe and secure way to store passwords. Utilizing Python and MySQL,
                this application serves as a central repository for passwords that individuals
                or organizations wish to protect from unauthorized access.
            </p>
            <a href="" className="live" target="_blank" rel="noreferrer">None</a>
            <a href="https://github.com/Justabingereader/PM" className="repo" target="_blank" rel="noreferrer">Code Repo</a>
            </div>
            <div className="drum">
                <h5>PyLogger</h5>
            <img src={PyKey} alt="star wars pic" className="img"/>
            <p className="project-body">PyLogger is an offline keylogger written in Python
                that captures clipboard data, takes screenshots, and logs keystrokes.
                This program is designed to help organizations monitor how their employees
                enter data on company systems, serving as a backup for data and a means of
                enhancing security practices.
            </p>
            <a href="" className="live" target="_blank" rel="noreferrer">None</a>
            <a href="https://github.com/Justabingereader/PyLogger" className="repo" target="_blank" rel="noreferrer">Code Repo</a>
            </div>
            <div className="drum">
                <h5>PY Weather</h5>
            <img src={weather} alt="star wars pic" className="img"/>
            <p className="project-body">A PyQt5-based desktop application that provides weather information
                for any city using the OpenWeatherMap API. This app displays the temperature,
                weather condition, and a corresponding emoji to visually represent the weather, It can be accessed
                through GitHub by downloading the repository, navigating to the dist directory and running the main.exe file.
            </p>
            <a href="" className="live" target="_blank" rel="noreferrer">None</a>
            <a href="https://github.com/Justabingereader/Weather-App" className="repo" target="_blank" rel="noreferrer">Code Repo</a>
            </div>
        </div>
        </div>
    )
};

export default Projects;