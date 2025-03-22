
import { ArrowUpRight } from 'lucide-react';
import { useIntersectionObserver } from '../utils/animations';
import { ArticleItem } from '../utils/data';

interface ArticleCardProps {
  article: ArticleItem;
  index: number;
}

const ArticleCard = ({ article, index }: ArticleCardProps) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative overflow-hidden bg-white rounded-lg border border-sand-100 shadow-sm hover-lift transition-all duration-700 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent text-accent-foreground">
            {article.category}
          </span>
          <span className="text-xs text-muted-foreground">{article.date}</span>
        </div>
        
        <h3 className="text-lg font-serif font-medium leading-tight mb-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{article.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">{article.readTime}</span>
          <a 
            href={article.url} 
            className="inline-flex items-center text-sm font-medium text-primary"
          >
            Read Article <ArrowUpRight className="ml-1 h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
