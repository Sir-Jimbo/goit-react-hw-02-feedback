import React from 'react';
import Profile from '../Profile/Profile';
import PropTypes from 'prop-types';

function ProfileList({ items }) {
  return (
    <ul>
      {items.map(user => (
        <li key={user.tag}>
          <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
          />
        </li>
      ))}
    </ul>
  );
}

ProfileList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
    }),
  ),
};

export default ProfileList;
