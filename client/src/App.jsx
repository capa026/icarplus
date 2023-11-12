import { useEffect } from 'react';
import { Navbar } from './components';

function App() {
<<<<<<< HEAD
  const getData = async (data) => {
    try {
      await fetch();
=======
  const getData = async () => {
    const email = 'carlos@example.com';
    try {
      const reponse = await fetch(`http://localhost:8080/users`);
      const json = await response.json();
      console.log(json);
>>>>>>> features
    } catch (error) {
      console.error(error);
    }
  };

<<<<<<< HEAD
=======
  useEffect(() => getData(), []);
>>>>>>> features
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
