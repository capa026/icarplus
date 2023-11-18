import AddButton from '../components/AddButton';

const Clients = ({ users }) => {
  if (!users) return 'Loading...';
  return (
    <div className="clients">
      <div
        className="wrapper"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid black',
          margin: '0 0.5rem 1rem 0.5rem',
          padding: '0.5rem 0',
        }}
      >
        <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>
          Lista de clientes
        </span>
        <AddButton title={'Añadir Cliente'} btnSize={'1.5rem'} />
      </div>
    </div>
  );
};
export default Clients;
