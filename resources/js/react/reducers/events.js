const eventsReducer = (state = [], action) => {
   switch(action.type) {
      case 'LIST':
         return 'success';
      default:
         return state;
   }
}

export default eventsReducer;