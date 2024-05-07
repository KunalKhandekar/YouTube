import React from 'react';
import Topic_Container from './Topic_Container';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const showSideBar = useSelector(store => store.state.showSideBar);

  return (
    <div className={`${ showSideBar ? 'pl-[220px] sm:pl-5' : 'pl-5'} pt-20 w-full`}>
        
        {/* Capsules for trending topics */}
        <Topic_Container />

    </div>
  )
}

export default MainContainer;
