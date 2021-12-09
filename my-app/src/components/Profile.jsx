import PropTypes from 'prop-types';
import userDefaultAvatar from '../images/usr_default.png'

function Profile({ avatar = userDefaultAvatar, username, tag, location, followers = 0, views = 0, likes = 0 }) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={username} class="avatar" width = "150"/>
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>

        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>

        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
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
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}

export default Profile;