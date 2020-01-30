import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Information from "./components/information/Information";
import Gallery from "./components/gallery/Gallery";
import Workshops from "./components/workshops/Workshops";
import MainAdmin from "././components/mainAdmin/MainAdmin";



const AppRouter = () => {
    return(
        <div className="mainContainer">
            <Router>
                <Header Link={Link} NavLink={NavLink} />

                <main className="content">
                    <Route path="/" exact component={Home} />
                    <Route path="/Om" exact component={About} />
                    <Route path="/Uthyrning" exact component={Information} />
                    <Route path="/Sortiment" exact component={Gallery} />
                    <Route path="/Workshop" exact component={Workshops} />
                    <Route path="/Kontakt" exact component={Contact} />
                    <Route path="/Admin" exact component={MainAdmin} />
                </main>
            </Router>
            <Footer />
        </div>
    )
}
export default AppRouter;