import { useFetch } from '../utils/useFetch';

const Cars = () => {
  const carsUrl = import.meta.env.VITE_LOCAL_DB_URL + 'cars';
  const { data: cars, isLoading } = useFetch(carsUrl);

  if (isLoading) return '';

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
              <td>{client.client_name}</td>
              <td>{client.model}</td>
              <td>{client.type}</td>
              <td>{client.car_year}</td>
              <td>{client.auto_part_assigned}</td>
              <td>{client.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Cars;
