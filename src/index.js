import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.interceptors.request.use(request => {
    console.log(request);
    // we can edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    console.log(response);
    // we can edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error)
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
