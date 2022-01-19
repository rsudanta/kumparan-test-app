const initUser = {
    user: []
};

export const userReducer = (state = initUser, action) => {
    if (action.type === 'SET_USER') {
        return {
            ...state,
            user: action.value
        };
    }
    return state;
};
