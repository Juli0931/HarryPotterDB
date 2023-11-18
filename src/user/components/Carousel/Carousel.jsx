import { useState, useEffect } from 'react'
// import MoviesCarousel from './src/assets/MoviesCarousel-wide.jpg'
// import BooksCarousel from './src/assets/BooksCarousel.jpg'

const Carousel = ({ BannerImg }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToSlide = (index) => {
    setCurrentImageIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BannerImg.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [BannerImg])

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
  )
}

export function ImgCarousel () {
  const BannerImg = [
    // Agregar las imágenes
    // <img key='movies' src={MoviesCarousel} alt='Hogwarts castle' />,
    // <img key='books' src={BooksCarousel} alt='Harry Potter and the deathly hallows' />
  ]
  // <img src='../../assets/MoviesCarousel-wide.jpg' alt='Hogwarts castle' srcset='../../assets/MoviesCarousel-wide.jpg 640w' />
  // <img src='../../assets/BooksCarousel-wide.jpg' alt='Harry Potter and the deathly hallows' srcset='../../assets/BooksCarousel-wide.jpg 640w' />

  return (
    <div>
      <Carousel BannerImg={BannerImg} />
    </div>
  )
}
