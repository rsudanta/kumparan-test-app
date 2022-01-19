import axios from "axios";
import { API_HOST } from '../../config';


export const getPostData = () => dispatch => {
    axios
        .get(`${API_HOST.url}/posts`)
        .then(res => {
            dispatch({ type: 'SET_POST', value: res.data });
        })
        .catch(err => {
            console.log('err get post: ', err);
        });
};

