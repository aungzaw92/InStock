import { Link, useNavigate } from 'react-router-dom';
import './WarehouseMob.scss';
import arrowIcon from '../../assets/Icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';

const WarehouseMob = ({ warehouse, handleDeleteClick }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="WarehouseMobDisplay">
        <div className="WarehouseMobTxt">
          <div className="WarehouseMobTxt__left">
            <div className="WarehouseMobTxt__titleAndItem">
              <p className="WarehouseMobTxt__titleAndItem--label">WAREHOUSE</p>
              <p
                className="WarehouseMobTxt__titleAndItem--item WarehouseMobTxt__titleAndItem--item-withArrow"
                onClick={() => navigate(`/warehouses/${warehouse.id}/detail`)}
              >
                {warehouse.warehouse_name}{' '}
                <img
                  className="WarehouseMobTxt__arrowIcn"
                  src={arrowIcon}
                  alt="Right arrow icon"
                />
              </p>
            </div>
            <div className="WarehouseMobTxt__titleAndItem">
              <p className="WarehouseMobTxt__titleAndItem--label">ADDRESS</p>
              <p className="WarehouseMobTxt__titleAndItem--item">
                {warehouse.address}
              </p>
            </div>
          </div>
          <div className="WarehouseMobTxt__right">
            <div className="WarehouseMobTxt__titleAndItem">
              <p className="WarehouseMobTxt__titleAndItem--label">
                CONTACT NAME
              </p>
              <p className="WarehouseMobTxt__titleAndItem--item ">
                {warehouse.contact_name}
              </p>
            </div>
            <div className="WarehouseMobTxt__titleAndItem">
              <p className="WarehouseMobTxt__titleAndItem--label">
                CONTACT INFORMATION
              </p>
              <p className="WarehouseMobTxt__titleAndItem--item ">
                {warehouse.contact_phone}
                <br /> {warehouse.contact_email}
              </p>
            </div>
          </div>
        </div>
        <div className="WarehouseMobIcons">
          <Link to={''}>
            <img
              className="WarehouseMobIcons__icon"
              src={deleteIcon}
              alt="delete icon"
              onClick={() =>
                handleDeleteClick(true, warehouse.id, warehouse.warehouse_name)
              }
            />{' '}
          </Link>
          <Link to={`/warehouses/${warehouse.id}/edit`}>
            <img
              className="WarehouseMobIcons__icon"
              src={editIcon}
              alt="edit icon"
            />{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WarehouseMob;
