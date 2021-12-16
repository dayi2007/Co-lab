import './Classes.css';
import create  from '../assets/messagesAdd.png';
import { Link } from 'react-router-dom';

// Intro to Philosophy 
// Biology I 
// Chemistry 
// American History 
// Spanish 101
// Composition II 
// Anatomy

// Business 392 - Business in Emerging Markets
// Decision Sciences 412 - Business Forecasting
// Intro to Business 

export default function Subjects (){

    return(
        <div className="circlesTop">
            <div className="colors" id="colorBlue"><div className="divStyle">Intro to Philosophy</div></div>
            <div className="colors" id="colorRed"><div className="divStyle">Intro to Business</div></div>
            <div className="colors" id="colorPurple"><div className="divStyle">Business 392</div></div>
            <div className="colors" id="colorTeal"><div className="divStyle">Decision Sciences 412</div></div>
            <div className="colors" id="colorGreen"><div className="divStyle">Anatomy</div></div>
            <div className="colors" id="colorPink"><div className="divStyle">Chemistry</div></div>
            <div className="colors" id="colorOrange"><div className="divStyle">American History</div></div>
            <div className="colors" id="color"><div className="divStyle"><Link to ='/create'><button><img src={create} alt="create"/></button></Link> </div></div>
        </div>
    )
}