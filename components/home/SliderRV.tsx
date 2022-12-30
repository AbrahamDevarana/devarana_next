import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";

export const SliderRV = () => {
  return (
    <Swiper
        className='h-[220px] w-[280px] sliderRV'
        
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000 }}
        pagination={{
            "clickable": true
        }}
        grabCursor={true}
        loop={true}
    >
        <SwiperSlide>
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
