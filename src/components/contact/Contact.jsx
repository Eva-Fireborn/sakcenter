import React, { useState, useEffect} from 'react';
import API from '../../helperFunctions/ApiCalls';
import { useGlobalState } from '../../helperFunctions/GlobalState';
import ContactCard from './ContactCard';
import Exempelbild from '../../img/exempelbild.jpg';
import largeHeader from '../../img/tygbild-gul-lila-mönster-1920px.jpg';
import mediumHeader from '../../img/tygbild-gul-lila-mönster-780px.jpg';
import smallHeader from '../../img/tygbild-gul-lila-mönster-380px.jpg';
import './contact.scss';


const Contact= () => {
    const [content, setContent] = useGlobalState('contentContactPage');
    const [informationToUser, setInformationToUser] = useState('Denna sida drivs av 1000 hamstrar som springer för fullt för att hämta informationen till dig.');

    useEffect(() => {
        if (!content) {
            API.getContactPage(result => {
                if (result === 'error') {
                    setInformationToUser('Något har gått fel, prova att ladda om sidan.');
                } else if (result && result.length) {
                    result.forEach(content => {
                        if (content.type === 'contactPage') {
                            setContent(content.content);
                        }
                    });
                }
            });
        }
    }, []);

    const createMarkup = () => {
        return {__html: content}
    }

    return (
        <div className="contact">
            <div className="heroImage">
                <picture>
                    <source media="(max-width: 380px)" srcSet={smallHeader}/>
                    <source media="(max-width: 780px)" srcSet={mediumHeader}/>
                    <source media="(min-width: 780px)" srcSet={largeHeader}/>
                    <img src={largeHeader} alt="tyg med blommönster" />
                </picture>
            </div>
            {content ? (
                <div className="textWrapper contactText" dangerouslySetInnerHTML={createMarkup()}>

                </div>
            ) : (<p>{informationToUser}</p>)}
            <div className="contactWrapper">
                <ContactCard name={'Eva Fireborn'} email={'eva@sakcenter.se'} phone={'0763-47 88 52'} pic={Exempelbild} />
                <ContactCard name={'Kristina Sandfors'} email={'kristina@sakcenter.se'} phone={'0702-94 45 05'} pic={Exempelbild} />
                <ContactCard name={'Petra Valén'} email={'petra@sakcenter.se'} phone={'0730-81 91 42'} pic={Exempelbild} />
                <ContactCard name={'Erika von Weissenberg'} email={'erika@sakcenter.se'} phone={'0707-45 15 14'} pic={Exempelbild} />
                <ContactCard name={'Mari Hansson'} email={'mari@sakcenter.se'} phone={'0730-31 79 99'} pic={Exempelbild} />
                <ContactCard name={'Liv Ulfsdóttir'} email={'liv@sakcenter.se'} phone={'0704-38 45 91'} pic={Exempelbild} />
            </div>
        </div>
    )
}
export default Contact;