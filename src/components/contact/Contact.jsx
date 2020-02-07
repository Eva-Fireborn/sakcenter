import React from 'react';
import ContactCard from './ContactCard';
import Exempelbild from '../../img/exempelbild.jpg';
import SClogo from '../../img/SAKCENTER_LOGO_bw_2013.png';
import largeHeader from '../../img/tygbild-gul-lila-mönster-1920px.jpg';
import mediumHeader from '../../img/tygbild-gul-lila-mönster-780px.jpg';
import smallHeader from '../../img/tygbild-gul-lila-mönster-380px.jpg';
import './contact.scss';

const Contact= () => {
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
            <div className="contactWrapper">
                <ContactCard name={'Sakcenter'} email={'info@sakcenter.se'} phone={''} pic={SClogo} />
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