import axios from "axios";
import { setLoading } from ".";
import { API_HOST } from '../../config';


export const getCommentByPostId = (id) => dispatch => {
    axios
        .get(`${API_HOST.url}/comments?postId=${id}`)
        .then(res => {
            dispatch({ type: 'SET_COMMENT', value: res.data });
            dispatch(setLoading(false));
        })
        .catch(err => {
            console.log('err get comment: ', err);
            dispatch(setLoading(false));
        });
};

