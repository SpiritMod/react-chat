import React, { useState, useEffect } from 'react';

import { Dialogs as BaseDialogs } from 'components';

import { useDialogsFetch } from './hooks/useDialogsFetch';

const Dialogs = ({ userId }) => {

  const { items } = useDialogsFetch();

  const [inputValue, setValue] = useState('');
  const [filtred, setFiltredItems] = useState(Array.from(items));



  useEffect(() => {
    if (items.length) {
      setFiltredItems(items);
    }
  }, [items]);


  const onChangeInput = value => {

    setFiltredItems(
      items.filter(
        dialog =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );

    setValue(value);
  };

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
    />
  );
};


export default Dialogs;
