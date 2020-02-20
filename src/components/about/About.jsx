import React, { useEffect, useState } from 'react';
import { useGlobalState } from '../../helperFunctions/GlobalState';
import API from '../../helperFunctions/ApiCalls';
import largeHeader from '../../img/tygbild-blommor-1920px.jpg';
import mediumHeader from '../../img/tygbild-blommor-780px.jpg';
import smallHeader from '../../img/tygbild-blommor-380px.jpg';
import largePolis from '../../img/polisprylar-1920px.jpg';
import mediumPolis from '../../img/polisprylar-780px.jpg';
import largeEpok from '../../img/epok-förpackningar-1920px.jpg';
import mediumEpok from '../../img/epok-förpackningar-780px.jpg';
import ABFlogo from '../../img/ABFlogo.png';
import './about.scss';

const About = () => {
    const [content, setContent] = useGlobalState('contentAboutPage');
    const [informationToUser, setInformationToUser] = useState('Denna sida drivs av 1000 hamstrar som springer för fullt för att hämta informationen till dig.');

    useEffect(()=> {
        if(!content) {
            API.getAboutPage(res => {
                if (res === 'error') {
                    setInformationToUser('Något har gått fel, prova att ladda om sidan.');
                } else if (res && res.length) {
                    res.forEach(content => {
                        if (content.type === 'aboutPage') {
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
        <div className="about main">
            <div className="heroImage">
            <picture>
                <source media="(max-width: 380px)" srcSet={smallHeader}/>
                <source media="(max-width: 780px)" srcSet={mediumHeader}/>
                <source media="(min-width: 780px)" srcSet={largeHeader}/>
                <img src={largeHeader} alt="tyg med blommönster" />
            </picture>
            </div>
            <div className="contentWrapper">
                {content ? (
                    <div className="textBlockAbout">
                        <div className="textWrapper aboutText" dangerouslySetInnerHTML={createMarkup()}>

                        </div>
                        <div className="ABF">
                            <p>Sakcenter drivs i samarbete med</p>
                            <img src={ABFlogo} alt="ABF logotyp" />
                        </div>
                    </div>
                ) : (<p>{informationToUser}</p>)}
                <div className="aboutPictures">
                    <div className="image">
                        <div className="imageOverlay" />
                        <picture>
                            <source media="(max-width: 780px)" srcSet={mediumEpok}/>
                            <source media="(min-width: 780px)" srcSet={largeEpok}/>
                            <img src={largeEpok} alt="Rekvisita, Epokförpackningar" />
                        </picture>
                    </div>
                    <div className="image">
                        <div className="imageOverlay" />
                        <picture>
                            <source media="(max-width: 780px)" srcSet={mediumPolis}/>
                            <source media="(min-width: 780px)" srcSet={largePolis}/>
                            <img src={largePolis} alt="Rekvisita, Polissaker" />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;