import React from 'react'

const VideoBkgd = () => {
    return (
        <div>
            <div className="absolute top-0 left-0 object-cover h-full w-full bg-gradient-to-b from-nh-black to-black z-10"></div>
            <video 
                className="absolute top-0 left-0 object-cover h-full w-full"
                autoPlay
                loop 
                muted 
                playsInline
                preload="none">
                <source src="/videos/nh.mp4" type="video/mp4" />
                <source src="/videos/nh.webm" type="video/webm" />
            </video>
        </div>
      );
  };
  
export default VideoBkgd;