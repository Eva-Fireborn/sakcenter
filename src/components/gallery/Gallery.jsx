import React, {useEffect, useState} from 'react';
import Instagram from './Instagram';
import API from '../../helperFunctions/ApiCalls';
import largeHeader from '../../img/tygbild-gul-lila-mönster-1920px.jpg';
import mediumHeader from '../../img/tygbild-gul-lila-mönster-780px.jpg';
import smallHeader from '../../img/tygbild-gul-lila-mönster-380px.jpg';
import './gallery.scss';

const Gallery= () => {
    const [content, setContent] = useState(null);
    const [instagramPosts, setInstagramPosts] = useState(null);

    useEffect(()=> {
        API.getGalleryPage(res => {
            console.log('res: ', res);
            if (res[0].type === 'pageContent') {
                setContent(res[0].content);
            }
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
            <div className="heroImage">
                <picture>
                    <source media="(max-width: 380px)" srcSet={smallHeader}/>
                    <source media="(max-width: 780px)" srcSet={mediumHeader}/>
                    <source media="(min-width: 780px)" srcSet={largeHeader}/>
                    <img src={largeHeader} alt="tyg med blommönster" />
                </picture>
            </div>
            {content ? (
                <div className="textWrapper galleryText" dangerouslySetInnerHTML={createMarkup()}>

                </div>
            ) : (<p>Laddar informationen</p>)}
            <div>
                {instagramPosts && instagramPosts.length && (
                    instagramPosts.map((post, index) => {
                        return <Instagram key={index} URL={post.link} />
                    })
                )}
            </div>
            
        </div>
    )
}
export default Gallery;