import Image from 'next/image'
import { SwiperSlide, Swiper, } from 'swiper/react'
import { Autoplay } from 'swiper'

import Fatima from '../../public/assets/images/carrera/Testimonios/Fatima.webp'
import Itze from '../../public/assets/images/carrera/Testimonios/Itze.webp'
import Rubio from '../../public/assets/images/carrera/Testimonios/Rubio.webp'
import Ximena from '../../public/assets/images/carrera/Testimonios/Ximena.webp'
import Gregorio from '../../public/assets/images/carrera/Testimonios/Gregorio.webp'

import 'swiper/css';
import "swiper/css/pagination";

export const SliderTestimonios = () => {

  return (
    <div className='relative z-10 w-full'>
        <Swiper
            spaceBetween={60}
            slidesPerView={4}
            autoplay={{
                delay: 1,
                disableOnInteraction: false,
            }}
            loop={true}
            freeMode={true}
            modules={[Autoplay]}
            className="testimoniosSwiper"
            dir='rtl'
            

        >
            
            
            <SwiperSlide>
                <div className='relative'>
                    <Image src={Itze} alt='Itze' className='object-cover w-full' placeholder='blur' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <Image src={Rubio} alt='Itze' className='object-cover w-full' placeholder='blur'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <Image src={Ximena} alt='Ximena' className='object-cover w-full' placeholder='blur'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <Image src={Gregorio} alt='Gregorio' className='object-cover w-full' placeholder='blur'/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <Image src={Fatima} alt='Fatima' className='object-cover w-full' placeholder='blur' />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
