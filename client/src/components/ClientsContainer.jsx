import Barcode from 'react-barcode';

const ClientsContainer = ({ clients }) => {
  return (
    <div className="clients--container">
      <table>
        <tbody>
          <tr>
            <th>QR</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Modelo</th>
            <th>Tipo</th>
            <th>Año</th>
            <th>Repuesto</th>
          </tr>
          {clients.map((client) => (
            <tr className="client" key={client.id}>
              <td>
                <Barcode
                  value={client.id}
                  width={0.3}
                  height={40}
                  displayValue={false}
                />
              </td>
              <td>{client.first_name}</td>
              <td>{client.last_name}</td>
              <td>{client.car_model}</td>
              <td>{client.car_type}</td>
              <td>{client.car_year}</td>
              <td>{client.auto_part}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ClientsContainer;
