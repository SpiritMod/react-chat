import types from '../types';
import { messagesApi } from "../../utils/api";

const actions = {
  // Sync
  setMessages: (items) => {
    return {
      type: types.messages.MESSAGES_SET_ITEMS,
      payload: items
    }
  },
  startMessagesFetching: () => {
    return {
      type: types.messages.MESSAGES_START_FETCHING
    }
  },
  stopMessagesFetching: () => {
    return {
      type: types.messages.MESSAGES_STOP_FETCHING
    }
  },
  setMessagesFetchingError: (error) => {
    return {
      type: types.messages.MESSAGES_FETCHING_ERROR,
      payload: error
    }
  },

  // Async
  fetchMessages: dialogId => dispatch => {
    dispatch({
      type: types.messages.MESSAGES_FETCH_ITEMS
    });

    dispatch(actions.startMessagesFetching());

    messagesApi.getAllByDialogId(dialogId).then(({data}) => {
      dispatch(actions.setMessages(data));
    }).catch( (error) => {
      dispatch(actions.setMessagesFetchingError(error));
    })
    .finally( () => {

      dispatch(actions.stopMessagesFetching());

    });

  }
};

export default actions;

