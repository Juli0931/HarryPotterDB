// const Carousel = ({ BannerImg }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)

//   const goToSlide = (index) => {
//     setCurrentImageIndex(index)
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BannerImg.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [BannerImg])

//   return (
//     <div>
//       <button onClick={() => goToSlide((currentImageIndex - 1 + BannerImg.length) % BannerImg.length)}>
//         Previous
//       </button>
//       <img src={BannerImg[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
//       <button onClick={() => goToSlide((currentImageIndex + 1) % BannerImg.length)}>
//         Next
//       </button>
//     </div>
//   )
// }

// export function ImgCarousel() {
//   const BannerImg = [MoviesCarousel, BooksCarousel]

//   return (
//     <div>
//       <Carousel BannerImg={BannerImg} />
//     </div>
//   )
// }

import { useState, useEffect } from 'react'
import MoviesCarousel from '../../../assets/MoviesCarousel.jpg'
import BooksCarousel from '../../../assets/BooksCarousel.jpg'
import HouseCarousel from '../../../assets/HouseCarousel.jpg'
import './Carousel.css'

export function Carousel () {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const BannerImg = [MoviesCarousel, BooksCarousel, HouseCarousel]

  const goToSlide = (index) => {
    setCurrentImageIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BannerImg.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [BannerImg])

  return (
    <div className='carousel-container'>
      <button
        onClick={() =>
          goToSlide(
            (currentImageIndex - 1 + BannerImg.length) % BannerImg.length
          )}
      >
        Previous
      </button>
      <img
        src={BannerImg[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className='carousel-image'
      />
      <button
        onClick={() => goToSlide((currentImageIndex + 1) % BannerImg.length)}
      >
        Next
      </button>
    </div>
  )
}
