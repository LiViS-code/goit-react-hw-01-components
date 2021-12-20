import PropTypes from 'prop-types';
import numberWithCommas from '../../lib/number-with-commas';
import userDefaultAvatar from '../../images/usr_default.png';

function Profile({ user }) {
  const {
    avatar = userDefaultAvatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" width="150" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{numberWithCommas(followers)}</span>
        </li>

        <li>
          <span className="label">Views</span>
          <span className="quantity">{numberWithCommas(views)}</span>
        </li>

        <li>
          <span className="label">Likes</span>
          <span className="quantity">{numberWithCommas(likes)}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
