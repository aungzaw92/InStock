import { useState } from 'react';
import InventoryItemMob from '../InventoryItemMob/InventoryItemMob';
import InventoryItemTabDes from '../InventoryItemTabDes/InventoryItemTabDes';
import InventoryListHeader from '../InventoryListHeader/InventoryListHeader';

const InventoryList = ({ allInvetories, handleDeleteClick }) => {
  // const nonZeroInventories = allInvetories.filter(
  //   (inventory) => inventory.quantity > 0
  // );

  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);

  const sortedData = [...allInvetories];

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
    <>
      <InventoryListHeader handleSort={handleSort} />
      <section>
        {sortedData.map((inventory) => (
          <InventoryItemMob
            inventory={inventory}
            key={inventory.id}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </section>
      <section>
        {sortedData.map((inventory) => (
          <InventoryItemTabDes
            inventory={inventory}
            key={inventory.id}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </section>
    </>
  );
};
export default InventoryList;
