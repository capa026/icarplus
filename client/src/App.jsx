import { Navbar } from './components';

function App() {
  const getData = async (data) => {
    try {
      await fetch();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
