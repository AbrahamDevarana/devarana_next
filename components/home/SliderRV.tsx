import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import TorreTerra from '../../public/assets/images/home/TorreTerra.webp'
import Image from 'next/image';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const SliderRV = () => {
  return (
    <Swiper
        className='h-[220px] w-[280px] sliderRV'
        
        modules={[Pagination, Autoplay, EffectFade]}
        autoplay={{ delay: 2000 }}
        pagination={{
            "clickable": true
        }}
        effect={'fade'}
        grabCursor={true}
        loop={true}
    >
        <SwiperSlide>
            <Image src={TorreTerra} className='object-cover w-full object-center mt-5' height={200} width={280} placeholder="blur" alt="Render Torres"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={TorreTerra} className='object-cover w-full object-center mt-5' height={200} width={280} placeholder="blur" alt="Render Torres"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={TorreTerra} className='object-cover w-full object-center mt-5' height={200} width={280} placeholder="blur" alt="Render Torres"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={TorreTerra} className='object-cover w-full object-center mt-5' height={200} width={280} placeholder="blur" alt="Render Torres"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={TorreTerra} className='object-cover w-full object-center mt-5' height={200} width={280} placeholder="blur" alt="Render Torres"/>
        </SwiperSlide>
    </Swiper>
  )
}
