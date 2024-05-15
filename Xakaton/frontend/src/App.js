import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Rating from './components/Rating';
import News from './components/News';
import PersonalAccount from './components/PersonalAccount';
import UserPage from './components/UserPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/rating" element={<Rating />} /> 
        <Route path="/personal-account/*" element={<PersonalAccount />} />
        <Route path="/user/:cardNumber" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;