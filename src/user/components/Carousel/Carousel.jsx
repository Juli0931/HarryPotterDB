import { useState, useEffect } from "react";
import MoviesCarousel from "../../../assets/MoviesCarousel.jpg";
import BooksCarousel from "../../../assets/BooksCarousel.jpg";
import HouseCarousel from "../../../assets/HouseCarousel.jpg";
import "./Carousel.css";

export function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const BannerImg = [MoviesCarousel, BooksCarousel, HouseCarousel];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BannerImg.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [BannerImg]);

  return (
    <div className="carousel-container">
      <img
        src={BannerImg[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className="carousel-image"
      />
      <div className="gradient-overlay" />
    </div>
  );
}
