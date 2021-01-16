import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
