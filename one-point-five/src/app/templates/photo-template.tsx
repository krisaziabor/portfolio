import React, { useState, useEffect } from "react";

interface PhotoSeriesTemplateProps {
  title: string;
  images: { src: string; caption?: string }[];
  description: string;
}

const PhotoSeriesTemplate: React.FC<PhotoSeriesTemplateProps> = ({
  title,
  images,
  description,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  // Reset currentIndex when navigating to a new photo series
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);
  
  // Safety check: ensure currentIndex is valid before rendering
  if (currentIndex >= totalImages) {
    setCurrentIndex(0); // Reset if out of bounds
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation(); // Prevent triggering the parent div click
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  // Make sure we have a valid current image before rendering
  const currentImage = images[currentIndex] || images[0];

  return (
    <div className="photo-series">
      {/* Photo Container - Only shows current photo */}
      <div className="photo-container mb-8 cursor-pointer" onClick={nextImage}>
        <img
          src={currentImage.src}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="w-4/5 h-auto ml-0"
        />

        {/* Minimal Pagination Indicator */}
        <div className="mt-2 text-xs font-[family-name:var(--font-semi-diatype)] text-gray-500">
          {currentIndex + 1}/{totalImages}
        </div>
      </div>
    </div>
  );
};

export default PhotoSeriesTemplate;
