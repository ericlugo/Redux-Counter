export const INCREMENT = 'INCREMENT';
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const incrementIfOdd = () => {
  return {
    type: INCREMENT_IF_ODD,
  };
};

export const incrementAsync = () => {
  return {
    type: INCREMENT_ASYNC,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
