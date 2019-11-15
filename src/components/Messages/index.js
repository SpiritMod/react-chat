import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin } from 'antd';
import classNames from 'classnames';

import { Message } from '../';
import './Messages.scss';

const Messages = ({ blockRef, isLoading, currentDialogId, items }) => {
  return <div
    ref={blockRef}
    className={classNames('messages', {'messages__loading': isLoading})}
  >
    {
      isLoading && !items ? (
        <Spin size="large" tip="Загрузка сообщений..." />
      ) : items.length ? (
        items.map(item => <Message key={item._id} { ...item } />)
      ) : (
        <Empty description={currentDialogId ? 'Диалог пуст' : 'Откройте диалог'} />
      )
    }
  </div>
    /*<div>

     {/!* <Message
        key='123-1'
        avatar='https://randomuser.me/api/portraits/women/44.jpg'
        date='Thu July 30 2019 14:27:02'
        audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ></Message>
      <Message
        key='123-2'
        avatar='https://randomuser.me/api/portraits/women/44.jpg'
        text='Салам, Брут!'
        date='Thu July 30 2019 14:27:02'
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=5&nature,water',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
          },
        ]}
      ></Message>
      <Message
        key='123-3'
        avatar='https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg'
        text='Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻'
        date='Thu July 30 2019 15:27:02'
        isMe={true}
        isReaded={false}
      ></Message>
      <Message
        key='123-4'
        avatar='https://randomuser.me/api/portraits/women/44.jpg'
        date='Thu July 31 2019 14:27:02'
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/200x200/?random=2&nature,water',
          }
        ]}
      ></Message>
      <Message
        key='123-5'
        avatar='https://randomuser.me/api/portraits/women/44.jpg'
        isTyping
      ></Message>*!/}
    </div>*/
};

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;
