import { ReactComponent as Logo } from "../images/hacker.svg";
import '../Body.css';
import "../index.css";
function Body(){
   return (
    <div className="content-head">
        <div className="content-logo">
            <Logo />
        </div>
        <div className="header">
           <h4 className="head"> HTML, CSS, JS </h4>
           <h1 className="head2">Entry-Level IT Security Specialist</h1>
            <p className="body">
            Hello and welcome to my portfolio. I am an Entry-Level IT Security Specialist, and my purpose
            for building this site was to have a central store for some of my projects.<br/><br/>

            Since I was young, I've always been captivated by the ability to protect and secure systems from the comfort of a computer.
            I am familiar with various cybersecurity tools and concepts, and I continuously work to enhance my knowledge in this ever-evolving field.
            Although I can't claim to understand all the complexities within cybersecurity,
            I have a solid grasp of the fundamentals and how they apply to real-world scenarios.<br/><br/>

            Through my learning journey, I've developed a strong passion for securing systems and overcoming the challenges that arise in the process.
            The thrill of identifying vulnerabilities and safeguarding data is what keeps me pushing forward,
            always striving to grow in my understanding and application of cybersecurity principles.
            </p>

            <h2 className="discover">DISCOVER!</h2>
            <span className="footer">Copyright 2023, Imran Haroun</span>
        </div>
   </div>
   )
};
export default Body;