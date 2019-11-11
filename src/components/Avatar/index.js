import React from 'react';
import PropTypes from 'prop-types';

import { generateAvatarFromHash } from 'utils/helpers';

import './Avatar.scss';

const Avatar = ({ user }) => {
  if (user.avatar) {
    return <img src={user.avatar} alt={`Avatar ${user.fullname}`}/>;
  } else {
    const {color, colorLighten} = generateAvatarFromHash(user._id);
    const firstChart = user.fullname.substring(0,1);
    return <div className="avatar"
            style={{
              background: `linear-gradient(135deg, ${color}, ${colorLighten})`
            }}
            >{firstChart}</div>
  }
};

Avatar.propTypes = {
  className: PropTypes.string
};

export default Avatar;
