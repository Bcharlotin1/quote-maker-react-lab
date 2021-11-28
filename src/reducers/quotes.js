export default (state = [], action) => {
  switch(action.type) {
    
    case "ADD_QUOTE":
      return [...state, action.quote];
    //calling action.quote bc that how we named in the actin, but alwase use payload  

    case "REMOVE_QUOTE":
      const newQuotes = state.filter(q => q.id !== action.quoteId)
      
      return newQuotes;
    
    case "UPVOTE_QUOTE":
      const indx = state.findIndex(q=> q.id === action.quoteId) 
      const newQuote = {
        ...state[indx],
        votes: state[indx].votes +1
      }
      

      return {
        ...this.state.slice(0, indx),
        newQuote,
        ...this.state.slice(indx + 1)
      };
    
    case "DOWNVOTE_QUOTE":
  
      
      return state;

    default:
      return state;
  }
}
 
