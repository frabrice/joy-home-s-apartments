import React from 'react';
import { ArrowRight, Star, Users, Award, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Only Background Image */}
      <section 
        className="relative h-[85vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://github.com/frabrice/joy-home-s-images/blob/main/Image%20five%205.jpg?raw=true')`
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content Container */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Text Content */}
              <div className="text-white space-y-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-amber-500">
                  Joy Home's
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-md">
                  Experience luxury living in the heart of the city with our premium apartments and exceptional amenities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="/book-now"
                    className="bg-amber-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-amber-700 transition-colors duration-200 text-center"
                  >
                    Book Your Stay
                  </a>
                  <a
                    href="/residences"
                    className="bg-transparent border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-white hover:text-slate-800 transition-colors duration-200 text-center"
                  >
                    View Residences
                  </a>
                </div>
              </div>
              
              {/* Right Side - Floating Images */}
              <div className="relative hidden lg:block h-[400px]">
                {/* Large main image - properly contained within hero section */}
                <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-3xl group">
                  <img 
                    src="https://raw.githubusercontent.com/frabrice/joy-home-s-images/refs/heads/main/Image%20four%204.jpg" 
                    alt="Modern Living Space" 
                    className="w-full h-full object-cover object-center group-hover:brightness-110 transition-all duration-500"
                  />
                  {/* Floating glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Small overlapping image - properly positioned within bounds */}
                <div className="absolute top-3 right-3 w-32 h-24 rounded-lg overflow-hidden shadow-xl z-10 border-3 border-white">
                  <img 
                    src="https://github.com/frabrice/joy-home-s-images/blob/main/Image%20five%2013.jpg?raw=true" 
                    alt="Luxury Interior" 
                    className="w-full h-full object-cover object-center brightness-110"
                  />
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute top-8 left-8 w-3 h-3 bg-amber-400/60 rounded-full animate-ping"></div>
                <div className="absolute bottom-16 left-6 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                <div className="absolute top-24 right-24 w-2 h-2 bg-amber-300/50 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Joy Home's?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience the perfect blend of comfort, luxury, and convenience in our premium residences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Premium Quality</h3>
              <p className="text-slate-600">Luxury finishes and modern amenities in every unit</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Community Living</h3>
              <p className="text-slate-600">Vibrant community with shared spaces and events</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Award Winning</h3>
              <p className="text-slate-600">Recognized for excellence in residential living</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Secure & Safe</h3>
              <p className="text-slate-600">24/7 security and controlled access for peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tour Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Video */}
            <div className="relative">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/jBy8xjhr70w?autoplay=1&mute=1&loop=1&playlist=jBy8xjhr70w&controls=1"
                  title="Joy Home's Virtual Tour"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-amber-600 rounded-full opacity-80"></div>
            </div>
            
            {/* Right Side - Description */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Take a Virtual Tour of <span className="text-amber-600">Joy Home's</span>
                </h2>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">What You'll Discover:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Premium Interiors</h4>
                      <p className="text-slate-600 text-sm">Modern furnishings and luxury finishes throughout</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Spacious Layouts</h4>
                      <p className="text-slate-600 text-sm">Open floor plans designed for comfortable living</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Prime Location</h4>
                      <p className="text-slate-600 text-sm">Perfectly situated in Kicukiro - Kagarama</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <a
                  href="/gallery"
                  className="inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
                >
                  View More Photos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Units Overview Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Available Units</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Choose from our carefully designed apartments, each offering modern amenities and comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-colors duration-300">
              <img 
                src="https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%2011.jpg?raw=true" 
                alt="Apartment 1"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Apartment 1</h3>
                <div className="flex items-center justify-between text-sm text-slate-300 mb-2">
                  <span>2 BR • 2.5 BA</span>
                  <span className="text-amber-600 font-medium">$70/night</span>
                </div>
                <p className="text-xs text-slate-400">Half bath for guests, modern layout</p>
              </div>
            </div>
            
            <div className="bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-colors duration-300">
              <img 
                src="https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%206.jpg?raw=true" 
                alt="Apartment 2"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Apartment 2</h3>
                <div className="flex items-center justify-between text-sm text-slate-300 mb-2">
                  <span>3 BR • 3 BA</span>
                  <span className="text-amber-600 font-medium">$100/night</span>
                </div>
                <p className="text-xs text-slate-400">Largest unit, perfect for families</p>
              </div>
            </div>
            
            <div className="bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-colors duration-300">
              <img 
                src="https://github.com/frabrice/joy-home-s-images/blob/main/Image%20three%205.jpg?raw=true" 
                alt="Apartment 3"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Apartment 3</h3>
                <div className="flex items-center justify-between text-sm text-slate-300 mb-2">
                  <span>2 BR • 2 BA</span>
                  <span className="text-amber-600 font-medium">$50/night</span>
                </div>
                <p className="text-xs text-slate-400">Best value, cozy atmosphere</p>
              </div>
            </div>
            
            <div className="bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-colors duration-300">
              <img 
                src="https://github.com/frabrice/joy-home-s-images/blob/main/Image%20five%2013.jpg?raw=true" 
                alt="Apartment 4"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Apartment 4</h3>
                <div className="flex items-center justify-between text-sm text-slate-300 mb-2">
                  <span>2 BR • 2.5 BA</span>
                  <span className="text-amber-600 font-medium">$100/night</span>
                </div>
                <p className="text-xs text-slate-400">Master with bath tub, luxury finishes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Make Joy Home's Your Home?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join our community of satisfied residents and experience luxury living at its finest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-now"
              className="bg-amber-600 text-white px-8 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Schedule a Tour</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/residences"
              className="bg-slate-100 text-slate-700 px-8 py-3 rounded-md font-medium hover:bg-slate-200 transition-colors duration-200"
            >
              View Residences
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;