import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './InventoryEditItemPage.scss';

import PageHeader from '../../components/PageHeader/PageHeader';
import InventoryEditItem from '../../components/InventoryEditItem/InventoryEditItem';

const InventoryEditItemPage = () => {
  document.title = 'In Stock/Edit Item';
  const [inventory, setInvetory] = useState();
  const { inventoryid } = useParams();

  useEffect(() => {
    if (inventoryid) {
      axios
        .get(`http://localhost:8888/inventory/` + inventoryid)
        .then((response) => {
          setInvetory(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [inventoryid]);

  return (
    <div className="inventoryEditPage">
      {inventory && <PageHeader pageTitle="Edit Inventory Item" />}
      {inventory && (
        <InventoryEditItem inventoryid={inventoryid} inventory={inventory} />
      )}
    </div>
  );
};
export default InventoryEditItemPage;
