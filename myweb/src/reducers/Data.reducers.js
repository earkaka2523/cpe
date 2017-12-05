
var dataReducer = (state = [], action) => {
  switch(action.type) {
    case "GET_COMMENT_FULFILLED":
      state = action.payload.data;
      break;
    default:
      break;
  };
  return state;
};


export default dataReducer;
