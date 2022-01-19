import { combineReducers } from 'redux';
import { postReducer } from './post';
import { userReducer } from './user';
import { commentReducer } from './comment';
import { albumReducer } from './album';
import { photoReducer } from './photo';


const reducer = combineReducers({
    postReducer,
    userReducer,
    commentReducer,
    albumReducer,
    photoReducer
});

export default reducer;
