const initialState = {
  counter: 1
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
}

export default counterReducer;
