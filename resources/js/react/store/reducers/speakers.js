const initialState = {
    data: []
};

const speakersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SPEAKERS":
            return { ...state, data: [...state.data, action.speaker] };
        default:
            return state;
    }
};

export default speakersReducer;
