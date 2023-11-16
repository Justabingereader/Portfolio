import Calc from "../images/calculator.png";
import Tip from '../images/tipCalculator.png';
import Dom from '../images/domino.png';
import Fusion from '../images/fusion.png';
import Drum from '../images/drumkit.png';
import star from '../images/star-wars.png'
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
                <h5 >Domino's Pizza App</h5>
            <img src={Dom} alt="Dom pic" className="img"/>
            <p className="project-body">This is a react app modelling a domino's pizza site,
            it includes a search feature to enable you to get a particular choice by just searching
            for it, it's also very design friendly and is accessible to multiple devices and screens.
            </p>
            <a href="https://justabinger-dominos.vercel.app/" className="live" target="_blank" rel="noreferrer">Live Site</a>
            <a href="https://github.com/Justabingereader/domino" className="repo" target="_blank" rel="noreferrer">Code Repo</a>
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
                <h5 >Robo-friends App</h5>
            <img src={Drum} alt="Drumkit pic" className="img"/>
            <p className="project-body">This is a react app that shows an 
            image of a robot, the name of the robot, and the email. it has
            a search feature that checks for a particular robot through the name
            of the robot, it is also adaptable across many devices.
            </p>
            <a href="https://robo-friends-hazel.vercel.app/" className="live" target="_blank" rel="noreferrer">Live Site</a>
            <a href="https://github.com/Justabingereader/robo-friends" className="repo" target="_blank" rel="noreferrer">Code Repo</a>
            </div>
            <div className="drum">
                <h5 >Star Wars App</h5>
            <img src={star} alt="star wars pic" className="img"/>
            <p className="project-body">This is a react app that involves fetching data
            from an api and then displaying it, it includes the use of the react router dom
            tool, importing of axios, dropdown and involves navigation between different links,
            it describes different elements in the star wars universe with proper detailing
            </p>
            <a href="https://star-wars-mocha.vercel.app/" className="live" target="_blank" rel="noreferrer">Live Site</a>
            <a href="https://github.com/Justabingereader/star-wars" className="repo" target="_blank" rel="noreferrer">Code Repo</a>
            </div>
        </div>
        </div>
    )
};

export default Projects;