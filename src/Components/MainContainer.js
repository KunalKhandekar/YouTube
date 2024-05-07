import React from 'react';
import TopicContainer from './TopicContainer';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const showSideBar = useSelector(store => store.state.showSideBar);

  return (
    <div className={`${ showSideBar ? 'pl-[220px] sm:pl-5' : 'pl-5'} pt-20 w-full transition-all duration-300`}>
        
        {/* Capsules for trending topics */}
        <TopicContainer />

    </div>
  )
}

export default MainContainer;
