import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import InputAllTextType from '../InputAllTextType/InputAllTextType';
import './PageHeader.scss';

const PageHeader = ({ pageTitle, btnTxt, type, onClick, value, onChange }) => {
  const navigate = useNavigate();

  return (
    <>
      <header className="PageHeader container">
        <h1 className="PageHeader__left">{pageTitle}</h1>
        <div
          className={`PageHeader__right  ${
            pageTitle.includes('Add') ? 'PageHeader__right--display' : ''
          }`}
        >
          <InputAllTextType type={type} value={value} onChange={onChange} />
          <Button btnTxt={btnTxt} onClick={onClick} />
        </div>
      </header>
    </>
  );
};
export default PageHeader;
