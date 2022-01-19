import axios from "axios";
import { API_HOST } from '../../config';


export const getAlbumByUserId = (id) => dispatch => {
    axios
        .get(`${API_HOST.url}/users/${id}/albums`)
        .then(res => {
            dispatch({ type: 'SET_ALBUM', value: res.data });
        })
        .catch(err => {
            console.log('err get album: ', err);
        });
};

