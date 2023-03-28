import React, { useState } from 'react'

function Gallery() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    { src: 'asset/image/taj.webp', alt: 'image 1' },
    { src: 'asset/image/hawamahal.webp', alt: 'image 2' },
    { src: 'asset/image/varanasi.webp', alt: 'image 3' },
  ]

  return (
    <div>
      <img src={images[currentImage].src} alt={images[currentImage].alt} />
      <button onClick={() => setCurrentImage((currentImage + 1) % images.length)}>
        Next
      </button>
    </div>
  )
}

export default Gallery
