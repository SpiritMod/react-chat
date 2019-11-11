import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';
import { IconReaded, Avatar } from '../';

import './DialogItem.scss';

const getMessageTime = created_at => {
  if (isToday(created_at)) {
    return format(
      created_at,
      'HH:mm'
    )
  } else {
    return format(
      created_at,
      'DD.MM.YYYY'
    )
  }
};

const DialogItem = ({ user, text, unreaded, created_at, isMe }) => (
  <div className={classNames('dialogs__item', {'dialogs__item-online': user.isOnline})}>
    <div className="dialogs__item-avatar">
      <Avatar user={user}/>
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>{getMessageTime(created_at)}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <div className="text">
          <p>{text}</p>
        </div>
        { isMe &&  <IconReaded isMe={true} isReaded={true} />}
        {unreaded > 0 && <div className="dialogs__item-unread-count">{unreaded}</div>}
      </div>
    </div>
  </div>
);

export default DialogItem;
