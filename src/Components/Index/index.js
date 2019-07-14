import React from 'react';
import Home from './../Home/index';
import Work from './../Work/index';
import Portfolio from './../Portfolio/index';
import Profile from './../Profile/index';
import About from './../About/index';
import SocailMedia from './../SocailMedia/index';
import Footer from './../Footer/index';
import Connect from './../Connect/index';

const Index = () =>{

    return(
        <div>
            <Home />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <SocailMedia />
            <Connect />
            <Footer />
        </div>
    )
}

export default Index;