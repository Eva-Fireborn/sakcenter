import React from 'react';
//import Logo from '../../img/SC-logo.png';
import LogoWhite from '../../img/SC-logo-white.png';
import './header.scss';

const Header = ({ Link }) => {
    return (
        <div className="headerBar">
            <nav>
                <ul className="menuBar">
                    <li>
                        <Link to="/Om">Om Sakcenter</Link>
                    </li>
                    <li>
                        <Link to="/Uthyrning">Att hyra av oss</Link>
                    </li>
                    <li>
                        <Link to="/Sortiment">Sortiment</Link>
                    </li>
                    <li className="logo">
                        <Link to="/"><img src={LogoWhite} alt="SC" /></Link>
                    </li>
                    <li>
                        <Link to="/Workshop">Workshops och föreläsningar</Link>
                    </li>
                    <li>
                        <Link to="/Kontakt">Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;