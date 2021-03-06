import types from '../types';

const initialState = {
  items: [],
  isFetching: false,
  currentDialogId: null
};

export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case types.dialogs.DIALOGS_SET_ITEMS:
      return {
        ...state,
        items: payload
      };
    case types.dialogs.DIALOGS_START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.dialogs.DIALOGS_STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case types.dialogs.DIALOGS_SET_CURRENT_DIALOG_ID:
      return {
        ...state,
        currentDialogId: payload
      };
    default:
      return state
  }
};
