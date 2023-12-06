import { Link, useNavigate } from 'react-router-dom';
import './InventoryItemMob.scss';
import arrowIcon from '../../assets/Icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';

const InventoryItemMob = ({ inventory, handleDeleteClick }) => {
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
    <div className=" ">
      <div className="InventoryItemMobDisplay">
        <div className="inventoryItemMobTxt">
          <div className="inventoryItemMobTxt__left">
            <div className="inventoryItemMobTxt__titleAndItem">
              <p className="inventoryItemMobTxt__titleAndItem--label">
                INVENTORY ITEM
              </p>
              <p
                className="inventoryItemMobTxt__titleAndItem--item inventoryItemMobTxt__titleAndItem--item-withArrow"
                onClick={() => navigate(`/inventory/${inventory.id}`)}
              >
                {inventory.item_name}{' '}
                <img
                  className="inventoryItemMobTxt__arrowIcn"
                  src={arrowIcon}
                  alt="Right arrow icon"
                />
              </p>
            </div>
            <div className="inventoryItemMobTxt__titleAndItem">
              <p className="inventoryItemMobTxt__titleAndItem--label">
                CATEGORY
              </p>
              <p className="inventoryItemMobTxt__titleAndItem--item">
                {inventory.category}
              </p>
            </div>
          </div>
          <div className="inventoryItemMobTxt__right">
            <div className="inventoryItemMobTxt__titleAndItem">
              <p className="inventoryItemMobTxt__titleAndItem--label">STATUS</p>
              <p
                className={`inventoryItemMobTxt__titleAndItem--itemStatus  ${
                  inventory.quantity > 0
                    ? 'inventoryItemMobTxt__titleAndItem--itemStatus-inStock'
                    : 'inventoryItemMobTxt__titleAndItem--itemStatus-outOfStock'
                }    `}
              >
                {inventory.status}
              </p>
            </div>
            <div className="inventoryItemMobTxt__titleAndItem">
              <p className="inventoryItemMobTxt__titleAndItem--label">QTY</p>
              <p className="inventoryItemMobTxt__titleAndItem--item ">
                {inventory.quantity}
              </p>
            </div>
            <div className="inventoryItemMobTxt__titleAndItem">
              <p className="inventoryItemMobTxt__titleAndItem--label">
                WAREHOUSE
              </p>
              <p className="inventoryItemMobTxt__titleAndItem--item">
                {warehouse[0].warehouse_name}
              </p>
            </div>
          </div>
        </div>
        <div className="inventoryItemMobIcons">
          <Link to={''}>
            <img
              className="inventoryItemMob__icon"
              src={deleteIcon}
              alt="delete icon"
              onClick={() =>
                handleDeleteClick(true, inventory.id, inventory.item_name)
              }
            />
          </Link>
          <Link to={`/inventory/edit/${inventory.id}`}>
            <img
              className="inventoryItemMob__icon"
              src={editIcon}
              alt="edit icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default InventoryItemMob;
