const initPost = {
    post: [],
};

export const postReducer = (state = initPost, action) => {
    if (action.type === 'SET_POST') {
        return {
            ...state,
            post: action.value
        };
    }
    return state;
};
