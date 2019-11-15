import types from '../types';

const initialState = {
  items: [],
  isFetching: false
};

export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case types.messages.MESSAGES_SET_ITEMS:
      return {
        ...state,
        items: payload
      };
    case types.messages.MESSAGES_START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.messages.MESSAGES_STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state
  }
};
