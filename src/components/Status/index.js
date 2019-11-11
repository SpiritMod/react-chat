import React from 'react';
//import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Status.scss';

const Status = ({ online }) => (
  <div className={classNames('status', { 'status__online' : online })}>{online ? 'онлайн' : 'офлайн'}</div>
);


export default Status;
