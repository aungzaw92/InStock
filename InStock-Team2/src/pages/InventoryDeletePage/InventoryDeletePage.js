import Button from '../../components/Button/Button';
import closeIcon from '../../assets/Icons/close-24px.svg';
import './InventoryDeletePage.scss';
import axios from 'axios';

const InventoryDeletePage = ({ onClose, show, inventoryName, inventoryId }) => {
  if (!show) {
    return null;
  }
  const handleSubmit = () => {
    axios
      .delete(`http://localhost:8888/inventory/${inventoryId}`, {
        headers: {},
        data: {
          idToDelete: inventoryId,
        },
      })
      .then((res) => {
        console.log(res);
        onClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="inventoryDeleteContainer">
      <div className="inventoryDelete">
        <div className="inventoryDelete__closeIcn">
          <img onClick={onClose} src={closeIcon} alt="close icon" />
        </div>
        <div className="inventoryDelete__txt">
          <h1 className="inventoryDelete__txt-header">
            Delete {inventoryName} inventory item?
          </h1>
          <p className="inventoryDelete__txt-p">
            Please confirm that you'd like to delete the {inventoryName} from
            the inventory list. You won't be able to undo this action.
          </p>
        </div>
        <div className="inventoryDelete__bottomIcons">
          <Button btnTxt="Cancel" onClick={onClose} />
          <Button btnTxt="Delete" onClick={handleSubmit} />
        </div>{' '}
      </div>
    </div>
  );
};
export default InventoryDeletePage;
