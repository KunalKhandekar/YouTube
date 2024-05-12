import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import WatchVideoContainer from '../Components/WatchVideoContainer';
import VidoeSuggestion from '../Components/VidoeSuggestion';
import VideoInfoBox from '../Components/VideoInfoBox';
import LoadingScreen from '../Components/LoadingScreen'; // Import your loading screen component

const WatchPage = () => {
  const [search] = useSearchParams();
  const [videoID, setVideoID] = useState(null); // Initialize videoID state
  const channelId = search.get('chnl');
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  // Load videoID when URL search param changes
  useEffect(() => {
    const newVideoID = search.get('v');
    setVideoID(newVideoID);
    setIsLoading(true); // Set loading state to true when videoID changes
  }, [search]);

  // Handle loading completion
  useEffect(() => {
    if (videoID !== null) {
      setIsLoading(false); // Set loading state to false when videoID is not null
    }
  }, [videoID]);

  return (
    <div className='pt-[68px] px-2 mmd:px-0 min-h-screen dark:bg-black bg-white sm:px-0 sm:pt-[65px]'>
      {isLoading ? (
        <LoadingScreen /> // Show loading screen while loading
      ) : (
        <div className='w-full flex gap-3 mmd:flex-col'>

          <div className='w-8/12 mmd:w-full'>
            <WatchVideoContainer Id={videoID} />
            <VideoInfoBox Id={videoID}/>
          </div>

          <VidoeSuggestion channelId={channelId} videoID={videoID}/>
        </div>
      )}
    </div>
  );
}

export default WatchPage;
