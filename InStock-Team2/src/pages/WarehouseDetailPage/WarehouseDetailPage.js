import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import WarehouseDetailsCard from '../../components/WarehouseDetailsCard/WarehouseDetailsCard';
import axios from 'axios';
import InventoryList from '../../components/InventoryList/InventoryList';
import './WarehouseDetailPage.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import './WarehouseDetailPage.scss';

function WarehouseDetailPage() {
  const [allInventories, setAllInventories] = useState(null);
  const [warehouseName, setWarehouseName] = useState(null);
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const { warehouseid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (warehouseid) {
      axios
        .get(`http://localhost:8888/warehouses/${warehouseid}`)
        .then((res) => {
          setWarehouseName(res.data[0].warehouse_name);
        })
        .catch((err) => console.log(err));
    }
  }, [warehouseid]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8888/warehouses/getInventoriesByWarehouseId/${warehouseid}`
      )
      .then((response) => {
        setAllInventories(response.data);
      });
  }, [warehouseid]);

  const handleClick = (status, inventoryId, inventoryName) => {
    setShow(status);
    setId(inventoryId);
  };

  return (
    <div className="warehouseDetailPage">
      {allInventories ? (
        <>
          <PageHeader
            pageTitle={warehouseName}
            btnTxt="Edit"
            onClick={() => navigate(`/warehouses/${warehouseid}/edit`)}
          />
          <WarehouseDetailsCard />
          <div className="container">
            <InventoryList
              allInvetories={allInventories}
              handleClick={handleClick}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default WarehouseDetailPage;
