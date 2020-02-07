import axios from 'axios';

const url = 'http://localhost:4000';

function getAboutPage(callback) {
    axios.get(`${url}/APIretrieveAbout`)
    .then(data => {
        callback(data.data.body);
    })
    .catch(err => console.log(err))
}

function getWorkshopPage(callback) {
    axios.get(`${url}/APIretrieveWorkshop`)
    .then(data => {
        callback(data.data.body);
    })
    .catch(err => console.log(err))
}

function getInformationPage(callback) {
    axios.get(`${url}/APIretrieveInformation`)
    .then(data => {
        callback(data.data.body);
    })
    .catch(err => console.log(err))
}

function getGalleryPage(callback) {
    axios.get(`${url}/APIretrieveGallery`)
    .then(data => {
        callback(data.data.body);
    })
    .catch(err => console.log(err))
}

function getInstagramPosts(callback) {
    axios.get(`${url}/APIgetInstagramPosts`)
    .then(data => {
        callback(data.data.body);
    })
    .catch(err => console.log(err))
}

function updateInstagramPosts(newContent, callback) {
    console.log('sending: ', newContent);
    axios({
        method: 'post',
        url: `${url}/APInewInstagramPost`,
        data: {
            newContent
        }
    })
    .then(data => callback(data))
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

function updateWorkshopPage(newContent) {
    console.log('sending: ', newContent);
    axios({
        method: 'post',
        url: `${url}/APIpostWorkshop`,
        data: {
            newContent
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

function updateInformationPage(newContent) {
    console.log('sending: ', newContent);
    axios({
        method: 'post',
        url: `${url}/APIpostInformation`,
        data: {
            newContent
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

function updateGalleryPage(newContent) {
    console.log('sending: ', newContent);
    axios({
        method: 'post',
        url: `${url}/APIpostGallery`,
        data: {
            newContent
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

function login(password, response) {
    console.log('sending: ', password);
    axios({
        method: 'post',
        url: `${url}/APIlogin`,
        data: {
            password
        }
    })
    .then(data => response(data))
    .catch(err => console.log(err))
}

export default{
    getAboutPage,
    updateAboutPage,
    updateWorkshopPage,
    getWorkshopPage,
    getInformationPage,
    updateInformationPage,
    getGalleryPage,
    updateGalleryPage,
    login,
    getInstagramPosts,
    updateInstagramPosts
};

