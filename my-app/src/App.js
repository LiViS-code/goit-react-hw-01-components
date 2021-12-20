import './App.css';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';

import FriendList from './components/Friend-list/Friend-list';
import friends from './components/Friend-list/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transaction from './components/TransactionHistory/transaction.json';

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
