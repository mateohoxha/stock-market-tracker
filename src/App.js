import React, { useState, useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import StockChart from './components/StockChart';
import Toolbar from './components/Toolbar';
import { Divider } from 'antd';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode());
  const [stockSymbol, setStockSymbol] = useState('');

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  }

  const onSelectHandler = (value) => {
    setStockSymbol(value);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Toolbar toggleDarkMode={toggleDarkMode} onSelectHandler={onSelectHandler} />
      <Divider />
      <StockChart stockSymbol={stockSymbol} />
    </div>
  )
}

export default App;
