import { ReactComponent as Logo } from "../images/hacker.svg";
import '../Contact.css';
import "../index.css";
function Contact(){
    return (
        <div className="contact-header">
            <div className="contact-logo">
                <Logo  />
            </div>
            <div className="contact-content">
                <h3 className="contact-head">Contact</h3>
                <h5 className="contact-email">E-mail</h5>
                <a href="mailto:harounimran04@gmail.com" className="contact-link">harounimran04@gmail.com</a>
                <span className="contact-name">Copyright 2023. Imran Haroun</span>
            </div>
        </div>
    )
};

export default Contact;