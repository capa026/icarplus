import { useEffect } from 'react';
import { Navbar } from './components';

function App() {
  const getData = async () => {
    const email = 'carlos@example.com';
    try {
      const reponse = await fetch(`http://localhost:8080/users`);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getData(), []);
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
