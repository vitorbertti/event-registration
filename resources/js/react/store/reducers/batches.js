const initialState = {
   data: []
}

const batchesReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'ADD_BATCHES':
         return {...state, data: [ ...state.data, action.batch ]};
      default:
         return state;
   }
}

export default batchesReducer;