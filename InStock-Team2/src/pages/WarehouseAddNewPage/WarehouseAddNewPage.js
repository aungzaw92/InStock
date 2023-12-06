import PageHeader from '../../components/PageHeader/PageHeader';
import WarehouseNewForm from '../../components/WarehouseNewForm/WarehouseNewForm';
import './WarehouseAddNewPage.scss';

const WarehouseAddNewPage = () => {
  document.title = 'In Stock/Warehouse Add New Page';

  return (
    <div className="WarehouseAddNewPage">
      <PageHeader pageTitle="Add New Warehouse" />
      <WarehouseNewForm />
    </div>
  );
};
export default WarehouseAddNewPage;
