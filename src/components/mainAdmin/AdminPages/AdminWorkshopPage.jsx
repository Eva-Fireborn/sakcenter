import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Button from '../../reusables/CallToActionButton';
import API from '../../../helperFunctions/ApiCalls';

import './adminWorkshopPage.scss';

const AdminWorkshopPage= () => {
    const [textfieldValue, setTextfield] = useState("<p>Hämtar data</p>");
    const [finishedLoading, setLoading] = useState(false);
    const [userInformation, setUserInformation] = useState('Tusen små hamstrar alstrar energi för att hämta din data');

    useEffect(()=> {
        API.getWorkshopPage(result => {
            if (result === 'error') {
                setUserInformation('Innehållet kunde inte laddas, prova igen.');
            } else if (result && result.length) {
                result.forEach( res => {
                    if (res.type === 'workshopPage')
                        setTextfield(res.content);
                });
                setLoading(true);
            }
        });
    }, []);

    const handleEditorChange = (e) => {
        const newText = e.target.getContent();
        setTextfield(newText);
    }

    const sendTextToServer = () => {
        API.updateWorkshopPage(textfieldValue);
    }

    const createMarkup = () => {
        return {__html: textfieldValue}
    }

    return (
        <div className="adminWorkshop">
            <div className="editor">
                <h1>Redigerare för "workshop och föreläsningar" sidan</h1>
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
                    <p>{userInformation}</p>
                )}
                <Button buttonText="Spara text" onClick={sendTextToServer}/>
                <div className="wrapperTextWorkshop" dangerouslySetInnerHTML={createMarkup()}>

                </div>
            </div>
        </div>
        
    )
};
export default AdminWorkshopPage;