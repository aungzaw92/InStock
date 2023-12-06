import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryList from '../../components/InventoryList/InventoryList';
import PageHeader from '../../components/PageHeader/PageHeader';
import axios from 'axios';
import './InventoryMainPage.scss';
import InventoryDeletePage from '../InventoryDeletePage/InventoryDeletePage';

const InventoryMainPage = () => {
  const [allInvetories, setAllInvetories] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const [inventoryName, setInventoryName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8888/inventory')
      .then((response) => {
        setAllInvetories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //search section
  const filteredItems = allInvetories.filter((item) =>
    item.item_name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //delete
  const handleDeleteClick = (status, inventoryId, inventoryName) => {
    setShow(status);
    setId(inventoryId);
    setInventoryName(inventoryName);
  };

  //onClose
  const close = () => {
    axios
      .get('http://localhost:8888/inventory')
      .then((response) => {
        setAllInvetories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //get the data again
    setShow(false);
  };

  return (
    <main>
      <div className="mainInventoryPageBody container">
        <PageHeader
          pageTitle="Inventories"
          type="search"
          btnTxt="+Add A New Inventory"
          value={searchQuery}
          onChange={handleSearchChange}
          onClick={() => navigate(`/inventory/new`)}
        />
        <InventoryList
          allInvetories={filteredItems}
          handleDeleteClick={handleDeleteClick}
        />
      </div>
      <InventoryDeletePage
        show={show}
        inventoryName={inventoryName}
        inventoryId={id}
        onClose={close}
      />
    </main>
  );
};
export default InventoryMainPage;
