import React from 'react';
import {Form, Icon, Input} from "antd";
import { Link } from 'react-router-dom';

import { Button, Block } from "components";
import { validateField } from "utils/helpers";

// const validate = (key, touched, errors) => {
//   if (touched[key]) {
//     if (errors[key]) {
//       return "error";
//     } else {
//       return "success";
//     }
//   } else {
//     return "";
//   }
// };

const LoginForm = props => {
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
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item
            validateStatus={validateField("email", touched, errors)}
            help={!touched.email ? "" : errors.email}
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
          <Form.Item
            validateStatus={validateField("password", touched, errors)}
            help={!touched.password ? "" : errors.password}
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
            {
              isSubmitting && !isValid && <span>Ошибка!</span>
            }
            <Button onClick={handleSubmit} type='primary' size='large' htmlType="submit">Войти в аккаунт</Button>
          </Form.Item>
          <Link to="/register" className="auth--register-link">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </div>

    /*<div>

      <Block>

        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item validateStatus="success" hasFeedback>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="E-Mail"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Пароль"
              size="large"
            />
          </Form.Item>



        </Form>
      </Block>
    </div>*/
  );
};

export default LoginForm;
