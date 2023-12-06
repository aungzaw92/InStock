import sortIcon from '../../assets/Icons/sort-24px.svg';
import './InventoryListHeader.scss';

const InventoryListHeader = ({ handleSort }) => {
  return (
    <>
      <div className="container InventoryListHeaderDisplay ">
        <ul className="InventoryListHeader">
          <li className="InventoryListHeader__titleAndIcn">
            INVENTORY ITEM{' '}
            <img
              className="InventoryListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
              onClick={() => {
                handleSort('item_name');
              }}
            />
          </li>
          <li className="InventoryListHeader__titleAndIcn">
            CATEGORY{' '}
            <img
              className="InventoryListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
              onClick={() => {
                handleSort('category');
              }}
            />
          </li>
          <li className="InventoryListHeader__titleAndIcn">
            STATUS{' '}
            <img
              className="InventoryListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
              onClick={() => {
                handleSort('status');
              }}
            />
          </li>
          <li className="InventoryListHeader__titleAndIcn">
            QTY{' '}
            <img
              className="InventoryListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
              onClick={() => {
                handleSort('quantity');
              }}
            />
          </li>
          <li className="InventoryListHeader__titleAndIcn">
            WAREHOUSES{' '}
            <img
              className="InventoryListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
              onClick={() => {
                handleSort('warehouse_id');
              }}
            />
          </li>
          <li className="InventoryListHeader__titleAndIcn">ACTION </li>
        </ul>
      </div>
    </>
  );
};
export default InventoryListHeader;
