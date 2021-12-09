import Profile from './components/Profile';
import './App.css';
import user from './data/user.json';

function App() {
  return (
    <Profile
      username={user.username}
      avatar={user.avatar}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
}

export default App;
