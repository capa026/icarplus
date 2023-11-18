import { PlusCircleOutlined } from '@ant-design/icons';

const AddButton = ({ title, style, btnSize }) => {
  return (
    <div className="addButton" style={style}>
      <span>{title}</span>
      <PlusCircleOutlined style={{ fontSize: btnSize || '2rem' }} />
    </div>
  );
};
export default AddButton;
