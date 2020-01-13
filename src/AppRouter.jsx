import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Information from "./components/information/Information";
import Gallery from "./components/gallery/Gallery";
import Workshops from "./components/workshops/Workshops";
import bgImg from "./img/bgWallpaper.jpg";



const AppRouter = () => {
    return(
        <div className="wrapper">
            <div className="backgroundImage">
                <img src={bgImg} alt="background" />
            </div>
            <Router>
                <Header Link={Link} />

                <div className="content">
                    <Route path="/" exact component={Home} />
                    <Route path="/Om" exact component={About} />
                    <Route path="/Uthyrning" exact component={Information} />
                    <Route path="/Sortiment" exact component={Gallery} />
                    <Route path="/Workshop" exact component={Workshops} />
                    <Route path="/Kontakt" exact component={Contact} />
                </div>
            </Router>
            <Footer />
        </div>
    )
}
export default AppRouter;