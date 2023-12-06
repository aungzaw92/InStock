import { useState } from 'react';
import WarehouseListHeader from '../WarehouseListHeader/WarehouseListHeader';
import WarehouseMob from '../WarehouseMob/WarehouseMob';
import WarehouseTabDesc from '../WarehouseTabDesc/WarehouseTabDesc';

const WarehouseList = ({ allWarehouses, handleDeleteClick }) => {
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);

  if (!allWarehouses || allWarehouses.length === 0) {
    return <p>No warehouses available.</p>;
  }

  const sortedData = [...allWarehouses];

  // Function to handle sorting
  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 1 ? -1 : 1);
    } else {
      setSortField(field);
      setSortOrder(1);
    }
  };

  if (sortField) {
    sortedData.sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (aValue < bValue) return -1 * sortOrder;
      if (aValue > bValue) return 1 * sortOrder;
      return 0;
    });
  }

  return (
    <div>
      <WarehouseListHeader handleSort={handleSort} />
      <section>
        {sortedData.map((warehouse) => (
          <WarehouseMob
            key={warehouse.id}
            warehouse={warehouse}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </section>
      <section>
        {sortedData.map((warehouse) => (
          <WarehouseTabDesc
            key={warehouse.id}
            warehouse={warehouse}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </section>
    </div>
  );
};

export default WarehouseList;
