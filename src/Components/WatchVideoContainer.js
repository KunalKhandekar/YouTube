import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const WatchVideoContainer = ({ Id }) => {
    

    return (
        <>
            <div className={`py-2 mmd:py-0 w-full mmd:fixed top-14 z-[2] transition-all`}>
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
