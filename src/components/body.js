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
           <h1 className="head2">Front End developer</h1>
            <p className="body">Hello, Welcome to my Portfolio.
                I am a front end web developer and my 
                purpose for building this site was to 
                have a central store for some of my projects,
                Since i was young, i've always been captivated by 
                the skill to make incredible things from the comfort of a computer.
                I am currently learning Reactjs and that is the
                framework that was used in building this very site, although i can't 
                claim that i understand all the intricacies of the framework, i can claim to have a 
                basic understanding of how it functions and while going through my learning process, i have
                acquired a passion for building sites and pushing through the challenges they may present.
            </p>

            <h2 className="discover">DISCOVER!</h2>
            <span className="footer">Copyright 2023, Imran Haroun</span>
        </div>
   </div>
   )
};
export default Body;