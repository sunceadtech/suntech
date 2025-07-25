import React, { useState } from "react";

const PortfolioCard = ({ title, category, url, images }) => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollDistance = (images.length - 1) * 13;

  return (
    <div
      className="bg-white border border-orange-200 rounded-lg shadow overflow-hidden group transition hover:shadow-xl max-w-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Scroll Area */}
      <div className="relative h-52 w-full overflow-hidden">
        <div
          className="flex flex-col w-full transition-transform duration-[8000ms] ease-linear"
          style={{
            transform: isHovered
              ? `translateY(-${scrollDistance}rem)`
              : "translateY(0)",
          }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`project-${idx}`}
              className="w-full h-52 object-cover"
              loading="lazy"
            />
          ))}
        </div>

        {/* Info Overlay */}
        {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950/90 via-orange-400/30 to-transparent px-4 py-3 text-white z-10">
          <h3 className="text-lg font-semibold text-orange-400 truncate">
            {title}
          </h3>
          <p className="text-sm font-bold text-blue-500">{category}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-3 py-1 text-sm font-medium text-white bg-orange-500/80 rounded-full hover:bg-orange-600 transition duration-300"
          >
            View Website
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default PortfolioCard;
