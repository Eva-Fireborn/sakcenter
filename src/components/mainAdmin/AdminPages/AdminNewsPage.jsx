import React, { useState, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import moment from 'moment';
import API from '../../../helperFunctions/ApiCalls';
import Button from '../../reusables/CallToActionButton';
import './adminNewsPage.scss';

const AdminNewsPage = () => {
    const [selectedDate, setDate] = useState(null);
    const [message, setMessage] = useState('');
    const [messageToUser, setMessageToUser] = useState('');
    const [importantNews, setImportantNews] = useState(null);
    const [userInformation, setUserInformation] = useState('');

    useEffect(() => {
        getNews();
    }, []);

    const getNews = () => {
        API.getImportantNews(res => {
            if (res === 'error') {
                setUserInformation('Innehållet kunde inte laddas, prova igen.');
            } else if (res && res.length) {
                res.forEach(content => {
                    setImportantNews(content);
                })
            } else {
                setImportantNews(null);
            }
        })
    }

    const dateOnChange = (e) => {
        setDate(e);
    }

     const sendNews = () => {
         if(selectedDate && message) {
            setMessageToUser('');
            const data = {
                endDate: moment(selectedDate).format("YYYY-MM-DD"),
                message: message
            }
            API.updateImportantNews(data, result => {
                if (result.data.status === 200) {
                    getNews();
                    setDate(null);
                    setMessage('');
                }
            })
         } else {
            setMessageToUser('Något är fel, har du valt datum och skrivit en nyhet?');
         }
     }

    const textOnChange = (e) => {
        if(message.length <= 150) {
            setMessage(e.target.value);
            setMessageToUser('');
        } else {
            setMessageToUser('Du har skrivit mer än 150 tecken.')
        }
    }

    const deleteCurrentNews = () => {
        API.deleteImportantNews(importantNews.id, result => {
            if (result.data.status === 200) {
                getNews();
                //meddelande till användaren
            }
        })
    }

    return (
        <div className="adminNews">
            {importantNews ? (
                <div className="currentMessage">
                    <p>De finns redan en aktiv nyhet:</p>
                    <p className="message">{importantNews.message} (Aktiv till {moment(importantNews.endDate).format("MMM Do YY")})</p>
                    <Button buttonText="Ta bort nyheten direkt" onClick={deleteCurrentNews} />
                </div>
            ) : (
                <div className="newMessage">
                <textarea rows="3" cols="100" value={message} onChange={textOnChange} maxLength="150" placeholder="Skriv din viktiga nyhet, den kan max vara 150 tecken lång." />
                <p>Du måste sätta in ett datum på din nyhet. Nyheten kommer visas på hemsidan tills de datumet.</p>
                <DatePicker 
                    onChange={dateOnChange}
                    value={selectedDate}
                />
                {messageToUser && <p>{messageToUser}</p>}
                <Button buttonText="Skicka ut nyheten i världen" onClick={sendNews} />
            </div>
            )}
            {userInformation && (<p>{userInformation}</p>)}
        </div>
    )
}
export default AdminNewsPage;