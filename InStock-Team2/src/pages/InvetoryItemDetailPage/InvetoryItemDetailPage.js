import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InvetoryItemDetail from '../../components/InvetoryItemDetail/InvetoryItemDetail';
import PageHeader from '../../components/PageHeader/PageHeader';
import './InvetoryItemDetailPage.scss';

const InvetoryItemMorePage = () => {
  const [inventory, setInvetory] = useState();
  const { inventoryid } = useParams();
  const navigate = useNavigate();

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
    <div className="invetoryItemMorePage">
      {inventory && (
        <PageHeader
          pageTitle={`${inventory[0]?.item_name}`}
          btnTxt="Edit"
          onClick={() => navigate(`/inventory/edit/${inventoryid}`)}
        />
      )}
      {inventory && <InvetoryItemDetail inventory={inventory} />}
    </div>
  );
};

export default InvetoryItemMorePage;
