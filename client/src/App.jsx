import { useEffect, useState } from 'react';
import { Navbar } from './components';

function App() {
  const [users, setUsers] = useState([]);
  const email = 'carlos@example.com';
  const usersUrl = import.meta.env.VITE_LOCAL_USERS_DB_URL;

  const getData = async () => {
    console.log('fetching');
    try {
      const response = await fetch(`${usersUrl}/${email}`);
      const json = await response.json();
      console.log(json);
      setUsers(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getData(), []);

  if (!users) return 'Loading...';
  console.log(users);
  return (
    <div>
      <Navbar />
      <div>
        {users.map((user) => (
          <h1 key={user.name}>
            Name: {user.name} || Email: {user.email}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default App;
