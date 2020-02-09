import React, {useState} from 'react';
import AdminAboutPage from './AdminPages/AdminAboutPage';
import AdminWorkshopPage from './AdminPages/AdminWorkshopPage';
import AdminInformationPage from './AdminPages/AdminInformationPage';
import AdminGalleryPage from './AdminPages/AdminGalleryPage';
import AdminNewsPage from './AdminPages/AdminNewsPage';
import Hash from 'object-hash';
import API from '../../helperFunctions/ApiCalls';
import Button from '../reusables/CallToActionButton';

import './mainAdmin.scss';

const MainAdmin= () => {
    const [index, setIndex] = useState(0);
    const [loggedIn, setLoggedIn] = useState(false);
    const [inputValue, updateInputValue] = useState('');
    const [wrongPassword, setWrongPassword] = useState(null);

    const updateField = (e) => {
        updateInputValue(e.target.value);
    };

    const sendPassword = () => {
        const password = Hash(inputValue);
        API.login(password, res => {
            if (res.data.body) {
                setLoggedIn(true);
                updateInputValue('');
            } else {
                setWrongPassword('Fel lösenord!')
                updateInputValue('');
            }
        });
    }

    const logout = () => {
        setLoggedIn(false);
    }

    /*const keydown = (e) => {
        console.log('inputvalue: ', inputValue);
        if(e.key === "Enter") {
            setTimeout(sendPassword, 3000);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', keydown);
        return () => window.addEventListener('keydown', keydown);
    }, []);*/

    return(
        <div className="mainAdminWrapper">
        {loggedIn ? (
            <>
            <div className="adminHeaderWrapper">
                <h1>Admin</h1>
                <button onClick={logout}>Logga ut</button>
            </div>
            <ul>
                <li><button onClick={() => setIndex(0)}>Redigera "Om oss"</button></li>
                <li><button onClick={() => setIndex(1)}>Redigera "Workshops och föreläsningar"</button></li>
                <li><button onClick={() => setIndex(2)}>Redigera "Uthyrning"</button></li>
                <li><button onClick={() => setIndex(3)}>Redigera "Sortiment"</button></li>
                <li><button onClick={() => setIndex(4)}>Redigera "Viktig nyhet"</button></li>
            </ul>
            {index === 0 ? (<AdminAboutPage />) : (null)}
            {index === 1 ? (<AdminWorkshopPage />) : (null)}
            {index === 2 ? (<AdminInformationPage />) : (null)}
            {index === 3 ? (<AdminGalleryPage />) : (null)}
            {index === 4 ? (<AdminNewsPage />) : (null)}
            </>
        ) : (
            <div className="logInWindow">
                <p>Lösenord:</p>
                <input type="password" value={inputValue} onChange={(e) => updateField(e)}/>
                <Button buttonText="Logga in" onClick={sendPassword} />
                {wrongPassword && (<p>{wrongPassword}</p>)}
            </div>
        )}
        
        
        </div>
    );
};
export default MainAdmin;