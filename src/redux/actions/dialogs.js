import types from '../types';
import { dialogsApi } from "../../utils/api";

const actions = {
  // Sync
  setDialogs: (items) => {
    return {
      type: types.dialogs.DIALOGS_SET_ITEMS,
      payload: items
    }
  },

  // Async
  fetchDialogs: () => dispatch => {
    dispatch({
      type: types.dialogs.DIALOGS_FETCH_ITEMS
    });
    dialogsApi.getAll().then(({data}) => {
      dispatch(actions.setDialogs(data));
    });
  }
};

export default actions;

