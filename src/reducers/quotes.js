export default (state = [], action) => {
  switch(action.type) {
    
    case "ADD_QUOTE":
      return [...state, action.quote];
    //calling action.quote bc that how we named in the actin, but alwase use payload  

    case "REMOVE_QUOTE":
      const newQuotes = state.filter(q => q.id !== action.quoteId)
      
      return newQuotes;

    default:
      return state;
  }
}
 
