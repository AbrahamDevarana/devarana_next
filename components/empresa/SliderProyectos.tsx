import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '../Button';
import { Navigation } from 'swiper';
import HighGardens from '../svg/high-gardens';
import 'swiper/css';
import Link from 'next/link';

// import RoyalView from '../../public/assets/images/empresa/RoyalView.webp'
// import HighGardenHouse from '../../public/assets/images/empresa/HighG.webp'
// import UpperCondesa from '../../public/assets/images/empresa/UpperCondesa.webp'
// import GrandMayran from '../../public/assets/images/empresa/GrandMayran.webp'

export const SliderProyectos = () => {
  return (
    <div className='bg-transparent relative'>
        <Swiper
            spaceBetween={20}
            navigation
            modules={[Navigation]}
            className='sliderProyectos'
        >
            <SwiperSlide>
                <div className="grid grid-cols-12 lg:py-24 py-10 lg:m-8 m-2 bg-white">
                    <div className="lg:col-span-5 col-span-12 text-devarana-graph lg:pt-16 pt-4 lg:pr-40 lg:px-0 p-10">
                        <h2 className='lg:text-5xl text-xl uppercase tracking-widest font-playfair flex lg:justify-end'> Royal View <span className='text-base content-start pl-1'> &#174; </span></h2>
                        <p className='py-14 font-light lg:text-right lg:pl-24 lg:leading-9 lg:text-2xl text-[10px] leading-4'>
                            Un proyecto único en lo más alto de
                            Zibatá, Querétaro y dentro de un
                            exclusivo fraccionamiento. Consta
                            de 3 torres de departamentos  de
                            300 unidades con más de 8 mil m2
                            de parque privado, estacionamientos
                            subterráneos, vistas panorámicas
                            inigualables y más de 30 amenidades.
                        </p>

                        <div className='text-center'>
                        <a href="https://royalview.mx" target={'_blank'} rel="noreferrer">
                            <Button type='button' colorType='pink' textColor='white'>DESCUBRE</Button>
                        </a>
                        </div>
                    </div>
                    <div className="lg:col-span-6 col-span-12 relative mx-2 lg:mx-0">
                        <div className='bg-devarana-pink absolute w-full top-14'>
                            <p className='text-center lg:text-3xl text-base text-white py-1 font-playfair'>¡80% de Torre Terra escriturado!</p>
                        </div>
                        <div className='bg-devarana-hazelnut absolute -left-2 w-4 h-80 z-10 top-1/2 -translate-y-1/2 hidden lg:block'/> 
                        <div className='bg-devarana-hazelnut absolute -top-1.5 w-6/12 h-3 left-1/2 -translate-x-1/2 block lg:hidden'/>
                        {/* <Image src={RoyalView} alt="Royal View" width={850} height={850} className='object-cover w-full' placeholder='blur'/> */}
                        <picture>
                            <source srcSet='/assets/images-phone/empresa/RoyalView.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/empresa/RoyalView.webp' />
                            <img src='/assets/images/empresa/RoyalView.webp' className="object-cover w-full"  alt="Royal View" />
                        </picture>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="grid grid-cols-12 lg:py-24 py-10 lg:m-8 m-2 bg-white">
                    <div className="lg:col-span-5 col-span-12 text-devarana-graph lg:pt-16 pt-4 lg:pr-40 lg:px-0 p-10">
                        <HighGardens className='fill-devarana-graph lg:w-[300px] w-[105px] lg:ml-auto' />
                        <p className='pt-14 font-light lg:text-right lg:pl-24 lg:leading-9 lg:text-2xl text-[10px] leading-4'>
                            La zona norte de Querétaro se ha
                            convertido en la zona de mayor
                            crecimiento y plusvalía de la ciudad.
                            Por su ubicación estratégica y excelente
                            planeación, desarrollamos un concepto
                            único dentro del Fraccionamiento Zibatá.
                        </p>
                        <p className='pb-14 font-light lg:text-right lg:pl-24 lg:leading-9 lg:text-2xl text-[10px] leading-4'>
                            High Gardens consiste en 89 residencias
                            dentro de un condominio privado con
                            Casa Club que incluye gimnasio, alberca,
                            chapoteadero y salón inglés.
                        </p>
                    </div>
                    <div className="lg:col-span-6 col-span-12 relative mx-2 lg:mx-0">
                        <div className='bg-devarana-pink absolute w-full top-14'>
                            <p className='text-center lg:text-3xl text-base text-white py-1 font-playfair'>¡Sold Out!</p>
                        </div>
                        <div className='bg-devarana-hazelnut absolute -left-2 w-4 h-80 z-10 top-1/2 -translate-y-1/2 hidden lg:block'/> 
                        <div className='bg-devarana-hazelnut absolute -top-2 w-10/12 h-4 left-1/2 -translate-x-1/2 block lg:hidden' />
                        {/* <Image src={HighGardenHouse} alt="High Gardens" width={850} height={850} className='object-cover w-full' placeholder='blur' /> */}
                        <picture>
                            <source srcSet='/assets/images-phone/empresa/HighGardens.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/empresa/HighGardens.webp' />
                            <img src='/assets/images/empresa/HighGardens.webp' className="object-cover w-full" alt="High Gardens" />
                        </picture>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="grid grid-cols-12 lg:py-24 py-10 lg:m-8 m-2 bg-white">
                    <div className="lg:col-span-5 col-span-12 text-devarana-graph lg:pt-16 pt-4 lg:pr-40 lg:px-0 p-10">
                        <h2 className='lg:text-5xl text-xl uppercase tracking-widest font-playfair lg:text-right'> Upper Condesa </h2>
                        <p className='pt-14 font-light lg:text-right lg:pl-24 lg:leading-9 lg:text-2xl text-[10px] leading-4'>
                            Un proyecto de 46 residencias en la
                            exitosa zona de Juriquilla, dentro de
                            “La Condesa Juriquilla”, fraccionamiento
                            desarrollado por la prestigiosa empresa
                            DRT.
                        </p>
                        <p className='pb-14 font-light lg:text-right lg:pl-24 lg:leading-9 lg:text-2xl text-[10px] leading-4'>
                            Con los excelentes resultados decidimos
                            incrementar nuestra inversión en el ramo
                            inmobiliario y adquirimos los terrenos
                            para los siguientes desarrollos.
                        </p>
                    </div>
                    <div className="lg:col-span-6 col-span-12 relative mx-2 lg:mx-0">
                        <div className='bg-devarana-pink absolute w-full top-14'>
                            <p className='text-center lg:text-3xl text-base text-white py-1 font-playfair'>¡Sold Out!</p>
                        </div>
                        <div className='bg-devarana-hazelnut absolute -left-2 w-4 h-80 z-10 top-1/2 -translate-y-1/2 hidden lg:block'/> 
                        <div className='bg-devarana-hazelnut absolute -top-2 w-10/12 h-4 left-1/2 -translate-x-1/2 block lg:hidden' />
                        {/* <Image src={UpperCondesa} alt="Upper Condesa" width={850} height={850}  className='object-cover w-full' placeholder='blur' /> */}
                        <picture>
                            <source srcSet='/assets/images-phone/empresa/UpperCondesa.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/empresa/UpperCondesa.webp' />
                            <img src='/assets/images/empresa/UpperCondesa.webp' className="object-cover w-full" alt="Upper Condesa" />
                        </picture>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="grid grid-cols-12 lg:py-24 py-10 lg:m-8 m-2 bg-white">
                    <div className="lg:col-span-5 col-span-12 text-devarana-graph lg:pt-16 pt-4 lg:pr-40 lg:px-0 p-10">
                        <h2 className='lg:text-5xl text-xl uppercase tracking-widest font-playfair lg:text-right'> Grand Mayran </h2>
                        <p className='pt-14 font-light lg:text-right lg:pl-24 lg:leading-9 lg:text-2xl text-[10px] leading-4'>
                            Nuestro primer proyecto ubicado en
                            el Fraccionamiento Cañadas del Lago,
                            al sur de la ciudad de Querétaro.
                        </p>
                        <p className='pb-14 font-light lg:text-right lg:pl-24 lg:leading-9 lg:text-2xl text-[10px] leading-4'>
                            Conformado por 35 residencias
                            diseñadas y construidas con el talento
                            de nuestro propio equipo. El éxito
                            comercial nos impulso a continuar con
                            nuestro siguiente desarrollo.
                        </p>
                    </div>
                    <div className="lg:col-span-6 col-span-12 relative mx-2 lg:mx-0">
                        <div className='bg-devarana-pink absolute w-full top-14'>
                            <p className='text-center lg:text-3xl text-base text-white py-1 font-playfair'>¡Sold Out!</p>
                        </div>
                        <div className='bg-devarana-hazelnut absolute -left-2 w-4 h-80 z-10 top-1/2 -translate-y-1/2 hidden lg:block'/> 
                        <div className='bg-devarana-hazelnut absolute -top-2 w-10/12 h-4 left-1/2 -translate-x-1/2 block lg:hidden' />
                        {/* <Image src={GrandMayran} alt="Grand Mayran" width={850} height={850}  className='object-cover w-full' placeholder='blur' /> */}
                        <picture>
                            <source srcSet='/assets/images-phone/empresa/GrandMayran.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/empresa/GrandMayran.webp' />
                            <img src='/assets/images/empresa/GrandMayran.webp' className="object-cover w-full" alt="Grand Mayran" />
                        </picture>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
