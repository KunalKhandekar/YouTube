import React from 'react';
import { useSearchParams } from 'react-router-dom';
import WatchVideoContainer from '../Components/WatchVideoContainer';
import VidoeSuggestion from '../Components/VidoeSuggestion';
import VideoInfoBox from '../Components/VideoInfoBox';


const WatchPage = () => {
  const [search] = useSearchParams();
  const videoID = search.get('v');
  const channelId = search.get('chnl');

  console.log(channelId);
  
  return (
    <div className='pt-[68px] px-2 mmd:px-0 min-h-screen dark:bg-black bg-white sm:px-0 sm:pt-[65px]'>
      <div className='w-full flex gap-3 mmd:flex-col'>

        <div className='w-8/12 mmd:w-full'>
          <WatchVideoContainer Id={videoID} />
          <VideoInfoBox Id={videoID}/>
        </div>

        <VidoeSuggestion channelId={channelId} videoID={videoID}/>
      </div>
    </div>
  )
}

export default WatchPage;
