import axios from "axios";
import { API_HOST } from '../../config';

export const getUserData = () => dispatch => {
    axios
        .get(`${API_HOST.url}/users`)
        .then(res => {
            dispatch({ type: 'SET_USER', value: res.data });
        })
        .catch(err => {
            console.log('err get user: ', err);
        });
};