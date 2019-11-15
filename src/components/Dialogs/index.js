import React from 'react';
import { Input, Empty } from 'antd';
import orderBy from 'lodash/orderBy';
import { DialogItem } from '../';
//import classNames from 'classnames';
//import isToday from 'date-fns/is_today';

import './Dialogs.scss';

const Dialogs = ({ items, userId, onSearch, inputValue, onSelectDialog }) => {
  return (
    <div className="dialogs">
      <div className="dialogs dialogs__search">
        <Input.Search
          placeholder="Поиск среди контактов"
          onChange={e => onSearch(e.target.value)}
          value={inputValue}
        />
      </div>
      <div className="dialogs__content">
        {
          items.length ? orderBy(items, ["created_at"], ["desc"]).map(item => (
            <DialogItem
              key={item._id}
              isMe={item.user._id === userId}
              onSelect={onSelectDialog}
              {...item}
            />
          )) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено"/>
        }
      </div>
    </div>
  )
};

export default Dialogs;
