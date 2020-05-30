import React from 'react';
import  NavBar  from '../NavBar/NavBar';
import Cards from './Cards';
import Footer from '../Footer/Footer';


export const Projects = () => {
    return (
        <div>
            <NavBar />
            <h1 className="text-center p-3 m-auto">Projects</h1>
            <Cards />
            <Footer />
        </div>
    )
}
