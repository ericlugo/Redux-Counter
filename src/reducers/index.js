import { INCREMENT, INCREMENT_IF_ODD, INCREMENT_ASYNC, DECREMENT } from '../actions';

const initialState = {
  count: 0,
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return (state = {
        ...state,
        count: state.count + 1,
      });
    case DECREMENT:
      return (state = {
        ...state,
        count: state.count - 1,
      });
    case INCREMENT_IF_ODD:
      if (state.count % 2 === 1) {
        return (state = {
          ...state,
          count: state.count + 1,
        });
      }
    case INCREMENT_ASYNC:
      setTimeout(() => {
        console.log(state);
        return (state = {
          ...state,
          count: state.count + 1,
        });
      }, 1000);
    default:
      return state;
  }
};
