
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import { useSelector } from 'react-redux';
import React from 'react';
import './App.css';
import MainContainer from './Components/MainContainer';

const App = () => {
  const darkMode = useSelector(store => store.state.darkMode);

  return (
    
      <div className={`max-w-[1600px] m-auto relative ${darkMode ? 'dark' : ''}`}>
        <Header />
        <Sidebar />
        <MainContainer />
      </div>
  )
};

export default App;