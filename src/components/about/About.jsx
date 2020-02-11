import React, { useEffect, useState } from 'react';
import { useGlobalState } from '../../helperFunctions/GlobalState';
import API from '../../helperFunctions/ApiCalls';
import Lamps from '../../img/lampor.jpg';
import Police from '../../img/polis-rekvisita-2.jpg';
import PicToys from '../../img/leksaker.jpg';
import EpokPic from '../../img/epok-förpackningar.jpg';
import largeHeader from '../../img/tygbild-blommor-1920px.jpg';
import mediumHeader from '../../img/tygbild-blommor-780px.jpg';
import smallHeader from '../../img/tygbild-blommor-380px.jpg';
import './about.scss';

const About = () => {
    const [content, setContent] = useGlobalState('contentAboutPage');
    const [informationToUser, setInformationToUser] = useState('Denna sida drivs av 1000 hamstrar som springer för fullt för att hämta informationen till dig.');

    useEffect(()=> {
        if(!content) {
            API.getAboutPage(res => {
                console.log(res);
                if (res === 'error') {
                    setInformationToUser('Något har gått fel, prova att ladda om sidan.');
                } else if (res && res.length) {
                    res.forEach(content => {
                        if (content.type === 'aboutPage') {
                            console.log('setting content')
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
            {content ? (
                <div className="textWrapper aboutText" dangerouslySetInnerHTML={createMarkup()}>

                </div>
            ) : (<p>{informationToUser}</p>)}
            <div className="aboutPictures">
                <div className="upperBlock">
                    <div className="largeImageBlock">
                        <div className="imageOverlay" />
                        <img src={EpokPic} alt="Hylla med väskor" />
                    </div>
                    <div className="smallImageBlock right">
                        <div className="imageOverlay small" />
                        <img className="mummy" src={Police} alt="Sarkofag med mumie" />
                    </div>
                </div>
                <div className="bottomBlock">
                <div className="smallImageBlock left">
                    <div className="imageOverlay small rightPosition" />
                        <img className="toys" src={Lamps} alt="Leksaker" />
                    </div>
                    <div className="largeImageBlock">
                        <div className="imageOverlay" />
                        <img className="bookshelf" src={PicToys} alt="Lampor" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;
