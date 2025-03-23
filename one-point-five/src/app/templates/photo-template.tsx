import React, { useState, useEffect } from "react";
import Image from "next/image";

interface PhotoSeriesTemplateProps {
  title: string;
  images: { src: string; caption?: string }[];
  description: string;
}

const PhotoSeriesTemplate: React.FC<PhotoSeriesTemplateProps> = ({
  title,
  images,
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

  // Make sure we have a valid current image before rendering
  const currentImage = images[currentIndex] || images[0];

  return (
    <div className="photo-series">
      {/* Photo Container - Only shows current photo */}
      <div className="photo-container mb-8 cursor-pointer" onClick={nextImage}>
        <div className="relative w-4/5 aspect-auto">
          <Image
            src={currentImage.src}
            alt={`${title} - Image ${currentIndex + 1}`}
            width={1200}
            height={800}
            className="ml-0"
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* Minimal Pagination Indicator */}
        <div className="mt-2 text-xs font-[family-name:var(--font-semi-diatype)] text-gray-500">
          {currentIndex + 1} OF {totalImages}
        </div>
      </div>
    </div>
  );
};

export default PhotoSeriesTemplate;
