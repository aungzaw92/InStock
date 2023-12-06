import sortIcon from '../../assets/Icons/sort-24px.svg';
import './WarehouseListHeader.scss';

const WarehouseListHeader = ({ handleSort }) => {
  return (
    <>
      <div className="container WarehouseListHeaderDisplay ">
        <ul className="WarehouseListHeader">
          <li className="WarehouseListHeader__titleAndIcn">
            WAREHOUSE{' '}
            <img
              className="WarehouseListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
              onClick={() => {
                handleSort('warehouse_name');
              }}
            />
          </li>
          <li className="WarehouseListHeader__titleAndIcn">
            ADDRESS{' '}
            <img
              className="WarehouseListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
              onClick={() => {
                handleSort('address');
              }}
            />
          </li>
          <li className="WarehouseListHeader__titleAndIcn">
            CONTACT NAME{' '}
            <img
              className="WarehouseListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
              onClick={() => {
                handleSort('contact_name');
              }}
            />
          </li>
          <li className="WarehouseListHeader__titleAndIcn">
            CONTACT INFORMATION{' '}
            <img
              className="WarehouseListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
              onClick={() => {
                handleSort('contact_email');
              }}
            />
          </li>
          <li className="WarehouseListHeader__titleAndIcn WarehouseListHeader__titleAndIcn-action">
            ACTION{' '}
          </li>
        </ul>
      </div>
    </>
  );
};

export default WarehouseListHeader;
