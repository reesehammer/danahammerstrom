
import { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articleData, videoData } from '../utils/data';
import { useIntersectionObserver } from '../utils/animations';
import VideoCard from '../components/VideoCard';
import ArticleCard from '../components/ArticleCard';
import PortfolioItem from '../components/PortfolioItem';

const Index = () => {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [workRef, isWorkVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  // Featured items
  const featuredVideo = videoData[0];
  const featuredArticle = articleData[0];
  
  // Filter out featured items
  const otherVideos = videoData.slice(1);
  const otherArticles = articleData.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef as React.RefObject<HTMLDivElement>}
        className="relative min-h-screen flex items-center pt-16"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sand-50 to-white/0 pointer-events-none"></div>
        
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className={`transition-all duration-1000 ${isHeroVisible ? 'opacity-100' : 'opacity-0'}`}>
              <span className="inline-block mb-4 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                News Producer
              </span>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
                Hi, I'm Dana
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg">
                Crafting compelling stories that inform and inspire audiences around the world.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
              
              <div className="mt-16 hidden md:block">
                <a 
                  href="#work" 
                  className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  Explore my work <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
                </a>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Dana at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Work Section */}
      <section 
        id="work" 
        ref={workRef as React.RefObject<HTMLDivElement>}
        className="py-20"
      >
        <div className="container">
          <div className={`mb-16 text-center transition-all duration-700 ${isWorkVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent videos and articles covering the most pressing issues and compelling stories from around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Featured Video */}
            <div className="col-span-1">
              <h3 className="text-lg font-medium mb-4">Latest Video</h3>
              <PortfolioItem item={featuredVideo} type="video" />
            </div>
            
            {/* Featured Article */}
            <div className="col-span-1">
              <h3 className="text-lg font-medium mb-4">Latest Article</h3>
              <PortfolioItem item={featuredArticle} type="article" />
            </div>
          </div>
          
          {/* More Videos Section */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-serif font-bold">Videos</h3>
              <Link to="/videos" className="text-primary hover:underline flex items-center">
                View all videos <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherVideos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>
          </div>
          
          {/* More Articles Section */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-serif font-bold">Articles</h3>
              <Link to="/articles" className="text-primary hover:underline flex items-center">
                View all articles <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-sand-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8">
              Interested in collaborating on a project? I'm always open to discussing new opportunities and ideas.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
