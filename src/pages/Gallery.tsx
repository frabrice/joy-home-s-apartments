import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const interiorImages = [
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20three%202.jpg?raw=true",
      alt: "Modern Interior Design",
      category: "Interior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20three%204.jpg?raw=true",
      alt: "Elegant Interior Space",
      category: "Interior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20three%205.jpg?raw=true",
      alt: "Contemporary Interior Layout",
      category: "Interior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20three%206.jpg?raw=true",
      alt: "Stylish Interior Features",
      category: "Interior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%202.jpg?raw=true",
      alt: "Luxury Living Space",
      category: "Interior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%2010.jpg?raw=true",
      alt: "Premium Interior Design",
      category: "Interior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%2013.jpg?raw=true",
      alt: "Modern Living Area",
      category: "Interior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%2028.jpg?raw=true",
      alt: "Elegant Interior Space",
      category: "Interior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%203.jpg?raw=true",
      alt: "Contemporary Interior",
      category: "Interior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%205.jpg?raw=true",
      alt: "Sophisticated Interior Design",
      category: "Interior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%206.jpg?raw=true",
      alt: "Premium Living Space",
      category: "Interior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%207.jpg?raw=true",
      alt: "Modern Interior Layout",
      category: "Interior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%2012.jpg?raw=true",
      alt: "Luxury Interior Features",
      category: "Interior"
    }
  ];

  const kitchenImages = [
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%204.jpg?raw=true",
      alt: "Modern Kitchen Layout",
      category: "Kitchen"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%206.jpg?raw=true",
      alt: "Contemporary Kitchen Design",
      category: "Kitchen"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%207.jpg?raw=true",
      alt: "Elegant Kitchen Space",
      category: "Kitchen"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%208.jpg?raw=true",
      alt: "Modern Kitchen Appliances",
      category: "Kitchen"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%209.jpg?raw=true",
      alt: "Kitchen Counter Design",
      category: "Kitchen"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20three%208.jpg?raw=true",
      alt: "Stylish Kitchen Layout",
      category: "Kitchen"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20three%2022.jpg?raw=true",
      alt: "Premium Kitchen Features",
      category: "Kitchen"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%2010.jpg?raw=true",
      alt: "Kitchen Dining Area",
      category: "Kitchen"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%2011.jpg?raw=true",
      alt: "Complete Kitchen Setup",
      category: "Kitchen"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20five%203.jpg?raw=true",
      alt: "Luxury Kitchen Design",
      category: "Kitchen"
    }
  ];

  const roomsImages = [
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20three%2014.jpg?raw=true",
      alt: "Modern Bedroom Design",
      category: "Rooms"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%2015.jpg?raw=true",
      alt: "Elegant Bedroom Space",
      category: "Rooms"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%2016.jpg?raw=true",
      alt: "Comfortable Bedroom Layout",
      category: "Rooms"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%2017.jpg?raw=true",
      alt: "Spacious Bedroom Interior",
      category: "Rooms"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%2020.jpg?raw=true",
      alt: "Premium Bedroom Features",
      category: "Rooms"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%2016.jpg?raw=true",
      alt: "Contemporary Bedroom Design",
      category: "Rooms"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%2017.jpg?raw=true",
      alt: "Luxury Bedroom Space",
      category: "Rooms"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%2020.jpg?raw=true",
      alt: "Stylish Bedroom Layout",
      category: "Rooms"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%2022.jpg?raw=true",
      alt: "Cozy Bedroom Interior",
      category: "Rooms"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%2023.jpg?raw=true",
      alt: "Beautiful Bedroom Design",
      category: "Rooms"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20five%205.jpg?raw=true",
      alt: "Master Bedroom Suite",
      category: "Rooms"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20five%208.jpg?raw=true",
      alt: "Elegant Bedroom Features",
      category: "Rooms"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20five%207.jpg?raw=true",
      alt: "Comfortable Bedroom Space",
      category: "Rooms"
    }
  ];

  const bathroomImages = [
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20three%2017.jpg?raw=true",
      alt: "Modern Bathroom Design",
      category: "Bathroom"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20three%2018.jpg?raw=true",
      alt: "Elegant Bathroom Space",
      category: "Bathroom"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20three%2019.jpg?raw=true",
      alt: "Contemporary Bathroom Layout",
      category: "Bathroom"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%2021.jpg?raw=true",
      alt: "Stylish Bathroom Features",
      category: "Bathroom"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20one%2024.jpg?raw=true",
      alt: "Luxury Bathroom Interior",
      category: "Bathroom"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%2028.jpg?raw=true",
      alt: "Premium Bathroom Design",
      category: "Bathroom"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%2029.jpg?raw=true",
      alt: "Modern Bathroom Fixtures",
      category: "Bathroom"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%2032.jpg?raw=true",
      alt: "Sophisticated Bathroom Space",
      category: "Bathroom"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20two%2031.jpg?raw=true",
      alt: "Complete Bathroom Setup",
      category: "Bathroom"
    }
  ];

  const exteriorImages = [
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20four%201.jpg?raw=true",
      alt: "Building Exterior View",
      category: "Exterior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20four%203.jpg?raw=true",
      alt: "Property Exterior Design",
      category: "Exterior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20four%205.jpg?raw=true",
      alt: "Building Architecture",
      category: "Exterior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20four%206.jpg?raw=true",
      alt: "Property Facade",
      category: "Exterior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20four%208.jpg?raw=true",
      alt: "Exterior Architecture",
      category: "Exterior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20four%2012.jpg?raw=true",
      alt: "Building Design",
      category: "Exterior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20four%2015.jpg?raw=true",
      alt: "Property Exterior Features",
      category: "Exterior"
    },
    {
      src: "https://github.com/frabrice/joy-home-s-images/blob/main/Image%20four%2018.jpg?raw=true",
      alt: "Complete Building View",
      category: "Exterior"
    }
  ];

  const images = [...interiorImages, ...kitchenImages, ...roomsImages, ...bathroomImages, ...exteriorImages];

  const categories = ["Interior", "Rooms", "Bathroom", "Kitchen", "Exterior"];
  const [selectedCategory, setSelectedCategory] = useState("Interior");

  const filteredImages = images.filter(img => img.category === selectedCategory);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-amber-600">Joy Home's</span> Gallery
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Explore the beauty and elegance of Joy Home's through our carefully curated collection of images.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative w-full h-48 sm:h-64 bg-gray-200">
                  {!loadedImages.has(index) && !imageErrors.has(index) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
                    </div>
                  )}
                  {imageErrors.has(index) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <p className="text-gray-500 text-sm">Image unavailable</p>
                    </div>
                  )}
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading="lazy"
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                    className={`w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300 ${
                      loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                    <p className="text-sm sm:text-lg font-semibold">{image.alt}</p>
                  </div>
                </div>
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                  <span className="bg-amber-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-2 sm:p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-amber-600 transition-colors z-10"
            >
              <X className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-600 transition-colors z-10"
            >
              <ChevronLeft className="h-8 w-8 sm:h-12 sm:w-12" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-600 transition-colors z-10"
            >
              <ChevronRight className="h-8 w-8 sm:h-12 sm:w-12" />
            </button>
            
            <img 
              src={filteredImages[selectedImage].src} 
              alt={filteredImages[selectedImage].alt}
              loading="eager"
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white">
              <p className="text-sm sm:text-lg font-semibold">{filteredImages[selectedImage].alt}</p>
              <p className="text-sm text-slate-300">{selectedImage + 1} of {filteredImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;