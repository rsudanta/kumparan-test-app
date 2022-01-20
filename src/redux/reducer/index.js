import { combineReducers } from 'redux';
import { postReducer } from './post';
import { userReducer } from './user';
import { commentReducer } from './comment';
import { albumReducer } from './album';
import { photoReducer } from './photo';
import { globalReducer } from './global';


const reducer = combineReducers({
    postReducer,
    userReducer,
    commentReducer,
    albumReducer,
    photoReducer,
    globalReducer
});

export default reducer;
