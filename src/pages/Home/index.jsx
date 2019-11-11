import React from 'react';
import {Button, Icon} from 'antd';

import { Messages, Status, ChatInput } from 'components';
import { Dialogs } from 'containers';

import dialogsJSON from 'dialogs.json';

import './Home.scss';

const Home = () => {
  return (
    <section className='home'>
      <div className="chat">
        <div className="chat__sidebar">

          <div className="chat__sidebar-header">
            <div>
              <Icon type="team" />
              <span className="label">Список диалогов</span>
            </div>
            <Button type="link" shape="circle" icon="form" />
          </div>

          {/*<div className="chat__sidebar-search">
            <Input.Search
              placeholder="Поиск среди контактов"
              onSearch={value => console.log(value)}
            />
          </div>*/}

          <div className="chat__sidebar-dialogs">
            <Dialogs userId={1} items={dialogsJSON}/>
          </div>

        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div className="chat__dialog-header-center">
              <div className="chat__dialog-header-username">Гай Юлий Цезарь</div>
              <div className="chat__dialog-header-status">
                <Status online />
              </div>
            </div>
            <Button type="link" shape="circle" icon="ellipsis" />
          </div>
          <div className="chat__dialog-messages">
            <Messages/>
          </div>
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>

      </div>



    </section>
  );
};

export default Home;