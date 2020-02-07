import React, {useEffect, useState} from 'react';
import Button from '../reusables/CallToActionButton';
import API from '../../helperFunctions/ApiCalls';
import largeHeader from '../../img/tygbild-röda-rosor-1920px.jpg';
import mediumHeader from '../../img/tygbild-röda-rosor-780px.jpg';
import smallHeader from '../../img/tygbild-röda-rosor-380px.jpg';
import './information.scss';

const Information= () => {
    const [content, setContent] = useState(null);

    useEffect(()=> {
        API.getInformationPage(res => {
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
        <div className="info">
            <div className="heroImage">
            <picture>
                <source media="(max-width: 380px)" srcSet={smallHeader}/>
                <source media="(max-width: 780px)" srcSet={mediumHeader}/>
                <source media="(min-width: 780px)" srcSet={largeHeader}/>
                <img src={largeHeader} alt="tyg med blommönster" />
            </picture>
            </div>
            {content ? (
                <div className="textWrapper informationText" dangerouslySetInnerHTML={createMarkup()}>

                </div>
            ) : (<p>Laddar informationen</p>)}
                <Button buttonText={'Till galleriet'} />
        </div>
    )
}
export default Information;