import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Button from '../../reusables/CallToActionButton';
import API from '../../../helperFunctions/ApiCalls';

import './adminAboutPage.scss';

const AdminAboutPage= () => {
    const [textfieldValue, setTextfield] = useState("");
    const [finishedLoading, setLoading] = useState(false);

    useEffect(()=> {
        API.getAboutPage(result => {
            result.map( res => {
                if (res.type === 'pageContent')
                    setTextfield(res.content);
            })
            setLoading(true);
        });
    }, []);

    const handleEditorChange = (e) => {
        const newText = e.target.getContent();
        setTextfield(newText);
    }

    const sendTextToServer = () => {
        API.updateAboutPage(textfieldValue);
    }

    const createMarkup = () => {
        return {__html: textfieldValue}
    }

    return (
        <div className="adminAbout">
            <div className="editor">
                <h1>Redigerare för "om oss" sidan</h1>
                {finishedLoading ? (<Editor
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
                            'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help'
                    }}
                    onChange={handleEditorChange}
                />) : (
                    <p>Tusen små hamstrar alstrar energi för att hämta din data</p>
                )}
                <Button buttonText="Spara text" onClick={sendTextToServer}/>
                <div className="wrapperText" dangerouslySetInnerHTML={createMarkup()}>

                </div>
            </div>
        </div>
        
    )
};
export default AdminAboutPage;