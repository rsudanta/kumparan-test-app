const initPost = {
    comment: [],
};

export const commentReducer = (state = initPost, action) => {
    if (action.type === 'SET_COMMENT') {
        return {
            ...state,
            comment: action.value
        };
    }
    return state;
};
