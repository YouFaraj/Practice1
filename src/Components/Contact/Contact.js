import React from 'react';
import  NavBar  from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ContactCard from '../Contact/ContactCard';

export const Contact = () => {
    return (
        <div>
             <NavBar />
             <div className="row">
                <ContactCard 
                    src="http://srdeng.com/images/RNeil.png"
                    alt="Card image cap"   
                    name="Robert Neil. P.E."
                    title="President"
                    text="Engineer of Record for 25+ years and over 50 projects throughout Florida"
                    email="Rneil@srdeng.com"
                      />
                <ContactCard 
                    src="http://srdeng.com/images/sjumber.png"
                    alt="Card image cap"   
                    name="Samuel Jumber. P.E."
                    title="Project Manager"
                    email="Sjumber@srdeng.com"
                      />
                <ContactCard 
                    src="http://srdeng.com/images/phatton.png"
                    alt="Card image cap"   
                    name="Patrick Hatton. P.E."
                    title="Project Manager"
                    email="Phatton@srdeng.com"
                      />
             </div>
             <Footer />
        </div>
    )
}
