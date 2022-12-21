import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../Button'
import Image from 'next/image'
import 'swiper/css';
import credenza from '../../public/assets/images/home/Credenza.webp'
import fotoSalon from '../../public/assets/images/home/FotoSalonIngles.webp'
import { Autoplay } from 'swiper';

export const SliderHome = () => {
  return (
    <Swiper
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
        loop={true}
    >
        <SwiperSlide>
        <div className='col-span-1 relative pt-1 pr-0.5'>
                <Image src={credenza} className='object-cover w-full' height={600} width={1000} placeholder="blur" alt="Credenza"/> 
				<div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-1 bottom-0'>
                    <div className="flex flex-col items-center justify-end pb-12 h-full">
                        <h2 className='font-playfair text-4xl text-white pb-5'>DEVARANA <span className='text-4xl font-mulish'>Home</span></h2> 
                        <Button type='button' textColor='white' colorType='whiteInverted' > MUY PRONTO </Button>
                    </div>
                  
                </div>				
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='col-span-1 relative pt-1 pl-0.5'>
                <Image src={fotoSalon} className='object-cover w-full' height={600} width={1000} placeholder="blur" alt="Salon Ingles"/>
				<div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-1 bottom-0' >
                    <div className="flex flex-col items-center justify-end pb-12 h-full">
                        <h2 className='font-playfair text-4xl text-white pb-5'>Nuestro equipo</h2> 
                        <Button type='button' textColor='white' colorType='whiteInverted' > SABER MÁS </Button>
                    </div>
                </div>
            </div>	
        </SwiperSlide>
    </Swiper>
  )
}
