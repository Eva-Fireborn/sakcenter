import React, {useState} from 'react';
import AdminAboutPage from './AdminPages/AdminAboutPage';
import AdminWorkshopPage from './AdminPages/AdminWorkshopPage';
import AdminInformationPage from './AdminPages/AdminInformationPage';
import AdminGalleryPage from './AdminPages/AdminGalleryPage';

import './mainAdmin.scss';

const MainAdmin= () => {
    const [index, setIndex] = useState(0);

    return(
        <div className="mainAdminWrapper">
            <div className="adminHeaderWrapper">
                <h1>Admin</h1>
                <button>Logga ut</button>
            </div>
            <ul>
                <li><button onClick={() => setIndex(0)}>Redigera "Om oss"</button></li>
                <li><button onClick={() => setIndex(1)}>Redigera "Workshops och föreläsningar"</button></li>
                <li><button onClick={() => setIndex(2)}>Redigera "Uthyrning"</button></li>
                <li><button onClick={() => setIndex(3)}>Redigera "Sortiment"</button></li>
            </ul>
            {index === 0 && <AdminAboutPage />}
            {index === 1 && <AdminWorkshopPage />}
            {index === 2 && <AdminInformationPage />}
            {index === 3 && <AdminGalleryPage />}
            
        </div>
    );
};
export default MainAdmin;