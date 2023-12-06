import { useRef } from 'react';
import './InputAllTextType.scss';

const InputAllTextType = ({
  type,
  value,
  label,
  name,
  onChange,
  allWarehouses,
}) => {
  const ref = useRef(null);
  let input;

  if (type === 'search') {
    input = (
      <input
        type={type}
        name={name}
        placeholder="Search..."
        ref={ref}
        className="inputs inputs__search"
        value={value}
        onChange={onChange}
      />
    );
  } else if (type === 'tel') {
    input = (
      <input
        type={type}
        name={name}
        placeholder={label}
        defaultValue={value}
        ref={ref}
        className="inputs inputs__userInfo"
      />
    );
  } else if (type === 'email') {
    input = (
      <input
        type={type}
        name={name}
        placeholder={label}
        defaultValue={value}
        ref={ref}
        className="inputs inputs__userInfo"
      />
    );
  } else if (type === 'description') {
    input = (
      <textarea
        type={type}
        name={name}
        placeholder={label}
        defaultValue={value}
        ref={ref}
        className="inputs inputs__description"
      />
    );
  } else if (type === 'smallTxt') {
    input = (
      <input
        type={type}
        name={name}
        placeholder={label}
        defaultValue={value}
        ref={ref}
        className="inputs inputs__smallTxt"
      />
    );
  } else if (type === 'dropDown') {
    input = (
      <select name={name} className="inputs inputs__dropdown">
        <option hidden>Please select</option>
        {allWarehouses.map((warehouse, index) => (
          <option key={index}>{warehouse.warehouse_name}</option>
        ))}
      </select>
    );
  }

  return (
    <div>
      <div
        className={`inputs__${type === 'search' ? 'label--search' : 'label'} `}
      >
        <h3 className="inputs__label--labelHeader">{label}</h3>
      </div>
      {input}
    </div>
  );
};
export default InputAllTextType;
