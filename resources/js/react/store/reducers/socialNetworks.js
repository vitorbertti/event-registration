const initialState = {
    data: []
};

const socialNetworksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SOCIALNETWORKS":
            return { ...state, data: [...state.data, action.socialNetwork] };
        default:
            return state;
    }
};

export default socialNetworksReducer;
