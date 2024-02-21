import './controls.sass'
import Search from "../Search/Search.jsx";
import {useEffect, useState} from "react";
import CustomSelect from "../CustomSelect/CustomSelect.jsx";

const options = [
  {value: 'Africa', label: 'Africa'},
  {value: 'America', label: 'America'},
  {value: 'Asia', label: 'Asia'},
  {value: 'Europe', label: 'Europe'},
  {value: 'Oceania', label: 'Oceania'}
]

function Controls({onSearch}) {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')

  useEffect(() => {
    onSearch(search, region?.value || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, region]);

  return (
    <div className="controls">
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder={'Filter by Region'}
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </div>
  );
}

export default Controls;