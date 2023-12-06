import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';

import './WarehouseDetailsCard.scss';

function WarehouseDetailsHeader() {
  const [warehouseDetails, setWarehouseDetails] = useState(null);
  const { warehouseid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8888/warehouses/${warehouseid}`)
      .then((response) => {
        if (response.status === 200) {
          const warehouseData = response.data[0];
          setWarehouseDetails(warehouseData);
        } else {
          console.error('Unexpected API response:', response);
        }
      })
      .catch((error) => {
        console.error('API error:', error);
      });
  }, [warehouseid]);

  if (!warehouseDetails) {
    return <h1>This warehouse does not exist or an error occurred</h1>;
  }

  return (
    <div className="container">
      <main className="warehouse-details ">
        <div className="warehouse-details__address-container">
          <h2 className="warehouse-details__heading">WAREHOUSE ADDRESS</h2>
          <p className="warehouse-details__info warehouse-details__address">
            {`${warehouseDetails.address}, ${warehouseDetails.city}, ${warehouseDetails.country}`}
          </p>
        </div>
        <div className="warehouse-details__contact-container">
          <div className="warehouse-details__contact-name-container">
            <h2 className="warehouse-details__heading">CONTACT NAME:</h2>
            <p className="warehouse-details__info">
              {warehouseDetails.contact_name}
            </p>
            <p className="warehouse-details__info">
              {warehouseDetails.contact_position}
            </p>
          </div>
          <div className="warehouse-details__contact-info-container">
            <h2 className="warehouse-details__heading">CONTACT INFORMATION:</h2>
            <p className="warehouse-details__info">
              {warehouseDetails.contact_phone}
            </p>
            <p className="warehouse-details__info">
              {warehouseDetails.contact_email}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WarehouseDetailsHeader;
