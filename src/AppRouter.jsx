import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Information from "./components/information/Information";
import Gallery from "./components/gallery/Gallery";
import Workshops from "./components/workshops/Workshops";



const AppRouter = () => {
    return(
        <div className="wrapper">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Hem</Link>
                            </li>
                            <li>
                                <Link to="/Om">Om Sakcenter</Link>
                            </li>
                            <li>
                                <Link to="/Uthyrning">Att hyra av oss</Link>
                            </li>
                            <li>
                                <Link to="/Galleri">Galleri</Link>
                            </li>
                            <li>
                                <Link to="/Workshop">Workshops och föreläsningar</Link>
                            </li>
                            <li>
                                <Link to="/Kontakt">Kontakt</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Home} />
                    <Route path="/Om" exact component={About} />
                    <Route path="/Uthyrning" exact component={Information} />
                    <Route path="/Galleri" exact component={Gallery} />
                    <Route path="/Workshop" exact component={Workshops} />
                    <Route path="/Kontakt" exact component={Contact} />
                </div>
            </Router>
        </div>
    )
}
export default AppRouter;