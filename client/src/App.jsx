import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar } from './components';
import { Feed, Cars, AutoParts, AutoMechanics, Clients } from './pages';
import { useFetch } from './utils/useFetch';
function App() {
  const [users, setUsers] = useState([]);
  const email = 'carlos@example.com';
  const usersUrl = import.meta.env.VITE_LOCAL_USERS_DB_URL;
  const { data, isLoading } = useFetch(usersUrl);

  if (isLoading) return 'Loading...';

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
            <Route path="/auto_mechanics" element={<AutoMechanics />} />
            <Route path="/clients" element={<Clients users={data} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
