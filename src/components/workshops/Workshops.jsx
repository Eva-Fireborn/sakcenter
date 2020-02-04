import React, {useState, useEffect} from 'react';
import API from '../../helperFunctions/ApiCalls';
import header from '../../img/tygbild-grönt-med-blommor-1920px.jpg';
import './workshops.scss';

const Workshops= () => {
    const [content, setContent] = useState(null);

    useEffect(()=> {
        API.getWorkshopPage(res => {
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
        <div className="workshop">
            <div className="heroImage">
                <img src={header} alt="tyg med blommor" />
            </div>
            {content ? (
                <div className="textWrapper workshopText" dangerouslySetInnerHTML={createMarkup()}>
                    
                </div>
            ) : (<p>Laddar informationen</p>)}
        </div>
    )
}
export default Workshops;