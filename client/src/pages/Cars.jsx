import { useState, useEffect } from 'react';
import { useFetch } from '../utils/useFetch';

const Cars = () => {
  const [cars, setCars] = useState(null);
  const carsUrl = import.meta.env.VITE_LOCAL_DB_URL + 'cars';
  const { data, isLoading } = useFetch(carsUrl);

  useEffect(() => {
    if (data) {
      setCars(data);
    }
  }, [data]);
  if (!cars) return '';

  return (
    <div className="clients--container">
      <table>
        <tbody>
          <tr>
            <th>Cliente</th>
            <th>Modelo</th>
            <th>Tipo</th>
            <th>Año</th>
            <th>Parte Asignada</th>
            <th>Descripcion</th>
          </tr>
          {cars.map((car) => (
            <tr className="client" key={car.id}>
              <td>{car.client_name}</td>
              <td>{car.model}</td>
              <td>{car.type}</td>
              <td>{car.car_year}</td>
              <td>{car.auto_part_assigned}</td>
              <td>{car.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Cars;
