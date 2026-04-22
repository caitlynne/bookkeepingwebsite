
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-foreground">Nickelbook</span>
            </Link>
            <p className="text-sm max-w-md mb-4">
              Automated accounting solutions that save time, improve accuracy, and provide real-time financial insights for growing businesses.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="transition-all duration-200 hover:text-primary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-semibold text-foreground text-sm tracking-wide uppercase mb-4 block">
              Quick Links
            </span>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-all duration-200 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="font-semibold text-foreground text-sm tracking-wide uppercase mb-4 block">
              Contact
            </span>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hello@nickelbook.com" className="transition-all duration-200 hover:text-primary">
                  hello@nickelbook.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+1-555-0123" className="transition-all duration-200 hover:text-primary">
                  +1 (555) 012-3456
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} Nickelbook. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm transition-all duration-200 hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm transition-all duration-200 hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
