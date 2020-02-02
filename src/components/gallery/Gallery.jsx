import React, {useEffect, useState} from 'react';
import API from '../../helperFunctions/ApiCalls';
import header from '../../img/tygbild-blått-med-blommor-1920px.jpg';
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
                <img src={header} alt="tyg med blommönster" />
            </div>
            {content ? (
                <div className="textWrapper galleryText" dangerouslySetInnerHTML={createMarkup()}>

                </div>
            ) : (<p>Laddar informationen</p>)}
        </div>
    )
}
export default Gallery;