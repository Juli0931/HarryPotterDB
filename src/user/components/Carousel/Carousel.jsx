import { useState, useEffect } from "react";

const Carousel = ({ BannerImg }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BannerImg.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [BannerImg]);

  return (
    <div>
      <button onClick={() => goToSlide((currentImageIndex - 1 + BannerImg.length) % BannerImg.length)}>
        Previous
      </button>
      <img src={BannerImg[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      <button onClick={() => goToSlide((currentImageIndex + 1) % BannerImg.length)}>
        Next
      </button>
    </div>
  );
};

export function ImgCarousel() {
  const BannerImg = [
    // Agregar las imágenes
    <img src="" alt="" srcset="" />
  ];

  return (
    <div>
      <Carousel BannerImg={BannerImg} />
    </div>
  );
}