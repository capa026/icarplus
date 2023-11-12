import { useEffect, useState } from 'react';
import { Navbar } from './components';

function App() {
  const [users, setUsers] = useState([]);
  const email = 'carlos@example.com';
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/users/${email}`);
      const json = await response.json();
      setUsers(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => getData, []);

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
