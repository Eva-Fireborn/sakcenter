import React, {useState, useEffect} from 'react';
import Logo from '../../img/SC-logo.png';
import ImportantNews from '../importantNews/ImportantNews';
import API from '../../helperFunctions/ApiCalls';
import {ReactComponent as CloseCross} from '../../img/closeCross.svg';
import {useGlobalState} from '../../helperFunctions/GlobalState';
import clsx from 'clsx';
import moment from 'moment';
import './header.scss';


const Header = ({ Link, NavLink }) => {
    const [activeMenu, setMenu] = useState(false);
    const [message, setMessage] = useGlobalState('importantNews');

    useEffect(()=> {
        if (message === null) {
            API.getImportantNews(res => {
                if(res && res.length) {
                    res.forEach(content => {
                        if (moment().format(content.endDate) > moment().format()) {
                            setMessage(content.message);
                        } else {
                            API.deleteImportantNews(content.id, res => {});
                        }
                    })
                }
            });
        }
    }, []);

    const displayMenu = (value = false) => {
        setMenu(!value);
    }

    return (
        <header className="headerBar">
            <nav>
                <div className={clsx('mobileMenuButton', activeMenu && '-grey')}>
                    {activeMenu ? (
                        <CloseCross onClick={displayMenu} type="button" />
                    ) : (
                        <img src={Logo} alt="Sakcenter logotyp" type="button" onClick={() => displayMenu(activeMenu)}/>
                    )}
                </div>
                <ul className={clsx('menuBar', activeMenu ? '-visible' : '-hidden')}>
                    <li>
                        <NavLink to="/Om" onClick={displayMenu}>Om oss</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Uthyrning" onClick={displayMenu}>Uthyrning</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Sortiment" onClick={displayMenu}>Sortiment</NavLink>
                    </li>
                    <li className="logo">
                        <Link to="/"><img src={Logo} alt="Sakcenter logotyp" /></Link>
                    </li>
                    <li>
                        <NavLink to="/Workshop" onClick={displayMenu}>Workshops och föreläsningar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Kontakt" onClick={displayMenu}>Kontakt</NavLink>
                    </li>
                </ul>
            </nav>
            {message && (<ImportantNews news={message} />)}
        </header>
    )
}
export default Header;