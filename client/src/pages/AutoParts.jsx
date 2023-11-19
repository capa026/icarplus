import { useEffect, useState } from 'react';
import { useFetch } from '../utils/useFetch';

const AutoParts = () => {
  const [autoParts, setAutoParts] = useState(null);
  const autoPartsUrl = import.meta.env.VITE_LOCAL_DB_URL + 'auto_parts';
  const { data, isLoading } = useFetch(autoPartsUrl);

  useEffect(() => {
    if (data) {
      setAutoParts(data);
    }
  }, [data]);
  if (!autoParts) return '';

  return (
    <div className="clients--container">
      <table>
        <tbody>
          <tr>
            <th>Nombre del Repuesto</th>
            <th>Cantidad</th>
          </tr>
          {autoParts.map((autoPart) => (
            <tr className="client" key={autoPart.id}>
              <td>{autoPart.name}</td>
              <td>{autoPart.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AutoParts;
