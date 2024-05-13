import React, { useEffect } from 'react';
import TopicContainer from './TopicContainer';
import { useSelector } from 'react-redux';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  const CapsuleTopics = useSelector(store => store.state.homeTopics);
  const showSideBar = useSelector(store => store.state.showSideBar);
  const activeTopic = useSelector(store => store.state.activeTopic);

  // Check if activeTopic is included in CapsuleTopics array
  const isTopicActive = CapsuleTopics.includes(activeTopic);

  useEffect(() => {
    // Scroll to the top of the VideoContainer when activeTopic changes
    const scrollToTop = () => {
      const videoContainer = document.getElementById('video-container');
      if (videoContainer) {
        videoContainer.scrollIntoView({ behavior: 'smooth' });
      }
    };

    scrollToTop();
  }, [activeTopic]);
  
  return (
    <div className={`${showSideBar ? 'pl-[210px] sm:pl-0' : ''} pt-[65px] w-full transition-all duration-300 dark:bg-neutral-900 max-h-screen overflow-auto mmd:pb-10`}>

      {/* Conditionally render TopicContainer if activeTopic is included in CapsuleTopics */}
      {isTopicActive && <TopicContainer />}
      <div id={!isTopicActive ? "video-container" : ''}>
        <VideoContainer />
      </div>

    </div>
  )
}

export default MainContainer;
