import { Play, Pause } from "lucide-react";
import { useVideoPlayer } from "../hooks/useVideoPlayer";

export default function Video() {
  const { videoRef, isPlaying, togglePlay, handleVideoEnd } = useVideoPlayer();

  return (
    <div className="flex flex-col lg:px-10 py-10 px-3">
      <div className="grid grid-cols-2 lg:py-9 px-4 lg:gap-44 max-[750px]:grid-cols-1 items-center">
        <h2 className="text-5xl font-bold mb-4 max-[750px]:text-4xl">Connecting People With Perfect Properties</h2>
        <p className="text-gray-600 mb-6">Urbanet is a leading real estate platform dedicated to
          connecting buyers, sellers, and renters with their
          perfect property.</p>
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-lg group">
        <video
          ref={videoRef}
          src="/video.mp4"
          loop
          muted
          onEnded={handleVideoEnd}
          className="w-full h-[700px] max-[750px]:h-[450px] object-cover cursor-pointer"
          onClick={togglePlay}
        />

        {/* Bouton dynamique */}
        <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
          <button
            onClick={togglePlay}
            className="bg-white p-6 rounded-full border border-white/50 hover:scale-110 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-gray-600 fill-gray-700" />
            ) : (
              <Play className="w-10 h-10 text-gray-700 fill-gray-700" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}