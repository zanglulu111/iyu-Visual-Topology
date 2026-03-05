import React, { useRef, useState, useEffect } from 'react';
import './RetroTVPlayer.css';

interface RetroTVPlayerProps {
    videoUrl?: string; // e.g. /sample.mp4 or youtube embedded link
    type?: 'image' | 'css';
    className?: string;
    autoplay?: boolean;
}

export const RetroTVPlayer: React.FC<RetroTVPlayerProps> = ({
    videoUrl,
    type = 'css', // switch to 'image' if you want to test the raw AI generated TV outer frame
    className = '',
    autoplay = false
}) => {
    const [isPlaying, setIsPlaying] = useState(autoplay);
    const [showPlayIcon, setShowPlayIcon] = useState(!autoplay);
    const [currentTime, setCurrentTime] = useState('0:00:00');
    const [channelNoise, setChannelNoise] = useState(true);

    // simulate turning on TV with static noise first
    useEffect(() => {
        const timer = setTimeout(() => {
            setChannelNoise(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    // Format time for VCR display
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPlaying || channelNoise) return;
            setCurrentTime(prev => {
                const parts = prev.split(':').map(Number);
                parts[2]++;
                if (parts[2] >= 60) { parts[2] = 0; parts[1]++; }
                if (parts[1] >= 60) { parts[1] = 0; parts[0]++; }
                return `${parts[0]}:${parts[1].toString().padStart(2, '0')}:${parts[2].toString().padStart(2, '0')}`;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [isPlaying, channelNoise]);

    const togglePlay = () => {
        if (channelNoise) return; // Wait for TV to "warm up"
        setIsPlaying(!isPlaying);
        setShowPlayIcon(isPlaying); // Re-show icon when paused
    };

    const renderScreenContent = () => (
        <div className={`crt-screen-content ${channelNoise ? 'static-noise' : ''}`} onClick={togglePlay}>
            {/* VCR OSD (On-Screen Display) */}
            <div className="vcr-osd">
                <div className="vcr-top-row">
                    <span className={`vcr-play-status ${isPlaying ? 'vcr-playing' : ''}`}>
                        {channelNoise ? '' : (isPlaying ? 'PLAY \u25B6' : (showPlayIcon ? 'STILL \u23F8' : ''))}
                    </span>
                    <span className="vcr-channel">CH 03</span>
                </div>
                <div className="vcr-bottom-row">
                    <span className="vcr-time">{currentTime}</span>
                    <span className="vcr-mode">SP</span>
                </div>
            </div>

            {/* Actual Video Content */}
            <div className="crt-video-container">
                {videoUrl ? (
                    <video
                        src={videoUrl}
                        className="crt-video"
                        autoPlay={autoplay}
                        loop
                        muted={false}
                    />
                ) : (
                    <div className="crt-placeholder-video">
                        {/* If no video, show an empty retro screen with some text */}
                        {!channelNoise && <div className="placeholder-text">NO SIGNAL</div>}
                    </div>
                )}
            </div>

            {/* Screen Effects Overlay */}
            <div className="crt-scanlines"></div>
            <div className="crt-vignette"></div>
            <div className="crt-reflection"></div>
        </div>
    );

    return (
        <div className={`retro-tv-player-wrapper ${className}`}>
            {type === 'image' ? (
                <div className="retro-tv-image-mode">
                    {/* A physical picture of a TV used as background */}
                    <div className="retro-tv-image-bg"></div>
                    {/* The screen embedded area, user can tweak top/left to fit TV screen in image */}
                    <div className="retro-tv-image-screen">
                        {renderScreenContent()}
                    </div>
                </div>
            ) : (
                <div className="retro-tv-css-mode">
                    <div className="retro-tv-cabinet">
                        <div className="retro-tv-bezel">
                            <div className="retro-tv-tube">
                                {renderScreenContent()}
                            </div>
                        </div>
                        {/* Physical TV bottom grill & knobs (CSS simulated) */}
                        <div className="retro-tv-controls">
                            <div className="tv-speaker-grill"></div>
                            <div className="tv-knob"><div className="knob-dot"></div></div>
                            <div className="tv-knob"><div className="knob-dot"></div></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
