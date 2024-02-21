import './header.sass';
import Container from "../Container/Container.jsx";
import {Link} from "react-router-dom";
import {IoMoon, IoMoonOutline} from "react-icons/io5";
import {useEffect, useState} from "react";

function Header() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme]);
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <Link to="/" className="header__title">Where is the world?</Link>
          <div
            className="header__mode-switcher"
            onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size="14px"/>
            ) : (
              <IoMoon size="14px" />
            )
            }
            <span style={{marginLeft: '0.75rem'}}>{`${theme} theme`}</span>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;