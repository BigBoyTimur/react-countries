import "./info.sass";
import axios from "axios";
import {searchNameByCode} from "../../APIConfig.js";
import {useEffect, useState} from "react";

function Info(props) {
  const { name, flags, population, region, subregion, capital, tld, currencies, borders, languages, navigate } = props
  const [bordersWithNameAndCode, setBordersWithNameAndCode] = useState([])
  const getBordersWithNameAndCode = async (borders) => {
    return await Promise.all(borders.map(async code => {
      const {data} = await axios.get(searchNameByCode(code));
      return {code, name: data.name.common}
    }));
  }

  useEffect(() => {
    if (borders) getBordersWithNameAndCode(borders).then(bordersWithNameAndCode => setBordersWithNameAndCode(bordersWithNameAndCode))
  }, [borders]);

  return (
    <section className="info">
      <img className="info__image" src={flags.svg} alt={name.common} />
      <div className="info__container">
        <h1 className="info__title">{name.official}</h1>
        <div className="info__list-group list-group">
          <ul className="list-group__list">
            <li className="list-group__list-item">
              <b>Native Name:</b> {Object.values(Object.values(name.nativeName)[0])[0]}
            </li>
            <li className="list-group__list-item">
              <b>Population:</b> {population}
            </li>
            <li className="list-group__list-item">
              <b>Region:</b> {region}
            </li>
            <li className="list-group__list-item">
              <b>Subregion:</b> {subregion}
            </li>
            <li className="list-group__list-item">
              <b>Capital:</b> {capital ? capital[0]: name.common}
            </li>
          </ul>
          <ul className="list-group__list">
            <li className="list-group__list-item">
              <b>Top Level Domain</b> {tld.map(d => <span key={d}>{d} </span>)}
            </li>
            <li className="list-group__list-item">
              <b>Currency</b> {Object.values(currencies).map(c => <span key={c.name}>{c.name} </span>)}
            </li>
            <li className="list-group__list-item">
              <b>Languages</b> {Object.values(languages).map(l => <span key={l}>{l} </span>)}
            </li>
          </ul>
        </div>
        <div className="info__borders borders">
          <b>Border Countries:</b>
          {(!bordersWithNameAndCode.length) ? (
            <div>
              There is no border country
            </div>
          ) : (
            <div className="borders__container">
              {bordersWithNameAndCode.map(b => <span
                className="borders__border"
                key={b.code}
                onClick={() => navigate(`/country/${b.code}`)}
              >
                {b.name}
              </span>)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Info;