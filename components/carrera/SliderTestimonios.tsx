import Image from 'next/image'
// import { Autoplay } from 'swiper'
// import { type Swiper as SwiperRef } from 'swiper'
// import { SwiperSlide, Swiper } from 'swiper/react'

import Fatima from '../../public/assets/images/carrera/Testimonios/Fatima.webp'
import Itze from '../../public/assets/images/carrera/Testimonios/Itze.webp'
import Rubio from '../../public/assets/images/carrera/Testimonios/Rubio.webp'
import Ximena from '../../public/assets/images/carrera/Testimonios/Ximena.webp'
import Gregorio from '../../public/assets/images/carrera/Testimonios/Gregorio.webp'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from 'react'

export const SliderTestimonios = () => {

    // const [swiper, setSwiper] = useState<SwiperRef | null>(null);
    const settings = {
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        speed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],

    }

    return (
        <div className='relative z-10 w-full'>
            {/* <Swiper
                speed={5000}
                spaceBetween={60}
                slidesPerView={4}
                autoplay={{
                    delay: 100,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                modules={[Autoplay]}
                className="testimoniosSwiper mySwiper ease-linear"
                onSwiper={setSwiper}       
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
            </Swiper> */}

        <Slider {...settings}>
            <div className='p-5'>
                <Image src={Itze} alt='Itze' className='object-cover w-full' placeholder='blur' />
            </div>
            <div className='p-5'>
                <Image src={Rubio} alt='Itze' className='object-cover w-full' placeholder='blur'/>
            </div>
            <div className='p-5'>
                <Image src={Ximena} alt='Ximena' className='object-cover w-full' placeholder='blur'/>
            </div>
            <div className='p-5'>
                <Image src={Gregorio} alt='Gregorio' className='object-cover w-full' placeholder='blur'/>
            </div>
            <div className='p-5'>
                <Image src={Fatima} alt='Fatima' className='object-cover w-full' placeholder='blur' />    
            </div>
        </Slider>
        </div>
    )
}
