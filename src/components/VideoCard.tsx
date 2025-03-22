
import { useState, useRef } from 'react';
import { Play, Pause, Eye } from 'lucide-react';
import { useIntersectionObserver } from '../utils/animations';
import { VideoItem } from '../utils/data';

interface VideoCardProps {
  video: VideoItem;
  index: number;
}

const VideoCard = ({ video, index }: VideoCardProps) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
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
      className={`relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-500 ${
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
          className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 blur-[2px]' : 'scale-100'}`}
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        <button 
          onClick={handlePlayToggle}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <div className={`h-16 w-16 rounded-full bg-primary/90 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-500 ${
            isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'
          }`}>
            {isPlaying ? (
              <Pause className="h-7 w-7" />
            ) : (
              <Play className="h-7 w-7 pl-1" />
            )}
          </div>
        </button>
        
        <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h3 className="text-white font-medium leading-tight mb-1">{video.title}</h3>
          <div className="flex items-center text-white/80 text-sm">
            <Eye className="h-3 w-3 mr-1" /> Watch now
          </div>
        </div>
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
