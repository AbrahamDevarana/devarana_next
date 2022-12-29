import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { CardCarrera } from './Card/CardCarrera';

import Construccion from '../../public/assets/images/carrera/Construccion.webp'
import KickOff from '../../public/assets/images/carrera/KickOff.webp'
import EventoAmenidades from '../../public/assets/images/carrera/EventoAmenidades.webp'
import Pride from '../../public/assets/images/carrera/Pride.webp'
import Reserva from '../../public/assets/images/carrera/Reserva.webp'
import ConstruccionC from '../../public/assets/images/carrera/ConstruccionC.webp'
import KickOffC from '../../public/assets/images/carrera/KickOffC.webp'
import EventoAmenidadesC from '../../public/assets/images/carrera/EventoAmenidadesC.webp'
import PrideC from '../../public/assets/images/carrera/PrideC.webp'
import ReservaC from '../../public/assets/images/carrera/ReservaC.webp'

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
            <CardCarrera picture={KickOff}  previewPicture={KickOffC} altPicture="KickOff" description='Somos creadores, arquitectos y diseñadores de lo extraordinario' title='SOMOS DEVARANA' />
        </SwiperSlide>
        <SwiperSlide>
            <CardCarrera picture={Construccion}  previewPicture={ConstruccionC} altPicture="Construccion" description='Trabajamos como equipo para lograr la excelencia en cada acción que hacemos.' title='SOMOS CALIDAD'  />
        </SwiperSlide>
        <SwiperSlide>
            <CardCarrera picture={EventoAmenidades}  previewPicture={EventoAmenidadesC} altPicture="EventoAmenidades" description='Diseñamos nuestra cultura organizacional con base en la pasión, compromiso y dedicación.' title='CULTURA ORGANIZACIONAL'  />
        </SwiperSlide>
        <SwiperSlide>
            <CardCarrera picture={Pride}  previewPicture={PrideC} altPicture="Pride" description='La diversidad es parte de nuestro ADN, está en nuestros valores y nos define como empresa.' title='SOMOS INCLUYENTES'  />
        </SwiperSlide>
        <SwiperSlide>
            <CardCarrera picture={Reserva}  previewPicture={ReservaC} altPicture="Reserva" description='Somos conscientes del impacto que tenemos en nuestro entorno.' title='SOMOS SOCIALMENTE RESPONSABLES'  />
        </SwiperSlide>
    </Swiper>
  )
}
