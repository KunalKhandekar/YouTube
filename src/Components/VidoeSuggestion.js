import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../Utils/constants';
import VideoCard from './VideoCard';

const VidoeSuggestion = ({ channelId, videoID }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchRandomPopularVideos = async () => {
      try {
        const popularData = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API()}&part=snippet&chart=mostPopular&maxResults=${12 - videos.length}`);
        if (!popularData.ok) {
          throw new Error('Failed to fetch popular videos');
        }
        const popularJson = await popularData.json();
        return popularJson.items;
      } catch (error) {
        console.error('Error fetching random popular videos:', error);
        return [];
      }
    };
    
    const fetchChannelDetails = async () => {
      try {
        const videoData = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API()}&part=snippet&id=${videoID}`);
        if (!videoData.ok) {
          throw new Error('Failed to fetch video details');
        }
        const videoJson = await videoData.json();
        const videoTitle = videoJson.items[0].snippet.title;
    
        const searchData = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API()}&part=snippet&type=video&videoDuration=long&q=${encodeURIComponent(videoTitle)}&maxResults=12`);
        if (!searchData.ok) {
          throw new Error('Failed to fetch search results');
        }
        const searchJson = await searchData.json();
        
        // Filter out the video with the same title
        const filteredVideos = searchJson.items.filter(item => item.snippet.title !== videoTitle);
        
        // If less than 12 videos, fetch random popular videos to fill the remaining slots
        if (filteredVideos.length < 12) {
          const randomPopularVideos = await fetchRandomPopularVideos();
          const combinedVideos = filteredVideos.concat(randomPopularVideos);
          setVideos(combinedVideos);
        } else {
          setVideos(filteredVideos);
        }
      } catch (error) {
        console.error('Error fetching channel details:', error);
        // Consider adding user feedback for fetch failures
      }
    };
    
    

    if (channelId) {
      fetchChannelDetails();
    }
  }, [channelId, videoID])

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
