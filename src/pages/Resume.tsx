
import { useIntersectionObserver } from '../utils/animations';
import { resumeData } from '../utils/data';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [experienceRef, isExperienceVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [educationRef, isEducationVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [skillsRef, isSkillsVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section 
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className="py-16 bg-sand-50"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl font-serif font-bold mb-6 transition-all duration-700 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Resume
            </h1>
            
            <p className={`text-xl text-muted-foreground mb-8 transition-all duration-700 delay-200 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              My professional background, skills, and qualifications.
            </p>
            
            <button className={`inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-700 delay-400 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Download className="mr-2 h-4 w-4" /> Download Full Resume
            </button>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section 
        ref={experienceRef as React.RefObject<HTMLDivElement>}
        className="py-16"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className={`flex items-center mb-8 transition-all duration-700 ${isExperienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Briefcase className="mr-3 h-6 w-6 text-primary" />
              <h2 className="text-3xl font-serif font-bold">Professional Experience</h2>
            </div>
            
            <div className="space-y-8">
              {resumeData.experience.map((job, index) => (
                <div 
                  key={job.id}
                  className={`relative pl-8 border-l-2 border-sand-200 transition-all duration-700 ${
                    isExperienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="mb-1 text-sm font-medium text-muted-foreground">{job.period}</div>
                  <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                  <div className="text-lg font-medium text-primary mb-3">{job.company}</div>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section 
        ref={educationRef as React.RefObject<HTMLDivElement>}
        className="py-16 bg-sand-50"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className={`flex items-center mb-8 transition-all duration-700 ${isEducationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <GraduationCap className="mr-3 h-6 w-6 text-primary" />
              <h2 className="text-3xl font-serif font-bold">Education</h2>
            </div>
            
            <div className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <div 
                  key={edu.id}
                  className={`transition-all duration-700 ${
                    isEducationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  <div className="mb-1 text-sm font-medium text-muted-foreground">{edu.period}</div>
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <div className="text-lg font-medium text-primary">{edu.institution}</div>
                </div>
              ))}
            </div>
            
            <div className={`mt-12 transition-all duration-700 delay-700 ${isEducationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center mb-6">
                <Award className="mr-3 h-6 w-6 text-primary" />
                <h2 className="text-2xl font-serif font-bold">Certifications</h2>
              </div>
              
              <ul className="list-disc list-inside space-y-2 pl-4">
                {resumeData.certifications.map((cert, index) => (
                  <li key={index} className="text-muted-foreground">{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section 
        ref={skillsRef as React.RefObject<HTMLDivElement>}
        className="py-16"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-serif font-bold mb-8 transition-all duration-700 ${isSkillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Skills & Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.skills.map((skill, index) => (
                <div 
                  key={skill.id}
                  className={`transition-all duration-700 ${
                    isSkillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      {skill.level * 20}%
                    </span>
                  </div>
                  
                  <div className="h-2 bg-sand-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level * 20}%`,
                        transitionDelay: `${index * 100 + 600}ms` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
