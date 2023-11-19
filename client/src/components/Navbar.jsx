import { CarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <h1>
          <CarOutlined />
          IcarPlus CORP.
        </h1>
      </Link>
    </div>
  );
};
export default Navbar;
