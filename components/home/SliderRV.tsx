import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import TorreTerra from '../../public/assets/images/home/Slide/TorreTerra.webp'
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
            {/* <Image src={TorreTerra} className='object-cover w-full object-center mt-5' height={200} width={280} placeholder="blur" alt="Render Torres"/> */}
            <picture>
                <source srcSet='/assets/images-phone/home/Slide/RoyalView.webp' media="(max-width: 1024px)" />
                <source srcSet='/assets/images/home/Slide/RoyalView.webp' />
                <img src='/assets/images/home/Slide/RoyalView.webp' className="object-cover w-full object-center mt-5"  alt="Credenza" />
            </picture>
        </SwiperSlide>
        <SwiperSlide>
             <picture>
                <source srcSet='/assets/images-phone/home/Slide/IMG_7004.webp' media="(max-width: 1024px)" />
                <source srcSet='/assets/images/home/Slide/IMG_7004.webp' />
                <img src='/assets/images/home/Slide/IMG_7004.webp' className="object-cover w-full object-center mt-5"  alt="Credenza" />
            </picture>
        </SwiperSlide>
        <SwiperSlide>
             <picture>
                <source srcSet='/assets/images-phone/home/Slide/IMG_7666.webp' media="(max-width: 1024px)" />
                <source srcSet='/assets/images/home/Slide/IMG_7666.webp' />
                <img src='/assets/images/home/Slide/IMG_7666.webp' className="object-cover w-full object-center mt-5"  alt="Credenza" />
            </picture>
        </SwiperSlide>
        <SwiperSlide>
             <picture>
                <source srcSet='/assets/images-phone/home/Slide/RV-AMNBC--11.webp' media="(max-width: 1024px)" />
                <source srcSet='/assets/images/home/Slide/RV-AMNBC--11.webp' />
                <img src='/assets/images/home/Slide/RV-AMNBC--11.webp' className="object-cover w-full object-center mt-5"  alt="Credenza" />
            </picture>
        </SwiperSlide>
    </Swiper>
  )
}
