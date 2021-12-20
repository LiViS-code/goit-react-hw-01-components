import PropTypes from 'prop-types';
import userDefaultAvatar from '../../images/usr_default.png';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, isOnline, avatar = userDefaultAvatar, name }) => (
        <li className={isOnline ? 'item online' : 'item'} key={id}>
          <span className={isOnline ? 'status online' : 'status'}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propsTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
