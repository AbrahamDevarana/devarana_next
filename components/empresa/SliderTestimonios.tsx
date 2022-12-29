import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

export const SliderTestimonios = () => {
  return (
    <Swiper
        slidesPerView={1}
        lazy={true}
        effect="fade"
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        loop={true}
    >
        <SwiperSlide>
            <div className="max-w-3xl w-full mx-auto flex items-center">
                <p className="lg:text-[150px] text-[80px] text-devarana-blue lg:-translate-y-12 -translate-y-8" >“</p>
                <p className="text-center text-devarana-graph lg:px-10 px-2 lg:text-xl text-[10px] font-light">
                    Para mi familia es un placer haber invertido en un departamento de DEVARANA,
                    nos gustó el proyecto porque manejan excelente calidad en materiales, equipamiento,
                    accesorios, acabados y las áreas comunes también son excelentes. 
                </p>
                <sub className="lg:text-[150px] text-[80px] text-devarana-blue px-5 items-end flex lg:translate-y-14 translate-y-10">”</sub>
            </div>
            <p className="lg:text-xl text-[10px] font-bold text-devarana-blue text-center"> Miguel Cortés </p>
        </SwiperSlide>    
        <SwiperSlide>
            <div className="max-w-3xl w-full mx-auto flex items-center">
                <p className="lg:text-[150px] text-[80px] text-devarana-blue lg:-translate-y-12 -translate-y-8" >“</p>
                <p className="text-center text-devarana-graph lg:px-10 px-2 lg:text-xl text-[10px] font-light">
                    Conocí a DEVARANA con High Gardens y me encantó, por lo que al iniciarse el proyecto de
                    Royal View sin dudarlo me animé a comprar, no solo por la calidad en la construcción y
                    en su diseño, sino por la alta calidad humana de todos sus colaboradores.
                </p>
                <sub className="lg:text-[150px] text-[80px] text-devarana-blue px-5 items-end flex lg:translate-y-14 translate-y-10">”</sub>
            </div>
            <p className="lg:text-xl text-[10px] font-bold text-devarana-blue text-center"> John Doe </p>
        </SwiperSlide>    
    </Swiper>
  )
}
