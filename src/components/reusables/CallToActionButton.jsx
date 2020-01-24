import React from 'react';
import './callToActionButton.scss';

const CallToActionButton = ({ buttonText, onClick }) => {
    return (
        <button className="callToActionButton" onClick={onClick}>{buttonText}</button>
    )
}
export default CallToActionButton;