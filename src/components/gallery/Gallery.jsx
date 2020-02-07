import React, {useEffect, useState} from 'react';
import Instagram from './Instagram';
import API from '../../helperFunctions/ApiCalls';
import sakcenterPic from '../../img/överblicksbild-av-sakcenter1000px.png';
import './gallery.scss';

const Gallery= () => {
    const [content, setContent] = useState(null);
    const [instagramPosts, setInstagramPosts] = useState(null);

    useEffect(()=> {
        API.getGalleryPage(res => {
            res.forEach(content => {
                if (content.type === 'pageContent') {
                    setContent(content.content);
                }
            })
        });
        const instagramresponse = [];
        API.getInstagramPosts(result => {
            result.forEach( res => {
                instagramresponse.unshift(res);
                console.log('list: ', instagramresponse)
            })
            setInstagramPosts(instagramresponse);
        })
    }, []);

    const createMarkup = () => {
        return {__html: content}
    }
    return (
        <div className="gallery">
            <div className="heroImageSakcenter">
                <img src={sakcenterPic} alt="Överblick av Sakcenter" />
            </div>
            <div className="mainGallery">

                {content ? (
                    <div className="textWrapper galleryText" dangerouslySetInnerHTML={createMarkup()}>

                    </div>
                ) : (
                    <div className="textWrapper galleryText">
                        <p>Laddar informationen</p>
                    </div>
                )}
                
                <div className="productImg">
                    Bild på Dirty down + Sticky stuff
                </div>
            </div>
                {instagramPosts && instagramPosts.length && (
                    <div className="instagramPosts">
                        <div className="instagramHeader">
                            <h3>För att se fler bilder på förrådet besök vår Instagram</h3>
                        </div>
                        {instagramPosts.map((post, index) => {
                            return <div className="instagramPost"><Instagram key={index} URL={post.link} /></div>
                        })}
                    </div>
                )}
        </div>
    )
}
export default Gallery;