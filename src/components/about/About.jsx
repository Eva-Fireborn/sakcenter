import React, {useState, useEffect} from 'react';
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
    const [content, setContent] = useState(null);

    useEffect(()=> {
        API.getAboutPage(res => {
            res.forEach(content => {
                if (content.type === 'pageContent') {
                    setContent(content.content);
                }
            })
        });
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
            ) : (<p>Laddar informationen</p>)}
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
