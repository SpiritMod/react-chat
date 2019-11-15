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
  startDialogsFetching: () => {
    return {
      type: types.dialogs.DIALOGS_START_FETCHING
    }
  },
  stopDialogsFetching: () => {
    return {
      type: types.dialogs.DIALOGS_STOP_FETCHING
    }
  },
  setDialogsFetchingError: (error) => {
    return {
      type: types.dialogs.DIALOGS_FETCHING_ERROR,
      payload: error
    }
  },

  setCurrentDialogId: id => {
    return {
      type: types.dialogs.DIALOGS_SET_CURRENT_DIALOG_ID,
      payload: id
    }
  },

  // Async
  fetchDialogs: () => dispatch => {
    dispatch({
      type: types.dialogs.DIALOGS_FETCH_ITEMS
    });

    dispatch(actions.startDialogsFetching());

    dialogsApi.getAll().then(({data}) => {
      dispatch(actions.setDialogs(data));
    }).catch( (error) => {
      dispatch(actions.setDialogsFetchingError(error));
    })
    .finally( () => {
      dispatch(actions.stopDialogsFetching());
    });

  }
};

export default actions;

