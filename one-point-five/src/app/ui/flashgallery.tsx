import { useState, useEffect } from "react";

// Rapid Photo Gallery component
const RapidPhotoGallery = () => {
  // Array of image paths - replace with your actual images
const images = Array.from({ length: 41 }, (_, i) => `/flash-gallery/Gallery${i === 0 ? '' : `-${i}`}.jpg`);
    // Add more images as needed

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 300ms (adjust timing as desired)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 200); // Fast transition - 300ms

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="gallery-container w-full">
      {/* Show only the current image */}
      <img
        src={images[currentImageIndex]}
        alt="Gallery image"
        className="w-full h-auto object-cover fade-in-out"
      />

      <style jsx>{`
        .gallery-container {
          width: 100%;
          overflow: hidden;
        }

        .fade-in-out {
          transition: opacity 100ms ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default RapidPhotoGallery;