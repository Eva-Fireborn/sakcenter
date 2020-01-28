import React, {useEffect, useState} from 'react';
import Button from '../reusables/CallToActionButton';
import API from '../../helperFunctions/ApiCalls';
import './information.scss';

const Information= () => {
    const [content, setContent] = useState(null);

    useEffect(()=> {
        API.getInformationPage(res => {
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
        <div className="info">
            {content ? (
                <div className="wrapper" dangerouslySetInnerHTML={createMarkup()}>

                </div>
            ) : (<p>Laddar informationen</p>)}
                <Button buttonText={'Till galleriet'} />
        </div>
    )
}
export default Information;