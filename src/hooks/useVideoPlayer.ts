import { useState, useRef, useCallback } from "react";

export const useVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleVideoEnd = () => setIsPlaying(false);

  return {
    videoRef,
    isPlaying,
    togglePlay,
    handleVideoEnd
  };
};