import React from 'react';
import {Form, Icon, Input} from "antd";
import { Link } from 'react-router-dom';

import { Button, Block } from "components";
import { validateField } from "utils/helpers";

const success = false;

const RegisterForm = props => {
  const {
    //values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
  } = props;

  return (
    <div>
      <div className='auth--top'>
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        { !success ?
          (
            <Form onSubmit={handleSubmit} className="login-form">
              <Form.Item
                validateStatus={validateField("email", touched, errors)}
                help={
                  !touched.email ? '' : errors.email
                }
                hasFeedback
              >
                <Input
                  id="email"
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="E-Mail"
                  size="large"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  id="fullname"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Ваше имя"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                validateStatus={validateField("password", touched, errors)}
                help={
                  !touched.password ? '' : errors.password
                }
                hasFeedback
              >
                <Input
                  id="password"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Пароль"
                  size="large"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  id="password2"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Повторите пароль"
                  size="large"
                />
              </Form.Item>
              <Form.Item>
                {
                  isSubmitting && !isValid && <span>Ошибка!</span>
                }
                <Button onClick={handleSubmit} type='primary' size='large' htmlType="submit">Зарегистрироваться</Button>
              </Form.Item>
              <Link to="/" className="auth--register-link">
                Войти в аккаунт
              </Link>
            </Form>
          ) :
          (
            <div className='auth--success-block'>
              <div className='icon'>
                <Icon style={{ fontSize: '48px' }} type="info-circle" theme="twoTone" />
              </div>
              <h3>Подтвердите свой аккаунт</h3>
              <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
            </div>
          )
        }
      </Block>
    </div>
  );
};

export default RegisterForm;
