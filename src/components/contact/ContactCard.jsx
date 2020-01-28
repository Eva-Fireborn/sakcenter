import React from 'react';
import clsx from 'clsx';
import './contactCard.scss';

const ContactCard = ({ name, email, phone, pic }) => {
    return (
        <div className={clsx('contactCard', name === 'Sakcenter' && 'logoCard')}>
            <div className="innerWrapper">
                <div className={clsx('imgWrapper', name === 'Sakcenter' && 'logo')}>
                    <img src={pic} alt={name} />
                </div>
                <div className="infoWrapper">
                    <h3>{name}</h3>
                    <a class="link" href={`mailto:${email}`}>{email}</a>
                    {phone && <p>{phone}</p>}
                </div>
            </div>
        </div>
    )
}
export default ContactCard;