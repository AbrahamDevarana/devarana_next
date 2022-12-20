import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export const SliderVacantes = () => {
  return (
    <>
        <Swiper>
            <SwiperSlide>
                <div className='rounded-3xl relative'>
                    {/* Lorepm Picsum Image */}
                    {/* <Image src='https://picsum.photos/500/300' alt='Loremp Picsum' layout='fill'  className='rounded-3xl' /> */}
                </div>
            </SwiperSlide>
        </Swiper>
    </>
  )
}
