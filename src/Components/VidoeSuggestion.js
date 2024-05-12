import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../Utils/constants';
import VideoCard from './VideoCard';

const VidoeSuggestion = ({ channelId }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchChannelDetails = async () => {
      try {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API()}&part=snippet&type=video&videoDuration=long&channelId=${channelId}&maxResults=12`);
        console.log(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API()}&part=snippet&type=video&channelId=${channelId}&maxResults=12`)
        if (!data.ok) {
          throw new Error('Failed to fetch channel details');
        }
        const json = await data.json();
        setVideos(json.items);
      } catch (error) {
        console.error('Error fetching channel details:', error);
        // Consider adding user feedback for fetch failures
      }
    };

    if (channelId) {
      fetchChannelDetails();
    }
  }, [channelId])

  if (!videos) return;

  return (
    <div className='w-4/12 mmd:w-full dark:text-white'>
      <div className='grid gap-3 justify-center items-start p-3 grid-cols-1'>
        {videos.map((video, index) => (
          <VideoCard video={video} key={index} horizontal={true}/>
        ))}
      </div>
    </div>
  )
}

export default VidoeSuggestion;
