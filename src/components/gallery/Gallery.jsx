import React, {useEffect, useState } from 'react';
import { useGlobalState } from '../../helperFunctions/GlobalState';
import Instagram from './Instagram';
import API from '../../helperFunctions/ApiCalls';
import sakcenterPic from '../../img/överblicksbild-av-sakcenter1000px.png';
import largeHeader from '../../img/tygbild-brunt-1920px.jpg';
import mediumHeader from '../../img/tygbild-brunt-780px.jpg';
import smallHeader from '../../img/tygbild-brunt-380px.jpg';
import dirtyDownLarge from '../../img/dirty-down-spray-1080px.jpg';
import dirtyDownMedium from '../../img/dirty-down-spray-780px.jpg';
import './gallery.scss';

const Gallery= () => {
    const [content, setContent] = useGlobalState('contentGalleryPage');
    const [instagramPosts, setInstagramPosts] = useGlobalState('instagramPosts');
    const [informationToUser, setInformationToUser] = useState('Denna sida drivs av 1000 hamstrar som springer för fullt för att hämta informationen till dig.');

    useEffect(()=> {
        if (!content) {
            API.getGalleryPage(res => {
                if (res === 'error') {
                    setInformationToUser('Något har gått fel, prova att ladda om sidan.');
                } else if (res && res.length) {
                    res.forEach(content => {
                        if (content.type === 'galleryPage') {
                            setContent(content.content);
                        }
                    });
                }
            });
        }
        if(!instagramPosts) {
            const instagramresponse = [];
            API.getInstagramPosts(result => {
                if (result === 'error') {
                    setInformationToUser('Något har gått fel, prova att ladda om sidan.');
                } else if (result && result.length) {
                    result.forEach( res => {
                        instagramresponse.unshift(res);
                    })
                    setInstagramPosts(instagramresponse);
                }
            });
        }
    }, []);

    const createMarkup = () => {
        return {__html: content}
    }
    return (
        <div className="gallery">
            <div className="heroImage">
                <picture>
                    <source media="(max-width: 380px)" srcSet={smallHeader}/>
                    <source media="(max-width: 780px)" srcSet={mediumHeader}/>
                    <source media="(min-width: 780px)" srcSet={largeHeader}/>
                    <img src={largeHeader} alt="tyg med bruna mönster" />
                </picture>
            </div>
            <div className="heroImageSakcenter">
                <img src={sakcenterPic} alt="Överblick av Sakcenter" />
            </div>
            <div className="mainGallery">

                {content ? (
                    <div className="textWrapper galleryText" dangerouslySetInnerHTML={createMarkup()}>

                    </div>
                ) : (
                    <div className="textWrapper galleryText">
                        <p>{informationToUser}</p>
                    </div>
                )}
                
                <div className="productImg">
                    <picture>
                        <source media="(max-width: 780px)" srcSet={dirtyDownMedium}/>
                        <source media="(min-width: 780px)" srcSet={dirtyDownLarge}/>
                        <img src={dirtyDownLarge} alt="Dirty down sprayflaskor och Sticky stuff rullar" />
                    </picture>
                </div>
            </div>
                {instagramPosts && instagramPosts.length && (
                    <div className="instagramPosts">
                        <div className="divider" />
                        <div className="instagramHeader">
                            <h3><a href="https://www.instagram.com/sakcenter/" target="blank">Gå till vår Instagram för att se alla bilder</a></h3>
                        </div>
                        {instagramPosts.map((post, index) => {
                            return <div className="instagramPost" key={index}><Instagram URL={post.link} /></div>
                        })}
                    </div>
                )}
        </div>
    )
}
export default Gallery;