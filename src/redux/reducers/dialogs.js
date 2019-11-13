import types from '../types';

const initialState = {
  items: []
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.dialogs.DIALOGS_SET_ITEMS:
      return {
        ...state,
        items: payload
      };
    default:
      return state
  }
};
