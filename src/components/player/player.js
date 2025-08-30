import './player.css';

import { useRef, useState, useContext, useEffect } from "react";

const Player = ({ videoName }) => {
    
    const [isVisible, setIsVisible] = useState(true);
    const videoRef = useRef(null);

    const handlePlay = () => {
        setIsVisible(false);
        videoRef.current.play();
    };

    const handlePause = () => {
        setIsVisible(true)
        videoRef.current.pause()
    }

    const handleEnded = () => {
        setIsVisible(true);
    }

    return (
        <div className='video__wrapper'>
            <video onClick={handlePause}
                ref={videoRef}
                preload="metadata"
                onEnded={handleEnded}
            >
                <source src={videoName} type="video/mp4" />
            </video>
            {isVisible ? <img onClick={handlePlay} src='/player.png' /> : null}
        </div>
    );
};

export default Player;
