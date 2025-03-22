
import { Link } from 'react-router-dom';
import { Mail, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sand-50 border-t border-sand-100 pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 className="text-xl font-serif mb-4">Dana</h3>
            <p className="text-muted-foreground max-w-xs text-balance">
              News producer crafting compelling stories that inform and inspire.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/resume" className="text-muted-foreground hover:text-primary transition-colors">Resume</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white hover:shadow-sm transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white hover:shadow-sm transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white hover:shadow-sm transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white hover:shadow-sm transition-all">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-medium mb-4">Contact</h4>
            <a href="mailto:hello@dananews.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-2">
              <Mail className="h-4 w-4 mr-2" />
              hello@dananews.com
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-sand-100 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Dana. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
