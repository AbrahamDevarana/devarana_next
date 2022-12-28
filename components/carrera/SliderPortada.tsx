import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

export const SliderPortada = () => {
  return (
    <Swiper
        spaceBetween={20}
        slidesPerView={3.5} 
        breakpoints={{
            320: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 34,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
        }}
    >
        <SwiperSlide>
            <div className='relative lg:h-[350px] h-[200px]'>
                <picture>
                    <source srcSet='/assets/images-phone/carrera/KickOff.webp' media="(max-width: 1024px)" />
                    <source srcSet='/assets/images/carrera/KickOff.webp' />
                    <img src='/assets/images/carrera/KickOff.webp' className="object-cover w-full inset-0 z-10"  alt="KickOff" />
                </picture>

                <div className='flex w-full h-full justify-center align-middle flex-col px-7 bg-devarana-midnight bg-opacity-60 absolute inset-0'>
                    <p className='text-white z-20 font-bold lg:text-xl pb-1'>SOMOS DEVARANA</p>
                    <p className='text-white z-20 font-light lg:text-2xl'> Somos creadores, arquitectos y diseñadores de lo extraordinario.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative lg:h-[350px] h-[200px]'>
                <div>
                    <picture>
                        <source srcSet='/assets/images-phone/carrera/Construccion.webp' media="(max-width: 1024px)" />
                        <source srcSet='/assets/images/carrera/Construccion.webp' />
                        <img src='/assets/images/carrera/Construccion.webp' className="z-10 lg:h-[150px] h-[100px] w-full object-cover object-center"  alt="Construccion" />
                    </picture>
                </div>
                <div className='flex w-full lg:h-[200px] h-[100px] justify-center align-middle flex-col px-7 bg-white'>
                    <p className='text-devarana-pink z-20 font-bold lg:text-xl pb-1 text-sm'>SOMOS CALIDAD</p>
                    <p className='text-devarana-graph-darker z-20 font-light lg:text-2xl text-xs'> Trabajamos como equipo para lograr la excelencia en cada acción que hacemos.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative lg:h-[350px] h-[200px]'>
                <div>
                    <picture>
                        <source srcSet='/assets/images-phone/carrera/EventoAmenidades.webp' media="(max-width: 1024px)" />
                        <source srcSet='/assets/images/carrera/EventoAmenidades.webp' />
                        <img src='/assets/images/carrera/EventoAmenidades.webp' className="z-10 lg:h-[150px] h-[100px] w-full object-cover object-center"  alt="EventoAmenidades" />
                    </picture>
                </div>
                <div className='flex w-full lg:h-[200px] h-[100px] justify-center align-middle flex-col px-7 bg-white'>
                    <p className='text-devarana-pink z-20 font-bold lg:text-xl pb-1 text-sm'> CULTURA ORGANIZACIONAL </p>
                    <p className='text-devarana-graph-darker z-20 font-light lg:text-2xl text-xs'>Diseñamos nuestra cultura organizacional con base en la pasión, compromiso y dedicación. </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative lg:h-[350px] h-[200px]'>
                <div>
                    <picture>
                        <source srcSet='/assets/images-phone/carrera/Pride.webp' media="(max-width: 1024px)" />
                        <source srcSet='/assets/images/carrera/Pride.webp' />
                        <img src='/assets/images/carrera/Pride.webp' className="z-10 lg:h-[150px] h-[100px] w-full object-cover object-center"  alt="Pride" />
                    </picture>
                </div>
                <div className='flex w-full lg:h-[200px] h-[100px] justify-center align-middle flex-col px-7 bg-white'>
                    <p className='text-devarana-pink z-20 font-bold lg:text-xl pb-1 text-sm'> SOMOS INCLUYENTES </p>
                    <p className='text-devarana-graph-darker z-20 font-light lg:text-2xl text-xs'>La diversidad es parte de nuestro ADN, está en nuestros valores y nos define como empresa.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative lg:h-[350px] h-[200px]'>
                <div>
                    <picture>
                        <source srcSet='/assets/images-phone/carrera/Reserva.webp' media="(max-width: 1024px)" />
                        <source srcSet='/assets/images/carrera/Reserva.webp' />
                        <img src='/assets/images/carrera/Reserva.webp' className="z-10 lg:h-[150px] h-[100px] w-full object-cover object-center"  alt="Reserva" />
                    </picture>
                </div>
                <div className='flex w-full lg:h-[200px] h-[100px] justify-center align-middle flex-col px-7 bg-white'>
                    <p className='text-devarana-pink z-20 font-bold lg:text-xl pb-1 text-sm'>SOMOS SOCIALMENTE RESPONSABLES</p>
                    <p className='text-devarana-graph-darker z-20 font-light lg:text-2xl text-xs'>Somos conscientes del impacto que tenemos en nuestro entorno.</p>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}
