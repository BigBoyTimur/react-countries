import {useEffect, useState} from 'react';
import axios from "axios";
import {ALL_COUNTRIES} from "../APIConfig.js";
import Controls from "../components/Controls/Controls.jsx";
import List from "../components/List/List.jsx";
import Card from "../components/Card/Card.jsx";
import {useNavigate} from "react-router-dom";
import search from "../components/Search/Search.jsx";

function HomePage({ countries, setCountries }) {
  const navigate = useNavigate()

  const [filteredCountries , setFilteredCountries ] = useState(countries)
  const countryNameCompare = (firstCountry, secondCountry) => {
    return firstCountry.name.common.localeCompare(secondCountry.name.common)
  }
  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(
        async ({data}) => {
          data = data.sort(countryNameCompare).filter((c) => c.name.common != 'Antarctica')
          setCountries(data)
        }
      )
    }
  }, []);

  useEffect(() => {
    handleSearch()
  }, [countries]);

  const handleSearch = (search, region) => {
    let data = [...countries];
    if (data.length === 0) return;

    if (region) {
      data = data.filter(c => c.region.includes(region))
    }
    if (search) {
      data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
    }
    setFilteredCountries(data)
  }

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map(c => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name.common,
            info: [
              {
                title: 'Population',
                description: c.population.toString()
              },
              {
                title: 'Region',
                description: c.region
              },
              {
                title: 'Capital',
                description: c.capital[0]
              }
            ]
          }
          return <Card key={c.cca3} {...countryInfo} onClick={() => navigate(`/country/${c.cca3}`)} />
        })
        }
      </List>
    </>
  );
}

export default HomePage;