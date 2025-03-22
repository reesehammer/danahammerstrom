
import { useIntersectionObserver } from '../utils/animations';
import { aboutData } from '../utils/data';
import { CheckCircle, Award, FileText, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [introRef, isIntroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [bioRef, isBioVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [valuesRef, isValuesVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={introRef as React.RefObject<HTMLDivElement>} 
        className="py-16 md:py-24 bg-sand-50 overflow-hidden"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isIntroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                About Me
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                I'm a passionate news producer with expertise in crafting compelling narratives that connect with audiences.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-primary mr-2 mt-1" />
                  <div>
                    <h3 className="font-medium">Articles</h3>
                    <p className="text-muted-foreground text-sm">In-depth analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Video className="h-5 w-5 text-primary mr-2 mt-1" />
                  <div>
                    <h3 className="font-medium">Videos</h3>
                    <p className="text-muted-foreground text-sm">Visual storytelling</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-primary mr-2 mt-1" />
                  <div>
                    <h3 className="font-medium">Experience</h3>
                    <p className="text-muted-foreground text-sm">8+ years</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <div>
                    <h3 className="font-medium">Quality</h3>
                    <p className="text-muted-foreground text-sm">Award-winning work</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-300 ${isIntroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                  alt="Dana in the studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                8+ Years
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section 
        ref={bioRef as React.RefObject<HTMLDivElement>}
        className="py-16 md:py-24"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-serif font-bold mb-8 transition-all duration-700 ${isBioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              My Story
            </h2>
            
            <div className={`prose prose-lg max-w-none transition-all duration-700 delay-300 ${isBioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {aboutData.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className={`mt-12 transition-all duration-700 delay-500 ${isBioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-serif font-bold mb-4">My Mission</h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                {aboutData.mission}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section
        ref={valuesRef as React.RefObject<HTMLDivElement>}
        className="py-16 md:py-24 bg-sand-50"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-serif font-bold mb-8 text-center transition-all duration-700 ${isValuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              My Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutData.values.map((value, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-6 rounded-lg shadow-sm border border-sand-100 transition-all duration-700 ${
                    isValuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-lg">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Want to Know More?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Check out my resume for my professional background or get in touch to discuss potential collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/resume"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                View Resume
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
