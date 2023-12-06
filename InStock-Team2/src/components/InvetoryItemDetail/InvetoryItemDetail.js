import './InvetoryItemDetail.scss';

const InvetoryItemDetail = ({ inventory }) => {
  return (
    <>
      <div className="container invetoryItemDetail">
        <section className="invetoryItemDetail__section-left">
          <div className="invetoryItemDetail__section--group">
            <p className="invetoryItemDetail__section--group-label">
              ITEM DESCRIPTION
            </p>
            <p className="invetoryItemDetail__section--group-info">
              {inventory[0].description}
            </p>
          </div>

          <div className="invetoryItemDetail__section--group">
            <p className="invetoryItemDetail__section--group-label">CATEGORY</p>
            <p className="invetoryItemDetail__section--group-info">
              {inventory[0].category}
            </p>
          </div>
        </section>

        <section className="invetoryItemDetail__section-right">
          <div className="invetoryItemDetail__section-right-left">
            <div className="invetoryItemDetail__section--group">
              <p className="invetoryItemDetail__section--group-label">STATUS</p>
              <p className="invetoryItemDetail__section--group-info">
                {inventory[0].status}
              </p>
            </div>

            <div className="invetoryItemDetail__section--group">
              <p className="invetoryItemDetail__section--group-label">
                WAREHOUSES
              </p>
              <p className="invetoryItemDetail__section--group-info">
                {inventory[0].warehouse_id}
              </p>
            </div>
          </div>

          <div className="invetoryItemDetail__section--group">
            <p className="invetoryItemDetail__section--group-label">QUANTITY</p>
            <p className="invetoryItemDetail__section--group-info">
              {inventory[0].quantity}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default InvetoryItemDetail;
