
import { useState } from "react";

function ImageWithLoader({ src, alt, className }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  return (
    <div className="image-wrapper">
      {isLoading && (
        <div className="image-placeholder">
          <img
            src="/Victoria-logo.png"
            alt=""
            className="loading-logo"
          />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={handleImageLoad}
        onError={() => setIsLoading(false)}
      />
    </div>
  );
}

export default ImageWithLoader;
