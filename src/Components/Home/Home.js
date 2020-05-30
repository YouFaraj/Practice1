import React from 'react'
import NavBar  from '../NavBar/NavBar';
import Slides from '../Slides/Slides';
import Footer from '../Footer/Footer';

export const Home = () => {
    return (
    <React.Fragment>
     <NavBar />
     <Slides />
     <Footer />
    </React.Fragment>
    )
}
