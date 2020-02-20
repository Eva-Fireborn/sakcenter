import React from 'react';
import './contactCard.scss';

const ContactCard = ({ name, email, phone, pic }) => {
    return (
        <div className="contactCard">
            <div className="innerWrapper">
                <div className="imgWrapper">
                    <img src={pic} alt={name} />
                </div>
                <div className="infoWrapper">
                    <h3>{name}</h3>
                    <a className="link" href={`mailto:${email}`}>{email}</a>
                    {phone && <p>{phone}</p>}
                </div>
            </div>
        </div>
    )
}
export default ContactCard;