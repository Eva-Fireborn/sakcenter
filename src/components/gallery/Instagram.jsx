import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const Instagram = ({ URL }) => {
    return (
        <InstagramEmbed
            url={URL}
            maxWidth={320}
            hideCaption={true}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
        />
    )
}

export default Instagram;