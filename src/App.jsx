import './styles/global.sass'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import HomePage from "./pages/HomePage.jsx";
import {Route, Routes} from "react-router-dom";
import Details from "./pages/Details.jsx";
import NotFound from "./pages/NotFound.jsx";
import {useState} from "react";

function App() {
  const [countries , setCountries ] = useState([])

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path="/country/:code" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  )
}

export default App
