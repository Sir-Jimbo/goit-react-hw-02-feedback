import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.container}>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          <FriendListItem
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
