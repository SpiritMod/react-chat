import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dialogsMessages } from '../../../redux/actions';

export const useMessagesFetch = () => {
  const { currentDialogId } = useSelector((state) => state.dialogs);
  const { items, isFetching } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!currentDialogId) {
      dispatch(dialogsMessages.fetchMessages(currentDialogId));
    }
  }, [dispatch, currentDialogId]);


  return {
    items,
    currentDialogId,
    isFetching
  }
};
