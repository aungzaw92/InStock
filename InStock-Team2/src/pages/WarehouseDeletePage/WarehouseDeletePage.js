import Button from '../../components/Button/Button';
import closeIcon from '../../assets/Icons/close-24px.svg';
import './WarehouseDeletePage.scss';
import axios from 'axios';

const WarehouseDeletePage = ({ onClose, show, warehouseName, warehouseId }) => {
  if (!show) {
    return null;
  }
  const handleSubmit = () => {
    axios
      .delete(`http://localhost:8888/warehouses/${warehouseId}`, {
        headers: {},
        data: {
          idToDelete: warehouseId,
        },
      })
      .then((res) => {
        console.log(res);
        onClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="warehouseDeleteContainer">
      <div className="warehouseDelete">
        <div className="warehouseDelete__closeIcn">
          <img onClick={onClose} src={closeIcon} alt="close icon" />
        </div>
        <div className="warehouseDelete__txt">
          <h1 className="warehouseDelete__txt-header">
            Delete {warehouseName} warehouse?
          </h1>
          <p className="warehouseDelete__txt-p">
            Please confirm that you’d like to delete the {warehouseName} from
            the list of warehouses. You won’t be able to undo this action.
          </p>
        </div>
        <div className="warehouseDelete__bottomIcons">
          <Button btnTxt="Cancel" onClick={onClose} />
          <Button btnTxt="Delete" onClick={handleSubmit} />
        </div>{' '}
      </div>
    </div>
  );
};
export default WarehouseDeletePage;
