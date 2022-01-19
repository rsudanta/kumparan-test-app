import axios from "axios";
import { API_HOST } from '../../config';


export const getCommentByPostId = (id) => dispatch => {
    axios
        .get(`${API_HOST.url}/comments?postId=${id}`)
        .then(res => {
            dispatch({ type: 'SET_COMMENT', value: res.data });
        })
        .catch(err => {
            console.log('err get comment: ', err);
        });
};

