import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';


import { CardVacantes } from './CardVacantes';
import { Autoplay } from 'swiper';
import { VacanteModalProps } from '../../interfaces';

export const SliderVacantes = ({setShowModal, setModalContent}:VacanteModalProps) => {
  return (
    <>
        <Swiper
			spaceBetween={80}
			slidesPerView={4}
		 	 autoplay={{
				delay: 100,
				disableOnInteraction: false,
			}}
			loop={true}
			freeMode={true}
			modules={[Autoplay]}
			className="testimoniosSwiper"
			breakpoints={{
				320: {
					slidesPerView: 1,	
				},
				640: {
					slidesPerView: 2,	
				},
				768: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 4,
				}}
			}
        >
            <SwiperSlide>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />
            </SwiperSlide>                 
            <SwiperSlide>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />
            </SwiperSlide>                 
            <SwiperSlide>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />
            </SwiperSlide>                 
            <SwiperSlide>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />
            </SwiperSlide>                 
            <SwiperSlide>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />
            </SwiperSlide>                 
        </Swiper>
    </>
  )
}
