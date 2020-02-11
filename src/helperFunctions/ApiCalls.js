import axios from 'axios';

const url = 'http://localhost:4000';

function getAboutPage(callback) {
    axios.get(`${url}/APIretrieveAbout`)
    .then(data => {
        callback(data.data.body);
    })
    .catch(err => callback('error'));
}

function getWorkshopPage(callback) {
    axios.get(`${url}/APIretrieveWorkshop`)
    .then(data => {
        callback(data.data.body);
    })
    .catch(err => callback('error'))
}

function getInformationPage(callback) {
    axios.get(`${url}/APIretrieveInformation`)
    .then(data => {
        callback(data.data.body);
    })
    .catch(err => callback('error'))
}

function getContactPage(callback) {
    axios.get(`${url}/APIretrieveContact`)
    .then(data => {
        callback(data.data.body);
    })
    .catch(err => callback('error'))
}

function getGalleryPage(callback) {
    axios.get(`${url}/APIretrieveGallery`)
    .then(data => {
        callback(data.data.body);
    })
    .catch(err => callback('error'))
}

function getInstagramPosts(callback) {
    axios.get(`${url}/APIgetInstagramPosts`)
    .then(data => {
        callback(data.data.body);
    })
    .catch(err => callback('error'))
}

function getImportantNews(callback) {
    axios.get(`${url}/APIretrieveImportantNews`)
    .then(data => {
        callback(data.data.body);
    })
    .catch(err => callback('error'))
}



function updateInstagramPosts(newContent, callback) {
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

function updateImportantNews(newContent, callback) {
    axios({
        method: 'post',
        url: `${url}/APInewImportantMessage`,
        data: {
            newContent
        }
    })
    .then(data => callback(data))
    .catch(err => console.log(err))
}

function deleteImportantNews(id, callback) {
    console.log('sending: ', id);
    axios({
        method: 'post',
        url: `${url}/APIdeleteImportantNews`,
        data: {
            id
        }
    })
    .then(data => callback(data))
    .catch(err => console.log(err))
}

function removeInstagramPost(id, callback) {
    console.log('sending: ', id);
    axios({
        method: 'post',
        url: `${url}/APIdeleteInstagramPost`,
        data: {
            id
        }
    })
    .then(data => callback(data))
    .catch(err => console.log(err))
}

function updateAboutPage(newContent) {
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

function updateContactPage(newContent) {
    axios({
        method: 'post',
        url: `${url}/APIpostContact`,
        data: {
            newContent
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

function updateWorkshopPage(newContent) {
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
    axios({
        method: 'post',
        url: `${url}/APIlogin`,
        data: {
            password
        }
    })
    .then(data => response(data))
    .catch(err => response('error'))
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
    updateInstagramPosts,
    getImportantNews,
    deleteImportantNews,
    updateImportantNews,
    removeInstagramPost,
    getContactPage,
    updateContactPage
};

