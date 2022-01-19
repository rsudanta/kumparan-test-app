const initPost = {
    album: [],
};

export const albumReducer = (state = initPost, action) => {
    if (action.type === 'SET_ALBUM') {
        return {
            ...state,
            album: action.value
        };
    }
    return state;
};
