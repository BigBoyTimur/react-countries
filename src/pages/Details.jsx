import {useNavigate, useParams} from "react-router-dom";
import {IoArrowBack} from "react-icons/io5";
import {useEffect, useState} from "react";
import axios from "axios";
import {searchByCode} from "../APIConfig.js";
import Button from "../components/Button/Button.jsx";
import Info from "../components/Info/Info.jsx";

function Details() {
  const { code } = useParams()
  const navigate = useNavigate()
  const [country, setCountry] = useState(null)

  useEffect(() => {
    axios.get(searchByCode(code)).then(
      ({data}) => setCountry(data[0])
    )
  }, [code]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info {...country} navigate={navigate} />}
    </div>
  );
}

export default Details;