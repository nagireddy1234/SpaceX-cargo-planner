import axios from 'axios';

export const AUTHORIZATION = 'Authorization';
export const proxy = 'https://cors-anywhere.herokuapp.com/';
export const API = axios.create({
    baseURL: 'https://glu-stage.antino.io/api/v1/',
});

export const authorize = (token) => {
    if (token) {
        API.defaults.headers.Authorization = token;
    }
};
export const resetTokenAndLocalStorage = () => {
    delete API.defaults.headers.Authorization;
    localStorage.removeItem('auth');
};
export const setAuthrizationToken = () => {
    const data = localStorage.getItem('auth');
    let token = '';
    if (data) {
        const tokenObject = JSON.parse(data);
        token = tokenObject.access_token;
    }
    authorize(token);
};
setAuthrizationToken();

export const getToken = () => {
    const data = localStorage.getItem('auth');
    let token = '';
    if (data) {
        const tokenObject = JSON.parse(data);
        token = tokenObject.access_token;
    }
    return token;
};

export const getAuthData = () => {
    const data = localStorage.getItem('auth');
    if (data) {
        return JSON.parse(data);
    }
    return '';
};
