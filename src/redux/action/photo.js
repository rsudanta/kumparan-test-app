import axios from "axios";
import { API_HOST } from '../../config';


export const getPhotoByAlbumId = (id) => dispatch => {
    axios
        .get(`${API_HOST.url}/albums/${id}/photos`)
        .then(res => {
            dispatch({ type: 'SET_PHOTO', value: res.data });
        })
        .catch(err => {
            console.log('err get photo: ', err);
        });
};

