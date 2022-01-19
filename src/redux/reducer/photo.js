const initPost = {
    photo: [],
};

export const photoReducer = (state = initPost, action) => {
    if (action.type === 'SET_PHOTO') {
        return {
            ...state,
            photo: action.value
        };
    }
    return state;
};
