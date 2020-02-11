import React, { useEffect, useState } from 'react';
import { useGlobalState } from '../../helperFunctions/GlobalState';
import API from '../../helperFunctions/ApiCalls';
import largeHeader from '../../img/tygbild-grönt-med-blommor-1920px.jpg';
import mediumHeader from '../../img/tygbild-grönt-med-blommor-780px.jpg';
import smallHeader from '../../img/tygbild-grönt-med-blommor-380px.jpg';
import './workshops.scss';

const Workshops= () => {
    const [content, setContent] = useGlobalState('contentWorkshopPage');
    const [informationToUser, setInformationToUser] = useState('Denna sida drivs av 1000 hamstrar som springer för fullt för att hämta informationen till dig.');

    useEffect(()=> {
        if (!content) {
            API.getWorkshopPage(result => {
                if (result === 'error') {
                    setInformationToUser('Något har gått fel, prova att ladda om sidan.');
                } else if (result && result.length) {
                    result.forEach(content => {
                        if (content.type === 'pageContent') {
                            setContent(content.content);
                        }
                    });
                }
            });
        }
    }, []);

    const createMarkup = () => {
        return {__html: content}
    }
    return (
        <div className="workshop">
            <div className="heroImage">
            <picture>
                <source media="(max-width: 380px)" srcSet={smallHeader}/>
                <source media="(max-width: 780px)" srcSet={mediumHeader}/>
                <source media="(min-width: 780px)" srcSet={largeHeader}/>
                <img src={largeHeader} alt="tyg med blommönster" />
            </picture>
            </div>
            {content ? (
                <div className="textWrapper workshopText" dangerouslySetInnerHTML={createMarkup()}>
                    
                </div>
            ) : (<p>{informationToUser}</p>)}
        </div>
    )
}
export default Workshops;