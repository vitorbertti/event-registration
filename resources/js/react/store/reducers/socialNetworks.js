const socialNetworksReducer = (state = [], action) => {
   switch(action.type) {
      case 'ADD_SOCIALNETWORKS':
         return [...state];
      default:
         return state;
   }
}

export default socialNetworksReducer;