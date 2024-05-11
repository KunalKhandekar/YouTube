import { Outlet, createBrowserRouter } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import './App.css';
import MainContainer from './Components/MainContainer';
import WatchPage from './Pages/WatchPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const darkMode = useSelector(store => store.state.darkMode);
  const activeTopic = useSelector(store => store.state.activeTopic);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling animation
    });
  }, [activeTopic]);

  return (

    <div className={`max-w-[1600px] m-auto relative ${darkMode ? 'dark' : ''}`}>
      <ToastContainer
        position="top-center"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme={darkMode ? 'dark' : 'light'}
      />
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  )
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: 'watch',
        element: <WatchPage />
      }
    ]
  }
]);

export default appRouter;
