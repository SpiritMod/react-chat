import React, { useState } from 'react';
import { Icon, Input, Button } from 'antd';
//import PropTypes from 'prop-types';
//import classNames from 'classnames';

import './ChatInput.scss';

const SendSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 448.011 448.011">
    <path d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4
			l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472
			l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z"/>
  </svg>
);

const SendIcon = props => <Icon component={SendSvg} {...props} />;


const ChatInput = props => {
  const [value, setValue] = useState("");

  return (
    <div className="chat-input ">
      <div className="chat-input__smile-btn">
        <Button shape="circle" icon="smile" />
      </div>
      <Input
        size="large"
        placeholder="Введите текст сообщения…"
        onChange={ e => setValue(e.target.value)}
      />
      <div className="chat-input__actions">
        <Button shape="circle" icon="camera" />
        { value ?
          <Button type="link" shape="circle" ><SendIcon className="anticon-send"/></Button>
          :
          <Button type="link" shape="circle" icon="audio" />
        }
      </div>
    </div>
  )
};

export default ChatInput;
