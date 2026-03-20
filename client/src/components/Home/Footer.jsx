import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Github, Linkedin, Instagram } from "lucide-react";


const Footer = () => {
  return (
    <footer className="mt-40 bg-gradient-to-b from-green-50 via-white to-green-100 text-slate-900 py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-16">

        <div className="lg:col-span-3 space-y-6">
          
          {/* Logo */}
            <img src={logo} alt="ResumeForge AI Logo" className="h-10 w-auto" />

          <p className="text-sm md:text-base text-slate-600">
            Build ATS-friendly resumes with AI. Create, optimize, and land your dream job faster.
          </p>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="example@email.com"
              className="bg-white text-slate-700 border border-slate-200 px-3 py-3 rounded-md w-full sm:flex-1 sm:max-w-xs placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-green-600 text-white px-5 py-3 rounded-md border border-green-700/20 text-sm hover:bg-green-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* RIGHT LINKS */}
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28">

          {/* Product */}
          <div>
            <h3 className="font-medium text-sm mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-green-700">Resume Builder</Link></li>
              <li><Link to="/" className="hover:text-green-700">Templates</Link></li>
              <li><Link to="/" className="hover:text-green-700">Features</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium text-sm mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-green-700">Blog</Link></li>
              <li><Link to="/" className="hover:text-green-700">Resume Guides</Link></li>
              <li><Link to="/" className="hover:text-green-700">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-sm mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-green-700">About</Link></li>
              <li><Link to="/" className="hover:text-green-700">Careers</Link></li>
              <li><Link to="/" className="hover:text-green-700">Contact</Link></li>
              <li><Link to="/" className="hover:text-green-700">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-green-200 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <p className="text-slate-600 text-xs sm:text-sm">
          © {new Date().getFullYear()} ResumeForge AI. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex gap-5 text-slate-700">

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            aria-label="GitHub"
          >
            <Github className="size-5" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>

          <a
            href="#"
            className="hover:text-gray-300"
            aria-label="Instagram"
          >
            <Instagram className="size-5" />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;