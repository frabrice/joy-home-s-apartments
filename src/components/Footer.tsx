import React from 'react';
import { Building, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Building className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold">Joy Home's</span>
            </div>
            <p className="text-slate-300 mb-4">
              Experience luxury living at its finest. Our premium residences offer modern amenities, 
              stunning views, and unparalleled comfort.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-amber-600" />
                <span className="text-sm">KK 37 Avenue, Gate 64, Kicukiro - Kagarama</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-slate-300 hover:text-amber-600 transition-colors">Home</a></li>
              <li><a href="/residences" className="text-slate-300 hover:text-amber-600 transition-colors">Residences</a></li>
              <li><a href="/gallery" className="text-slate-300 hover:text-amber-600 transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-slate-300 hover:text-amber-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Location & Distances */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Prime Location</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-amber-600 flex-shrink-0" />
                <span className="text-sm text-slate-300">20 min to Kigali Airport</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-amber-600 flex-shrink-0" />
                <span className="text-sm text-slate-300">12 min to Convention Center</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-amber-600 flex-shrink-0" />
                <span className="text-sm text-slate-300">14 min to BK Arena & Amahoro</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-600 flex-shrink-0" />
                <span className="text-sm text-slate-300">Walk to shops & restaurants</span>
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-amber-600" />
                <div className="text-sm">
                  <div>+250 785 452 581</div>
                  <div>+250 783 484 766</div>
                  <div>+49 173 700 2096</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-amber-600" />
                <div className="text-sm">
                  <div>MUTESI JOY</div>
                  <div>joyhomes250@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-300 text-sm">© 2025 Joy Home's. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-300 hover:text-amber-600 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-300 hover:text-amber-600 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;