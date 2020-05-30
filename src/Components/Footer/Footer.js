import React from 'react';
import './Footer.css';


export default function Footer() {
    return (
        <React.Fragment>
            <footer className="text-center"> 
                <ul className="footer">
                    <li>Location</li>
                    <li>3812 Coconut Palm Dr.
                            Suite 100
                            Tampa, FL 33619
                    </li>
                    <li>Phone</li>
                    <li>813-621-3250</li>     
                    <li>Fax</li> 
                    <li>813-621-3331</li>
                </ul>
            </footer>
        </React.Fragment>
    )
}
