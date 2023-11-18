import { PlusCircleOutlined } from '@ant-design/icons';

const AddButton = ({ title, style, btnSize, click }) => {
  return (
    <div className="addButton" style={style} onClick={click}>
      <span>{title}</span>
      <PlusCircleOutlined style={{ fontSize: btnSize || '2rem' }} />
    </div>
  );
};
export default AddButton;
