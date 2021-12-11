import './App.css';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/Friend-list';
import TransactionHistory from './components/Transaction';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transaction from './data/transaction.json';

function App() {
  return (
    <>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList props={friends} />
      <TransactionHistory props={transaction} />
    </>
  );
}

export default App;
