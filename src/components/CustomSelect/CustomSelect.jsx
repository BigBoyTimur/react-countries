import Select from "react-select";
import './custom-select.sass'


const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'var(--colors-ui-base)',
    color: 'var(--colors-text)',
    borderRadius: 'var(--radii)',
    padding: '0.25rem',
    border: 'none',
    boxShadow: 'var(--shadow)',
    height: '50px',
    width: '200px'
  }),
  option: (provided, {isSelected}) => ({
    ...provided,
    cursor: 'pointer',
    color: 'var(--colors-text)',
    backgroundColor: isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)'
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'var(--colors-text)'
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'var(--colors-text)'
  })
}


function CustomSelect(props) {
  return (
    <Select
      styles={customStyles}
      {...props}
      className="custom-select"
    />
  );
}

export default CustomSelect;