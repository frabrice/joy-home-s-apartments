import React from 'react';
import { Phone, Mail, Calendar, ExternalLink, Star, Shield, Clock, Users } from 'lucide-react';

const BookNow = () => {
  const bookingOptions = [
    {
      id: 'phone',
      title: 'Call Us Directly',
      description: 'Speak with our team for personalized service and special rates',
      icon: Phone,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      hoverColor: 'hover:from-green-600 hover:to-emerald-700',
      features: ['Personal service', 'Special rates', 'Flexible terms', 'Immediate assistance'],
      action: () => window.open('tel:+250785452581', '_self'),
      buttonText: 'Call +250 785 452 581',
      contact: '+250 785 452 581'
    },
    {
      id: 'email',
      title: 'Email Booking',
      description: 'Send us your requirements and get a customized offer',
      icon: Mail,
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      hoverColor: 'hover:from-amber-600 hover:to-orange-700',
      features: ['Custom packages', 'Detailed planning', 'Group discounts', 'Extended stays'],
      action: () => window.open('mailto:joyhomes250@gmail.com?subject=Booking%20Inquiry%20-%20Joy%20Home\'s&body=Hello%20Joy%20Home\'s%20Team,%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20booking%20an%20apartment%20at%20Joy%20Home\'s.%0D%0A%0D%0APreferred%20check-in%20date:%20%0D%0APreferred%20check-out%20date:%20%0D%0ANumber%20of%20guests:%20%0D%0AApartment%20preference:%20%0D%0ASpecial%20requests:%20%0D%0A%0D%0APlease%20let%20me%20know%20about%20availability%20and%20pricing.%0D%0A%0D%0AThank%20you!%0D%0ABest%20regards', '_self'),
      buttonText: 'Send Email',
      contact: 'joyhomes250@gmail.com'
    },
    {
      id: 'airbnb',
      title: 'Book with Airbnb',
      description: 'Secure booking with instant confirmation and guest protection',
      icon: ExternalLink,
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      hoverColor: 'hover:from-red-600 hover:to-pink-700',
      features: ['Instant booking', 'Guest protection', 'Secure payments', '24/7 support'],
      action: () => window.open('https://www.airbnb.com/rooms/1481055895000516008?guests=1&adults=1&s=67&unique_share_id=88d712c6-e19f-44dd-9f22-0fd13cf86263', '_blank'),
      buttonText: 'Book on Airbnb'
    },
    {
      id: 'booking',
      title: 'Book with Booking.com',
      description: 'Flexible booking options with free cancellation available',
      icon: ExternalLink,
      color: 'bg-gradient-to-br from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
      features: ['Free cancellation', 'Best price guarantee', 'No booking fees', 'Instant confirmation'],
      action: () => window.open('https://www.booking.com/hotel/rw/joy-homes-apartments.html', '_blank'),
      buttonText: 'Book on Booking.com'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'All booking methods are safe and secure'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all guests'
    },
    {
      icon: Star,
      title: 'Best Rates',
      description: 'Competitive pricing across all platforms'
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Dedicated support from booking to checkout'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center bg-amber-600/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              Multiple Booking Options Available
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Book Your Stay at <span className="text-amber-400">Joy Home's</span>
            </h1>
            <p className="text-base sm:text-lg mb-8 max-w-3xl mx-auto text-slate-300">
              Choose your preferred booking method and secure your perfect apartment today
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>Premium Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>Instant Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
              Choose Your Booking Method
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              We offer multiple convenient ways to book your stay. Select the option that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {bookingOptions.map((option, index) => (
              <div
                key={option.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-slate-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 ${option.color} ${option.hoverColor} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <option.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                          {option.title}
                        </h3>
                        {option.contact && (
                          <p className="text-sm font-medium text-slate-600 mt-1">
                            {option.contact}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-xs text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={option.action}
                    className={`w-full ${option.color} ${option.hoverColor} text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2`}
                  >
                    <span>{option.buttonText}</span>
                    <option.icon className="h-5 w-5" />
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 text-center mb-6">
              Why Book with Joy Home's?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">{benefit.title}</h4>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="inline-flex items-center bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Phone className="h-4 w-4 mr-2" />
              Emergency Contact
            </div>
            <h2 className="text-lg sm:text-xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-sm sm:text-base mb-6 text-slate-300">
              For urgent matters or last-minute bookings, contact us directly
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+250785452581"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>+250 785 452 581</span>
              </a>
              <a
                href="mailto:joyhomes250@gmail.com"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>joyhomes250@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;