import { CloseCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Modal = ({ showModal, setShowModal }) => {
  const mode = 'create';
  const editMode = mode === 'edit' ? true : false;

  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    car_model: '',
    car_type: '',
    car_year: '',
    auto_part: '',
    description: '',
  });

  const postData = async (e) => {
    e.preventDefault();
    try {
      setShowModal(false);
      const response = await fetch(
        import.meta.env.VITE_LOCAL_DB_URL + 'clients',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((lastData) => ({
      ...lastData,
      [name]: value,
    }));
  };

  return (
    <div
      className="modal--overlay"
      style={{ display: showModal ? 'flex' : 'none' }}
    >
      <div className="modal">
        <div className="modal--title">
          <h3>Informacion del cliente</h3>
          <button onClick={() => setShowModal(!showModal)}>
            <CloseCircleOutlined />
          </button>
        </div>
        <div className="modal--content">
          <form className="form">
            <input
              required
              type="text"
              maxLength={50}
              placeholder="First Name"
              value={data.first_name}
              name="first_name"
              onChange={handleChange}
            />
            <input
              required
              type="text"
              maxLength={50}
              placeholder="Last Name"
              value={data.last_name}
              name="last_name"
              onChange={handleChange}
            />
            <input
              required
              type="text"
              maxLength={255}
              placeholder="Car Model"
              value={data.car_model}
              name="car_model"
              onChange={handleChange}
            />
            <input
              required
              type="text"
              maxLength={255}
              placeholder="Car type"
              value={data.car_type}
              name="car_type"
              onChange={handleChange}
            />
            <input
              required
              type="number"
              maxLength={4}
              placeholder="Car year"
              value={data.car_year}
              name="car_year"
              onChange={handleChange}
            />
            <input
              required
              maxLength={255}
              placeholder="Auto Part Assigned"
              value={data.auto_part}
              name="auto_part"
              onChange={handleChange}
            />
            <input
              maxLength={255}
              placeholder="Description"
              value={data.description}
              name="description"
              onChange={handleChange}
            />
            <input type="submit" value="AGREGAR" onClick={postData} />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Modal;
