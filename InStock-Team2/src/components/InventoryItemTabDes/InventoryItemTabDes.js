import { Link, useNavigate } from 'react-router-dom';
import './InventoryItemTabDes.scss';
import arrowIcon from '../../assets/Icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';

const InventoryItemTabDes = ({ inventory, handleDeleteClick }) => {
  const [warehouse, setWarehouse] = useState(null);
  const navigate = useNavigate();
  const warehouseid = inventory.warehouse_id;

  useEffect(() => {
    if (warehouseid) {
      axios
        .get(`http://localhost:8888/warehouses/` + warehouseid)
        .then((response) => {
          setWarehouse(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [warehouseid]);

  if (warehouse === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {warehouseid && (
        <div className="container inventoryItemTabDesDisplay ">
          <ul className="inventoryItemTabDes">
            <li
              className="inventoryItemTabDes__li inventoryItemTabDes__li--withIcn"
              onClick={() => navigate(`/inventory/${inventory.id}`)}
            >
              {inventory.item_name}{' '}
              <img
                className="inventoryItemTabDes__li--arrowIcn "
                src={arrowIcon}
                alt="Right arrow icon"
              />
            </li>
            <li className="inventoryItemTabDes__li">{inventory.category}</li>
            <li className="inventoryItemTabDes__li">
              <div
                className={`inventoryItemTabDes__li--status  ${
                  inventory.quantity > 0
                    ? 'inventoryItemTabDes__li--status-inStock'
                    : 'inventoryItemTabDes__li--status-outOfStock'
                }`}
              >
                {inventory.status}
              </div>
            </li>
            <li className="inventoryItemTabDes__li">{inventory.quantity}</li>
            <li className="inventoryItemTabDes__li">
              {warehouse[0].warehouse_name}
            </li>
            <li className="inventoryItemTabDes__li">
              <div className="inventoryItemTabDes__li--delAnEdIcn">
                <Link to={''}>
                  <img
                    className="inventoryItemTabDes__li--delAnEdIcn-icon"
                    src={deleteIcon}
                    alt="delete icon"
                    onClick={() =>
                      handleDeleteClick(true, inventory.id, inventory.item_name)
                    }
                  />
                </Link>
                <Link to={`/inventory/edit/${inventory.id}`}>
                  <img
                    className="inventoryItemTabDes__li--delAnEdIcn-icon"
                    src={editIcon}
                    alt="edit icon"
                  />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default InventoryItemTabDes;
