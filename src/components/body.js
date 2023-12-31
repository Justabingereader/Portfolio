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
            <p className="body">
            Hello and welcome to my portfolio. I am a front-end web developer, and my purpose
            for building this site was to have a central store for some of my projects.<br/><br/>

            Since I was young, I've always been captivated by the skill to make incredible things
            from the comfort of a computer. I am currently learning React.js, and that is the library
            that was used in building this very site. Although I can't claim that I understand all the
            intricacies of the library, I can claim to have a basic understanding of how it functions.
            While going through my learning process, I have acquired a passion for building sites and
            pushing through the challenges they may present.
            </p>

            <h2 className="discover">DISCOVER!</h2>
            <span className="footer">Copyright 2023, Imran Haroun</span>
        </div>
   </div>
   )
};
export default Body;