import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dialogsActions } from '../../../redux/actions';

export const useDialogsFetch = () => {
  const { items, currentDialogId } = useSelector((state) => state.dialogs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!items.length) {
      dispatch(dialogsActions.fetchDialogs());
    } else {
      //dispatch(dialogsActions.setDialogs(items))
    }
  }, [dispatch, items]);

  const setCurrentDialogId = (id) => dispatch(dialogsActions.setCurrentDialogId(id));

  return {
    items,
    currentDialogId,
    setCurrentDialogId
  }
};
