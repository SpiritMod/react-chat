import React, { useEffect, useRef } from 'react';

import { Messages as BaseMessages } from 'components';

import { useMessagesFetch } from './hooks/useMessagesFetch';

const Messages = () => {
  const messagesRef = useRef(null);
  const { items, currentDialogId, isFetching } = useMessagesFetch();

  useEffect(() => {
    setTimeout( () => {
      messagesRef.current.scrollTo(0,999999);
    }, 0);
  }, [items]);

  return (
    <BaseMessages
      blockRef={messagesRef}
      isLoading={isFetching}
      items={items}
      currentDialogId={currentDialogId}
    />
  );
};


export default Messages;
