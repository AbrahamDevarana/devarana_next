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

export const SliderTestimonios = () => {


    const settings = {
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        speed: 4000,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],

    }

    return (
        <div className='relative z-10 w-full'>
            <Slider {...settings}>
                <div className='relative px-5'>
                    <div className="relative">
                        <Image src={Itze} alt='Itze' className='object-cover w-full' placeholder='blur' />
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“DEVARANA me inspira a descubrir mi mejor versión profesional y personal”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Itze Vega</p>
                                    <p className='text-white font-bold'>COMERCIAL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative px-5'>
                    <div className="relative">
                        <Image src={Rubio} alt='Rubio' className='object-cover w-full' placeholder='blur'/>
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“DEVARANA para mí es un lugar excepcional, con un gran equipo de personas apasionadas, todos con la misma meta en común, ser un factor de cambio, siempre apuntando a la satisfacción de nuestro cliente”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Luis Rubio</p>
                                    <p className='text-white font-bold'>OPERACIONES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative px-5'>
                    <div className="relative">
                        <Image src={Ximena} alt='Ximena' className='object-cover w-full' placeholder='blur'/>
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“Ser parte de DEVARANA significa buscar la excelencia y ofrecer a nuestros clientes no solo las mejores residencias del mercado sino experiencias inigualables”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Ximena Páramo</p>
                                    <p className='text-white font-bold'>INNOVACIÓN Y CALIDAD</p>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>                
                <div className='relative px-5'>
                    <div className="relative">
                        <Image src={Gregorio} alt='Gregorio' className='object-cover w-full' placeholder='blur'/>
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“DEVARANA ha sido un parteaguas en mi carrera profesional, estoy muy agradecido y contento de pertenecer a una empresa de clase mundial”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Gregorio León</p>
                                    <p className='text-white font-bold'>COMERCIAL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative px-5'>
                    <div className="relative">
                        <Image src={Fatima} alt='Fatima' className='object-cover w-full' placeholder='blur' />  
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“Para mi DEVARANA es una oportunidad de colaborar en lo que me apasiona y aprender constantemente”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Fátima Ortiz</p>
                                    <p className='text-white font-bold'>GERENCIA GENERAL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
