import React from 'react';
import Logo from '../../img/SC-logo.png';
//import LogoWhite from '../../img/SC-logo-white.png';
import './header.scss';

const Header = ({ Link, NavLink }) => {
    return (
        <div className="headerBar">
            <nav>
                <ul className="menuBar">
                    <li>
                        <NavLink to="/Om">Om oss</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Uthyrning">Uthyrning</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Sortiment">Sortiment</NavLink>
                    </li>
                    <li className="logo">
                        <Link to="/"><img src={Logo} alt="Sakcenter logotyp" /></Link>
                    </li>
                    <li>
                        <NavLink to="/Workshop">Workshops och föreläsningar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Kontakt">Kontakt</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;