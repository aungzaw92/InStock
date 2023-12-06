import PageHeader from '../../components/PageHeader/PageHeader';
import InventoryNewItemForm from '../../components/InventoryNewItemForm/InventoryNewItemForm';
import './InventoryAddNewPage.scss';

const InventoryAddNewPage = () => {
  document.title = 'In Stock/New Inventory Item';

  return (
    <div className="inventoryAddNewPage">
      <PageHeader pageTitle="Add New Inventory Item" />
      <InventoryNewItemForm />
    </div>
  );
};
export default InventoryAddNewPage;
