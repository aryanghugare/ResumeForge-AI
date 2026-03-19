import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-16">

        {/* LEFT SECTION */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Logo */}
          <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

          <p className="text-sm md:text-base text-white/70">
            Build ATS-friendly resumes with AI. Create, optimize, and land your dream job faster.
          </p>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="example@email.com"
              className="bg-[#14171A] text-white/70 border border-white/10 px-3 py-3 rounded-md w-full sm:flex-1 sm:max-w-xs placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
            <button className="bg-[#14171A] text-white px-5 py-3 rounded-md border border-white/10 text-sm hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* RIGHT LINKS */}
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28">

          {/* Product */}
          <div>
            <h3 className="font-medium text-sm mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/builder" className="hover:text-white">Resume Builder</Link></li>
              <li><Link to="/templates" className="hover:text-white">Templates</Link></li>
              <li><Link to="/features" className="hover:text-white">Features</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium text-sm mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/guides" className="hover:text-white">Resume Guides</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-sm mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <p className="text-white/70 text-xs sm:text-sm">
          © {new Date().getFullYear()} ResumeForge AI. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex gap-5">

          {/* GitHub (external → keep <a>) */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5..." />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4..." />
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" className="hover:text-gray-300">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="20" x="2" y="2" rx="5"/>
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;