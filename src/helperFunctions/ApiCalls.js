import axios from 'axios';

const url = 'http://localhost:4000';

function getAboutPage(callback) {
    axios.get(`${url}/APIretrieveAbout`)
    .then(data => {
        callback(data.data.body);
    })
    .catch(err => console.log(err))
}

function updateAboutPage(newContent) {
    console.log('sending: ', newContent);
    axios({
        method: 'post',
        url: `${url}/APIpostAbout`,
        data: {
            newContent
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

export default{
    getAboutPage,
    updateAboutPage
};

