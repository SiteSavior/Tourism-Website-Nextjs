import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';
import taj from '../public/asset/image/slide1.webp'
import hawamahal from '../public/asset/image/slide2.webp'
import alberthall from '../public/asset/image/slide4.webp'
import goldentemple from '../public/asset/image/testt.webp'
import taj2 from '../public/asset/image/taj2.jpg'


import SwiperCore, { Autoplay } from 'swiper';

const Slider = () => {
  SwiperCore.use([Autoplay])
  return (

    <div className=''>  <Swiper
      // spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 4000
      }}
    // onSlideChange={() => console.log('slide change')}
    //  onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="w-screen h-[40rem]">
          <Image className='h-[40rem]'
            src={taj2}
            alt="tajmahal"

          />
        </div>

      </SwiperSlide>
      <SwiperSlide >
        <div className="w-screen h-[40rem]">
          <Image className='h-[40rem]'
            src={hawamahal}
            alt="hawamahal"

          />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="w-screen h-[40rem]">
          <Image className='h-[40rem]'
            src={goldentemple}
            alt="goldentemple"
          />
        </div></SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-[40rem]">
          <Image className='h-[40rem]'
            src={alberthall}
            alt="alberthall"
          />
        </div></SwiperSlide>

    </Swiper></div>
  )
}

export default Slider