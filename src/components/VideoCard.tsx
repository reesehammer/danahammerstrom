
import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { useIntersectionObserver } from '../utils/animations';
import { VideoItem } from '../utils/data';

interface VideoCardProps {
  video: VideoItem;
  index: number;
}

const VideoCard = ({ video, index }: VideoCardProps) => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative group overflow-hidden rounded-lg shadow-sm transition-all duration-700 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg bg-sand-100">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        <button 
          onClick={handlePlayToggle}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <div className={`h-14 w-14 rounded-full bg-primary/80 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6 pl-1" />
            )}
          </div>
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
            {video.category}
          </span>
          <span className="text-xs text-muted-foreground">{video.date}</span>
        </div>
        <h3 className="text-lg font-serif font-medium leading-tight mb-2">{video.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
