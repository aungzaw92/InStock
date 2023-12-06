import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import './WarehousePage.scss';
import WarehouseDeletePage from '../WarehouseDeletePage/WarehouseDeletePage';

const WarehousePage = () => {
  const [allWarehouses, setAllWarehouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [warehouseName, setWarehouseName] = useState('');
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8888/warehouses')
      .then((response) => {
        setAllWarehouses(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredItems = allWarehouses.filter((item) =>
    item.warehouse_name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  if (loading) {
    return <p>Loading...</p>; // Show a loading message while data is being fetched
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>; // Show an error message if API calls fail
  }

  const handleDeleteClick = (status, warehouseId, warehouseName) => {
    setShow(status);
    setId(warehouseId);
    setWarehouseName(warehouseName);
  };

  const close = () => {
    axios
      .get('http://localhost:8888/warehouses')
      .then((response) => {
        setAllWarehouses(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //get the data again
    setShow(false);
  };

  return (
    <div className="warehousePage container">
      <PageHeader
        pageTitle="Warehouses"
        type="search"
        btnTxt="+ Add A New Warehouse"
        value={searchQuery}
        onChange={handleSearchChange}
        onClick={() => navigate(`/warehouses/new`)}
      />
      <WarehouseList
        allWarehouses={filteredItems}
        handleDeleteClick={handleDeleteClick}
      />
      <WarehouseDeletePage
        show={show}
        warehouseName={warehouseName}
        warehouseId={id}
        onClose={close}
      />
    </div>
  );
};

export default WarehousePage;
