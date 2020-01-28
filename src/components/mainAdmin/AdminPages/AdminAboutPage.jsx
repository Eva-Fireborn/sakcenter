import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Button from '../../reusables/CallToActionButton';
import API from '../../../helperFunctions/ApiCalls';

import './adminAboutPage.scss';

const AdminAboutPage= () => {
    const [textfieldValue, setTextfield] = useState("<p>Hämtar data</p>");
    // const updated = true;

    useEffect(()=> {
        API.getAboutPage(res => {
            console.log('res: ', res);
            if (res[0].type === 'pageContent') {
                setTextfield(res[0].content);
            }
        });
    }, []);

    const handleEditorChange = (e) => {
        console.log(
            'Content was updated:',
            e.target.getContent()
        );
        const newText = e.target.getContent();
        setTextfield(newText);
    }

    const sendTextToServer = () => {
        console.log('detta skickas till api: ', textfieldValue);
        API.updateAboutPage(textfieldValue);
    }

    const createMarkup = () => {
        return {__html: textfieldValue}
    }

    return (
        <div className="adminAbout">
            <div className="editor">
                <h1>Redigerare för om oss sidan</h1>
                <Editor
                    initialValue={textfieldValue}
                    apiKey="f5jieybbly9rmsegf57hjot7vpzs0mo853kko19fs6z2kh82"
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image', 
                            'charmap print preview anchor help',
                            'searchreplace visualblocks code',
                            'insertdatetime media table paste wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic | \
                            alignleft aligncenter alignright | \
                            bullist numlist outdent indent | help'
                    }}
                    onChange={handleEditorChange}
                />
                <Button buttonText="Spara text" onClick={sendTextToServer}/>
                <div className="wrapperText" dangerouslySetInnerHTML={createMarkup()}>

                </div>
            </div>
        </div>
        
    )
};
export default AdminAboutPage;