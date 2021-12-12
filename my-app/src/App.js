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
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transaction} />
    </>
  );
}

export default App;
