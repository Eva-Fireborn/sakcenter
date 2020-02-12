import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Button from '../../reusables/CallToActionButton';
import API from '../../../helperFunctions/ApiCalls';

import './adminGalleryPage.scss';

const AdminGalleryPage= () => {
    const [textfieldValue, setTextfield] = useState("<p>Hämtar data</p>");
    const [finishedLoading, setLoading] = useState(false);
    const [instagramPosts, setInstagramPosts] = useState(null);
    const [instaLinkInput, setInputLinkValue] = useState('');
    const [instaDescInput, setInputDescValue] = useState('');
    const [userInformation, setUserInformation] = useState('Tusen små hamstrar alstrar energi för att hämta din data');

    useEffect(()=> {
        API.getGalleryPage(result => {
            if(result === 'error') {
                setUserInformation('Innehållet kunde inte laddas, prova igen.')
            } else if (result && result.length) {
                result.forEach( res => {
                    if (res.type === 'galleryPage')
                        setTextfield(res.content);
                });
                setLoading(true);
            }
        });
        updateInstagramPosts();
    }, []);


    const updateInstagramPosts = () => {
        const instagramresponse = [];
        API.getInstagramPosts(result => {
            if (result === 'error') {
                setUserInformation('Innehållet kunde inte laddas, prova igen.')
            } else if (result && result.length) {
                result.forEach( res => {
                    instagramresponse.push(res);
                });
                setInstagramPosts(instagramresponse);
            }
        });
    }

    const handleEditorChange = (e) => {
        const newText = e.target.getContent();
        setTextfield(newText);
    }

    const sendTextToServer = () => {
        API.updateGalleryPage(textfieldValue);
    }

    const createMarkup = () => {
        return {__html: textfieldValue}
    }

    const updateLinkInput = (e) => {
        setInputLinkValue(e.target.value);
    }

    const updateDescInput = (e) => {
        setInputDescValue(e.target.value);
    }
    const updateNewInstagramPost = () => {
        const newPost = {
            link: instaLinkInput,
            description: instaDescInput
        };
        API.updateInstagramPosts(newPost, result => {
            updateInstagramPosts();
        });
    }

    const removePicture = (id) => {
        API.removeInstagramPost(id, result => {
            updateInstagramPosts();
        })
    }

    return (
        <div className="adminInformation">
            <div className="editor">
                <h1>Redigerare för "sortiment" sidan</h1>
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
                <div className="wrapperText" dangerouslySetInnerHTML={createMarkup()}>

                </div>
            </div>
            <div className="InstagramEditor">
                <h3>Instagram bilder:</h3>
                {instagramPosts && instagramPosts.length ? (
                    <ul>
                        {instagramPosts.map((post, index) => {
                        return <li key={index}>{post.description} <span>({post.link})</span> <Button buttonText="Radera bilden" onClick={() => removePicture(post.id)} /> </li>
                        })}
                    </ul>
                ) : (
                    <p>{userInformation}</p>
                )}
                <div className="addNewInstagramPost">
                    <p>Länk till Instagrambild, ex https://www.instagram.com/p/BfatBEXh_dW/</p>
                    <input type="text" onChange={updateLinkInput} value={instaLinkInput} />
                    <p>Beskrivning av bilden, ex Lampfötter</p>
                    <input type="text" onChange={updateDescInput} value={instaDescInput} />
                    <Button buttonText='Spara inlägg' onClick={updateNewInstagramPost} />
                </div>
            </div>
        </div>
        
    )
};
export default AdminGalleryPage;