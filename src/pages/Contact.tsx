
import { useState } from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { Send, Mail, Phone, MapPin, Check } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [contactRef, isContactVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [formRef, isFormVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'Thank you for your message. I will get back to you soon.',
        icon: <Check className="h-5 w-5" />,
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen pt-20">
      {/* Contact Header */}
      <section 
        ref={contactRef as React.RefObject<HTMLDivElement>}
        className="py-16 bg-sand-50"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl font-serif font-bold mb-6 transition-all duration-700 ${isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Get in Touch
            </h1>
            
            <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Have a question, project idea, or just want to say hello? I'd love to hear from you. 
              Fill out the form below or reach out directly via email or phone.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section 
        ref={formRef as React.RefObject<HTMLDivElement>}
        className="py-16"
      >
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className={`lg:col-span-1 transition-all duration-700 ${isFormVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:hello@dananews.com" className="text-primary hover:underline">hello@dananews.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-muted-foreground">New York, NY, United States</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-sand-50 rounded-lg border border-sand-100">
                  <h3 className="font-medium mb-3">Working Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 9am to 6pm EST</p>
                    <p>Weekend: By appointment</p>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <div className={`lg:col-span-2 transition-all duration-700 delay-300 ${isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-2xl font-serif font-bold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-sand-200 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-sand-200 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-sand-200 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-sand-200 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>Send Message <Send className="ml-2 h-4 w-4" /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Map Section */}
      <section className="py-16 bg-sand-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden border border-sand-100 shadow-sm h-[400px] bg-sand-100 flex items-center justify-center">
              <p className="text-muted-foreground">Map goes here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
