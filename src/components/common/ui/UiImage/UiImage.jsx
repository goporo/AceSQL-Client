import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const UiImage = ({ src, alt, height, width, className }) => (

  <>
    <LazyLoadImage
      alt={alt}
      height={height}
      src={src} // use normal <img> attributes as props
      width={width}
      className={className}
      placeholderSrc="/assets/images/place_holder/blur_bg.jpg"
    />
  </>

)

export default UiImage
