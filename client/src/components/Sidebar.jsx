import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  return (
    <div className="sidebar">
      <Link to="/cars" className={path === 'cars' ? 'selected' : ''}>
        Lista de carros
      </Link>
      <Link
        to="/auto_parts"
        className={path === 'auto_parts' ? 'selected' : ''}
      >
        Repuestos
      </Link>
      <Link
        to="/auto_mechanics"
        className={path === 'auto_mechanics' ? 'selected' : ''}
      >
        Mecanicos
      </Link>
      <Link to="/clients" className={path === 'clients' ? 'selected' : ''}>
        Clientes
      </Link>
    </div>
  );
};
export default Sidebar;
