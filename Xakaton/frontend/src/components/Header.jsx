import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

function Header() {
    const location = useLocation();
    const [activePath, setActivePath] = useState('');

    useEffect(() => {
        const path = location.pathname;
        setActivePath(path);
    }, [location]);

    return (
        <header className='header'>
        <Link className='header-logo' to = "/">
            <img src={logo} alt="Логотип" className="logo"/>
        </Link>
        <div className='header-nav'>
          <Link className={`header-nav-link text ${activePath === '/'? 'active' : ''}`} 
            to="/">Новости</Link>
          <Link className={`header-nav-link text ${activePath === '/rating'? 'active' : ''}`} 
            to="/rating">Рейтинг</Link>
          <Link className={`header-nav-link text ${activePath === '/personal-account'? 'active' : ''}`} 
            to="/personal-account">Меню</Link>
        </div>
        <div className='user-header'>
          <Link className='user-text' to={`/user/312522`}>sstuedudom/312522</Link>
        </div>
      </header>
    );
};

export default Header;