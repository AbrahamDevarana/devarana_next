import { Swiper, SwiperSlide } from 'swiper/react';
import Amor from '../svg/amor';
import Apasionados from '../svg/apasionados';
import Excelencia from '../svg/excelencia';
import Extraordinario from '../svg/extraordinario';
import Triunfador from '../svg/triunfador';
import Innovacion from '../svg/innovacion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';



export const SliderValores = () => {
  return (
    <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        lazy={true}
        breakpoints={{
            1024: {
                slidesPerView: 3,
            },
            640: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        }}
        className="valoresSwiper"
    >
        <SwiperSlide>
                <div className=" justify-center flex-col gap-5 flex py-[60px] px-5">
                    <Amor className="fill-white h-16 w-16 mx-auto" />
                    <h3 className="text-center text-white font-playfair text-3xl"><span className="text-devarana-babyblue font-playfair">Inspiramos con</span> Amor</h3>
                    <p className="text-white text-lg px-10 font-light"> 
                        El amor verdadero es preeminente en esta
                        vida y nos motiva a hacer el bien en todo lo
                        que emprendemos. Con nuestras acciones
                        tratamos de hacer de este mundo un lugar
                        mejor.
                    </p>
                </div>
        </SwiperSlide>                   
        <SwiperSlide>      
                <div className=" justify-center flex-col gap-5 flex py-[60px] px-5">
                    <Triunfador className="fill-white h-16 w-16 mx-auto" />
                    <h3 className="text-center text-white font-playfair text-3xl"><span className="text-devarana-babyblue font-playfair">Espíritu</span> Triunfador</h3>
                    <p className="text-white text-lg px-10 font-light"> 
                        ¡Somos optimistas, nos enfocamos en lo
                        positivo y ante cualquier situación nos
                        acompaña nuestro espíritu triunfador!
                    </p>
                </div>
        </SwiperSlide>                   
        <SwiperSlide>
                <div className=" justify-center flex-col gap-5 flex py-[60px] px-5">
                    <Extraordinario className="fill-white h-16 w-16 mx-auto" />
                    <h3 className="text-center text-white font-playfair text-3xl"><span className="text-devarana-babyblue font-playfair">Lo </span> Extraordinario<span className="text-devarana-babyblue font-playfair"> es Primero</span>  </h3>
                    <p className="text-white text-lg px-10 font-light"> 
                        La atención a los detalles, nuestro servicio
                        legendario y esfuerzo por la satisfacción
                        total, son parte de nuestra esencia.
                    </p>
                </div>
        </SwiperSlide>                   
        <SwiperSlide>
                <div className=" justify-center flex-col gap-5 flex py-[60px] px-5">
                    <Apasionados className="fill-white h-16 w-16 mx-auto" />
                    <h3 className="text-center text-white font-playfair text-3xl"><span className="text-devarana-babyblue font-playfair">Somos</span> Apasionados</h3>
                    <p className="text-white text-lg px-10 font-light"> 
                        Buscamos nuestra esencia para dedicarnos
                        a lo que amamos y hacer nuestro trabajo
                        siempre con pasión. ¡Nos levantamos cada
                        día con entusiasmo para enfrentar los retos
                        que encontramos en nuestro camino!
                    </p>
                </div>
        </SwiperSlide>                   
        <SwiperSlide>
                <div className=" justify-center flex-col gap-5 flex py-[60px] px-5">
                    <Excelencia className="fill-white h-16 w-16 mx-auto" />
                    <h3 className="text-center text-white font-playfair text-3xl"><span className="text-devarana-babyblue font-playfair">La</span> Excelencia <span className="text-devarana-babyblue font-playfair">está en nuestro ADN</span> </h3>
                    <p className="text-white text-lg px-10 font-light"> 
                        Buscamos la excelencia en todo lo que
                        hacemos y damos todos los días lo mejor
                        de nosotros mismos para vivir plenamente
                        y sentirnos felices.
                    </p>
                </div>
        </SwiperSlide>                   
        <SwiperSlide>
                <div className=" justify-center flex-col gap-5 flex py-[60px] px-5">
                    <Extraordinario className="fill-white h-16 w-16 mx-auto" />
                    <h3 className="text-center text-white font-playfair text-3xl"><span className="text-devarana-babyblue font-playfair">Somos</span> Incluyentes</h3>
                    <p className="text-white text-lg px-10 font-light"> 
                        La atención a los detalles, nuestro servicio
                        legendario y esfuerzo por la satisfacción
                        total, son parte de nuestra esencia.
                    </p>
                </div>
        </SwiperSlide>                   
        <SwiperSlide>
                <div className=" justify-center flex-col gap-5 flex py-[60px] px-5">
                    <Innovacion className="fill-white h-16 w-16 mx-auto" />
                    <h3 className="text-center text-white font-playfair text-3xl"><span className="text-devarana-babyblue font-playfair">La</span> Innovación <span className="text-devarana-babyblue font-playfair">nos Distingue</span> </h3>
                    <p className="text-white text-lg px-10 font-light"> 
                        ¡Creemos firmemente en la constante
                        innovación! Nos ilusionan los retos y
                        buscamos siempre estar a la vanguardia.
                    </p>
                </div>
        </SwiperSlide>                   
    </Swiper>

  )
}
