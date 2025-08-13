import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-amber-600">Joy Home's</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our team to learn more about Joy Home's or book your stay.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Contact Information */}
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 lg:mb-8">Get in Touch</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">Address</h3>
                    <p className="text-sm sm:text-base text-slate-600">KK 37 Avenue<br />Gate 64<br />Kicukiro - Kagarama</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">Phone</h3>
                    <p className="text-sm sm:text-base text-slate-600">
                      +250 785 452 581<br />
                      +250 783 484 766<br />
                      +49 173 700 2096
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">Email</h3>
                    <p className="text-sm sm:text-base text-slate-600">
                      MUTESI JOY<br />
                      jszembek@yahoo.de
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">Office Hours</h3>
                    <p className="text-sm sm:text-base text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-6 lg:mt-8 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5234567890123!2d30.1234567!3d-1.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTknMTUuNiJTIDMwwrAwNyc0OC40IkU!5e0!3m2!1sen!2srw!4v1234567890123!5m2!1sen!2srw&q=KK+37+Avenue+Gate+64+Kicukiro+Kagarama+Rwanda"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Joy Home's Location - KK 37 Avenue, Gate 64, Kicukiro - Kagarama"
                  className="w-full h-48 sm:h-64 lg:h-80"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Emergency Contact</h2>
          <p className="text-lg sm:text-xl mb-6">
            For urgent maintenance requests or emergencies, please contact:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
            <Phone className="h-6 w-6 text-amber-600" />
            <span className="text-xl sm:text-2xl font-bold text-amber-600">+250 785 452 581</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;