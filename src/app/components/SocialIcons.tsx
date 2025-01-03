'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'

const iconProps = {
    className: `
        rounded-xl bg-neutral-300 text-neutral-800 
        hover:bg-neutral-800 hover:text-neutral-300 
        transition-all duration-300 ease-in-out
    `,
    target: "_blank",
    rel: "noopener noreferrer",
    bgColor: "transparent",
    fgColor: "currentColor",
}

const SocialIcons = () => {
    return (
        <div className="
            absolute top-10 z-20 py-3 px-4 rounded-xl
            flex gap-4 justify-center bg-neutral-800/50
        ">
            <SocialIcon
                url="https://open.spotify.com/artist/7xFkiQ9B6WA6932TniPRGr"
                {...iconProps}
            />
            <SocialIcon
                network="itunes" 
                url="https://music.apple.com/us/artist/nether-hour/1544082556"
                {...iconProps}
            />
            <SocialIcon
                url="https://www.instagram.com/netherhour"
                {...iconProps}
            />
            <SocialIcon
                url="https://www.youtube.com/@netherhour"
                {...iconProps}
            />
            <SocialIcon
                url="https://x.com/NetherHour"
                {...iconProps}
            />
            <SocialIcon
                url="https://www.facebook.com/thenetherhour"
                {...iconProps}
                className="
                    max-sm:hidden rounded-xl bg-neutral-300 text-neutral-800
                    hover:bg-neutral-800 hover:text-neutral-300
                    transition-all duration-300 ease-in-out
                "
            />
        </div>
    );
};
  
export default SocialIcons;
