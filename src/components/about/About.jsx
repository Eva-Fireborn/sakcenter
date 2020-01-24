import React, {useState, useEffect} from 'react';
import API from '../../helperFunctions/ApiCalls';
import PicBags from '../../img/väskor.jpg';
import PicMummy from '../../img/mumie.jpg';
import PicToys from '../../img/leksaker.jpg';
import PicLamps from '../../img/lampor.jpg';
import './about.scss';

const About = () => {
    const [content, setContent] = useState(null);

    useEffect(()=> {
        API.getAboutPage(res => {
            console.log('res: ', res);
            if (res[0].type === 'pageContent') {
                setContent(res[0].content);
            }
        });
    }, []);

    const createMarkup = () => {
        return {__html: content}
    }

    return (
        <div className="about main">
            {content ? (
                <div className="wrapper" dangerouslySetInnerHTML={createMarkup()}>

                </div>
            ) : (<p>Laddar informationen</p>)}
            <div className="aboutPictures">
                <div className="upperBlock">
                    <div className="largeImageBlock">
                        <div className="imageOverlay" />
                        <img src={PicBags} alt="Hylla med väskor" />
                    </div>
                    <div className="smallImageBlock right">
                        <div className="imageOverlay small" />
                        <img className="mummy" src={PicMummy} alt="Sarkofag med mumie" />
                    </div>
                </div>
                <div className="bottomBlock">
                <div className="smallImageBlock left">
                    <div className="imageOverlay small rightPosition" />
                        <img className="toys" src={PicToys} alt="Leksaker" />
                    </div>
                    <div className="largeImageBlock">
                        <div className="imageOverlay" />
                        <img className="bookshelf" src={PicLamps} alt="Lampor" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;
