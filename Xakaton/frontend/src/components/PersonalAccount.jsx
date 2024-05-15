import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PersonalData from './PersonalData';
import Achievements from './Achievements';
import Curriculum from './Curriculum';
import Awards from './Awards';
import Performance from './Performance';
import Shedule from './Shedule';

function PersonalAccount() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState('');
  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {
    const path = location.pathname;
    setActivePath(path);
    setActiveMenu(path.split('/')[2]); 
  }, [location]);

  const handleMenuClick = (path) => {
    setActiveMenu(path.split('/')[2]); 
    navigate(path);
  };

  const renderContent = () => {
    switch (activeMenu) {
      case 'personal-data':
        return <PersonalData />;
      case 'achievements':
        return <Achievements />;
      case 'performance':
        return <Performance />;
      case 'schedule':
        return <Shedule />;
      case 'curriculum':
        return <Curriculum />;
      case 'awards':
        return <Awards />;;
      default:
        return;
    }
  };

  return (
    <div className="menu">
      <div className="menu-left">
        <Link className={`menu-text ${activePath === '/personal-account/personal-data'? 'active' : ''}`} 
          to="/personal-account/personal-data" onClick={() => handleMenuClick('/personal-account/personal-data')}>Персональные<br />данные</Link>
        <Link className={`menu-text ${activePath === '/personal-account/achievements'? 'active' : ''}`} 
          to="/personal-account/achievements" onClick={() => handleMenuClick('/personal-account/achievements')}>Жетоны</Link>
        <Link className={`menu-text ${activePath === '/personal-account/performance'? 'active' : ''}`} 
          to="/personal-account/performance" onClick={() => handleMenuClick('/personal-account/performance')}>Успеваемость</Link>
        <Link className={`menu-text ${activePath === '/personal-account/schedule'? 'active' : ''}`} 
          to="/personal-account/schedule" onClick={() => handleMenuClick('/personal-account/schedule')}>Расписание</Link>
        <Link className={`menu-text ${activePath === '/personal-account/curriculum'? 'active' : ''}`} 
          to="/personal-account/curriculum" onClick={() => handleMenuClick('/personal-account/curriculum')}>Учебный план</Link>
        <Link className={`menu-text ${activePath === '/personal-account/awards'? 'active' : ''}`} 
          to="/personal-account/awards" onClick={() => handleMenuClick('/personal-account/awards')}>Достижения</Link>
      </div>
      <div className="menu-divider"></div>
      <div className="menu-right">
        {renderContent()} 
      </div>
    </div>
  );
};

export default PersonalAccount;
