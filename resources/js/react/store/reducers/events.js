const initialState = {
    data: []
};

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_EVENTS":
            return { ...state, data: [...state.data, action.event] };
        default:
            return state;
    }
};

export default eventsReducer;
