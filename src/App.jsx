import ProfileList from './components/ProfileList/ProfileList';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friend from './friends.json';
import transactions from './transactions.json';

export default function App() {
  return (
    <div>
      <ProfileList items={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friend} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
