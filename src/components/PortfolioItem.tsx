
import { useState } from 'react';
import { ArticleItem, VideoItem } from '../utils/data';
import { ExternalLink, Play, Clock } from 'lucide-react';

type PortfolioItemProps = {
  item: ArticleItem | VideoItem;
  type: 'video' | 'article';
};

const PortfolioItem = ({ item, type }: PortfolioItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const isArticle = type === 'article';
  const isVideo = type === 'video';
  
  // Type guard to access article-specific properties
  const articleItem = isArticle ? item as ArticleItem : null;
  
  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-white border border-sand-100 shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden bg-sand-100">
        <img 
          src={isArticle ? (item as ArticleItem).image : (item as VideoItem).thumbnail} 
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`h-14 w-14 rounded-full bg-primary/80 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
              <Play className="h-6 w-6 pl-1" />
            </div>
          </div>
        )}
        
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary shadow-sm">
            {item.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-muted-foreground">{item.date}</span>
          {isArticle && articleItem && (
            <span className="text-xs text-muted-foreground flex items-center">
              <Clock className="mr-1 h-3 w-3" /> {articleItem.readTime}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-serif font-medium leading-tight mb-2">{item.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{item.description}</p>
        
        <a 
          href={item.url} 
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {isVideo ? 'Watch Video' : 'Read Article'} <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
