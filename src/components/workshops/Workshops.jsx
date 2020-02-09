import React, { useEffect } from 'react';
import { useGlobalState } from '../../helperFunctions/GlobalState';
import API from '../../helperFunctions/ApiCalls';
import header from '../../img/tygbild-grönt-med-blommor-1920px.jpg';
import './workshops.scss';

const Workshops= () => {
    const [content, setContent] = useGlobalState('contentWorkshopPage');

    useEffect(()=> {
        if (!content) {
            API.getWorkshopPage(res => {
                res.forEach(content => {
                    if (content.type === 'pageContent') {
                        setContent(content.content);
                    }
                })
            });
        }
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