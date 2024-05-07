import appStore from './Utils/Store/appStore';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import React from 'react';
import './App.css';
import MainContainer from './Components/MainContainer';

const App = () => {
  return (
    <Provider store={appStore}>
      <div className='max-w-[1600px] m-auto relative'>
        <Header />
        <Sidebar />
        <MainContainer />
      </div>
    </Provider>
  )
};

export default App;
