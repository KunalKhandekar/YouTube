import React from 'react';
import ReactPlayer from 'react-player';

const WatchVideoContainer = ({ Id }) => {
    return (
        <>
        <div className=' dark:text-white py-2 sm:py-0 w-full'>
            <ReactPlayer
                className="w-full aspect-video"
                url={`https://www.youtube.com/embed/${Id}?rel=0`}
                playing={true}
                muted={false}
                width='100%'
                height='100%'
                controls={true}
            />
        </div>
        
        </>
    );
};

export default WatchVideoContainer;
