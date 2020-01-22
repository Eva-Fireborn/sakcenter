import React from 'react';
import './callToActionButton.scss';

const CallToActionButton = ({ buttonText }) => {
    return (
        <button className="callToActionButton">{buttonText}</button>
    )
}
export default CallToActionButton;