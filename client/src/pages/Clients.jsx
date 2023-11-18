import { PlusCircleOutlined } from '@ant-design/icons';

const Clients = ({ users }) => {
  if (!users) return 'Loading...';
  return (
    <div className="clients">
      Add User
      <PlusCircleOutlined style={{ fontSize: '2rem' }} />
    </div>
  );
};
export default Clients;
