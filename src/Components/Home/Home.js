import React from 'react'
import NavBar  from '../NavBar/NavBar';
import Slides from '../Slides/Slides';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

export const Home = () => {
    return (
    <React.Fragment>
     <NavBar />
     <Slides />
     <Services />
     <Footer />
    </React.Fragment>
    )
}
