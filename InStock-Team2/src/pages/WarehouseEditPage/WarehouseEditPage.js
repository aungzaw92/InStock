import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader';
import WarehouseEditForm from '../../components/WarehouseEditForm/WarehouseEditForm';
import './WarehouseEditPage.scss';

const WarehouseEditPage = () => {
  document.title = 'In Stock/Warehouse Edit Page';
  const [warehouse, setWarehouse] = useState();
  const { warehouseid } = useParams();

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

  return (
    <div className="WarehouseEditPage">
      {warehouse && <PageHeader pageTitle="Edit Warehouse" />}
      {warehouse && (
        <WarehouseEditForm warehouse={warehouse} warehouseid={warehouseid} />
      )}
    </div>
  );
};
export default WarehouseEditPage;
