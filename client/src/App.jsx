import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar } from './components';
import { Feed, Cars, AutoParts, AutoMechanics, Clients } from './pages';
import { useFetch } from './utils/useFetch';
import { ClimbingBoxLoader } from 'react-spinners';

function App() {
  const [clients, setClients] = useState(null);
  const clientsUrl = import.meta.env.VITE_LOCAL_DB_URL + 'clients';
  const autoMechanicsUrl = import.meta.env.VITE_LOCAL_DB_URL + 'auto_mechanics';
  const { data: auto_mechanics, isLoading: mechLoading } =
    useFetch(autoMechanicsUrl);

  const getClients = async () => {
    try {
      const response = await fetch(clientsUrl);
      const json = await response.json();
      setClients(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getClients);

  if (!clients && mechLoading)
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ClimbingBoxLoader color="rgba(255, 255, 255, 1)" size={12} />
      </div>
    );

  return (
    <BrowserRouter>
      <Navbar />

      <div className="routes--container">
        <Sidebar />
        <div className="routes">
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/auto_parts" element={<AutoParts />} />
            <Route
              path="/auto_mechanics"
              element={<AutoMechanics auto_mechanics={auto_mechanics} />}
            />
            <Route
              path="/clients"
              element={<Clients clients={clients} getClients={getClients} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
