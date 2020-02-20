import React, { useEffect, useState } from 'react';
import { useGlobalState } from '../../helperFunctions/GlobalState';
import Button from '../reusables/CallToActionButton';
import API from '../../helperFunctions/ApiCalls';
import { Link } from "react-router-dom";
import largeHeader from '../../img/tygbild-röda-rosor-1920px.jpg';
import mediumHeader from '../../img/tygbild-röda-rosor-780px.jpg';
import smallHeader from '../../img/tygbild-röda-rosor-380px.jpg';
import largeLamps from '../../img/lampor-1920px.jpg';
import mediumLamps from '../../img/lampor-780px.jpg';
import largeElectronics from '../../img/teknik-1920px.jpg';
import mediumElectronics from '../../img/teknik-780px.jpg';
import './information.scss';


const Information= () => {
    const [content, setContent] = useGlobalState('contentInformationPage');
    const [informationToUser, setInformationToUser] = useState('Denna sida drivs av 1000 hamstrar som springer för fullt för att hämta informationen till dig.');

    useEffect(()=> {
        if (!content) {
            API.getInformationPage(res => {
                if (res === 'error') {
                    setInformationToUser('Något har gått fel, prova att ladda om sidan.');
                } else if (res && res.length) {
                    res.forEach(content => {
                        if (content.type === 'informationPage') {
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
        <div className="info">
            <div className="heroImage">
                <picture>
                    <source media="(max-width: 380px)" srcSet={smallHeader}/>
                    <source media="(max-width: 780px)" srcSet={mediumHeader}/>
                    <source media="(min-width: 780px)" srcSet={largeHeader}/>
                    <img src={largeHeader} alt="tyg med blommönster" />
                </picture>
            </div>
            <div className="informationTextAndImages">
                {content ? (
                    <div className="textWrapper informationText" dangerouslySetInnerHTML={createMarkup()}>

                    </div>
                ) : (<p>{informationToUser}</p>)}
                <Link to="/Sortiment"><Button buttonText={'Se vårt sortiment'} /></Link>
                <div className="informationImg">
                    <div className="imgWrapper">
                        <div className="imageOverlay" />
                        <picture>
                            <source media="(max-width: 780px)" srcSet={mediumLamps}/>
                            <source media="(min-width: 780px)" srcSet={largeLamps}/>
                            <img src={largeLamps} alt="Bordslampor och lampskärmar" />
                        </picture>
                    </div>
                    <div className="imgWrapper">
                        <div className="imageOverlay" />
                        <picture>
                            <source media="(max-width: 780px)" srcSet={mediumElectronics}/>
                            <source media="(min-width: 780px)" srcSet={largeElectronics}/>
                            <img src={largeElectronics} alt="Retro teknik" />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Information;