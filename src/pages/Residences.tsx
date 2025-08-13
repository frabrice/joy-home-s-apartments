import React, { useState } from 'react';
import { Bed, Bath, Wifi, Car, Utensils, Tv, Wind, Sparkles, Calendar, DollarSign } from 'lucide-react';

const Residences = () => {
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);

  const apartments = [
    {
      id: 1,
      name: "Apartment 1",
      bedrooms: 2,
      bathrooms: "2.5",
      nightlyRate: 70,
      monthlyRate: 1200,
      image: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%2011.jpg?raw=true",
      features: ["Half bath for guests", "Modern layout", "City views"],
      description: "Comfortable 2-bedroom apartment with 2 full bathrooms and a convenient half bath (guest toilet) in the living area."
    },
    {
      id: 2,
      name: "Apartment 2",
      bedrooms: 3,
      bathrooms: "3",
      nightlyRate: 100,
      monthlyRate: 1500,
      image: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%206.jpg?raw=true",
      features: ["Largest unit", "Perfect for families", "Spacious living"],
      description: "Our most spacious 3-bedroom apartment with 3 full bathrooms, ideal for families or groups seeking extra space."
    },
    {
      id: 3,
      name: "Apartment 3",
      bedrooms: 2,
      bathrooms: "2",
      nightlyRate: 50,
      monthlyRate: 1000,
      image: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20three%205.jpg?raw=true",
      features: ["Best value", "Cozy atmosphere", "Great location"],
      description: "Excellent value 2-bedroom apartment with 2 full bathrooms, perfect for budget-conscious travelers."
    },
    {
      id: 4,
      name: "Apartment 4",
      bedrooms: 2,
      bathrooms: "2.5",
      nightlyRate: 100,
      monthlyRate: 1200,
      image: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20five%2013.jpg?raw=true",
      features: ["Master with bath tub", "Luxury finishes", "Half bath for guests"],
      description: "Premium 2-bedroom apartment featuring a master bedroom with luxurious bath tub and a guest half bath."
    }
  ];

  const amenities = [
    { icon: Tv, name: "Smart TV", description: "High-definition entertainment" },
    { icon: Wifi, name: "High-Speed Wi-Fi", description: "Complimentary internet access" },
    { icon: Utensils, name: "Full Kitchen", description: "Microwave, fridge, oven & cooker" },
    { icon: Wind, name: "Air Conditioning", description: "Climate control comfort" },
    { icon: Sparkles, name: "Washing Machine", description: "In-unit laundry facilities" },
    { icon: Car, name: "Parking", description: "2 on-premises spaces available" }
  ];

  const propertyFeatures = [
    "2 secure gates for enhanced privacy",
    "2 on-premises parking spaces",
    "4 premium residential units",
    "Weekly cleaning service for long stays",
    "24/7 security and maintenance",
    "Modern appliances in every unit"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-amber-600">Joy Home's</span> Residences
          </h1>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Available Apartments</h2>
            <p className="text-lg text-slate-600">
              Each apartment comes fully furnished with modern amenities and weekly cleaning for long stays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apartments.map((apartment) => (
              <div key={apartment.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={apartment.image} 
                    alt={apartment.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {apartment.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Bed className="h-5 w-5 text-slate-600" />
                        <span className="text-slate-700">{apartment.bedrooms} BR</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bath className="h-5 w-5 text-slate-600" />
                        <span className="text-slate-700">{apartment.bathrooms} BA</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4">{apartment.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {apartment.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4 text-slate-600" />
                            <span className="text-sm text-slate-600">Nightly</span>
                          </div>
                          <p className="text-lg font-bold text-slate-900">${apartment.nightlyRate}</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4 text-slate-600" />
                            <span className="text-sm text-slate-600">Monthly</span>
                          </div>
                          <p className="text-lg font-bold text-slate-900">${apartment.monthlyRate}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedUnit(selectedUnit === apartment.id ? null : apartment.id)}
                        className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors duration-200"
                      >
                        {selectedUnit === apartment.id ? 'Hide Details' : 'View Details'}
                      </button>
                    </div>
                  </div>
                  
                  {selectedUnit === apartment.id && (
                    <div className="mt-4 pt-4 border-t bg-slate-50 -mx-6 -mb-6 px-6 pb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Included Amenities:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <amenity.icon className="h-4 w-4 text-amber-600" />
                            <span className="text-sm text-slate-700">{amenity.name}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                        <p className="text-sm text-amber-800">
                          <strong>Long Stay Bonus:</strong> Monthly residents receive 1 free cleaning service per week!
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Joy Home's Features</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our property offers premium amenities and security features for your peace of mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-amber-600" />
                </div>
                <p className="text-slate-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Standard Amenities</h2>
            <p className="text-lg text-slate-600">
              Every apartment comes fully equipped with these essential amenities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{amenity.name}</h3>
                <p className="text-slate-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to check availability and secure your preferred apartment at Joy Home's.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-now"
              className="bg-amber-600 text-white px-8 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors duration-200"
            >
              Book Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-slate-800 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Residences;