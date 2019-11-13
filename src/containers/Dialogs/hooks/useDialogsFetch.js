import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dialogsActions } from '../../../redux/actions';

export const useDialogsFetch = () => {
  const { items } = useSelector((state) => state.dialogs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!items.length) {
      dispatch(dialogsActions.fetchDialogs());
    }
  }, [dispatch, items]);

  return {
    items
  }
};