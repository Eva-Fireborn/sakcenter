import React, {useEffect, useState} from 'react';
import API from '../../helperFunctions/ApiCalls';
import largeHeader from '../../img/tygbild-grön-bakgrund-1920px.jpg';
import mediumHeader from '../../img/tygbild-grön-bakgrund-780px.jpg';
import smallHeader from '../../img/tygbild-grön-bakgrund-380px.jpg';
import './gallery.scss';

const Gallery= () => {
    const [content, setContent] = useState(null);

    useEffect(()=> {
        API.getGalleryPage(res => {
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
        </div>
    )
}
export default Gallery;