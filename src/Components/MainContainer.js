import React from 'react';
import TopicContainer from './TopicContainer';
import { useSelector } from 'react-redux';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
    const showSideBar = useSelector(store => store.state.showSideBar);

  return (
    <div className={`${ showSideBar ? 'pl-[210px] sm:pl-0' : ''} pt-[65px] w-full transition-all duration-300 dark:bg-neutral-900 max-h-screen overflow-auto`}>
        
        {/* Capsules for trending topics */}
        <TopicContainer />
        <VideoContainer />

    </div>
  )
}

export default MainContainer;
