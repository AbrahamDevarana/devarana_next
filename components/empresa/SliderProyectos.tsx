import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '../Button';
import 'swiper/css';

import HighGardens from '../svg/high-gardens';

import RoyalView from '../../public/assets/images/empresa/RoyalView.webp'
import HighGardenHouse from '../../public/assets/images/empresa/HighGardens.webp'
import UpperCondesa from '../../public/assets/images/empresa/UpperCondesa.webp'
import GrandMayran from '../../public/assets/images/empresa/GrandMayran.webp'

export const SliderProyectos = () => {
  return (
    <div className='bg-white'>

        <Swiper>
            <SwiperSlide>
                <div className="grid grid-cols-12 py-24">
                    <div className="lg:col-span-5 col-span-12 text-devarana-graph pt-16 lg:pr-40 lg:px-0 p-10">
                        <h2 className='text-5xl uppercase tracking-widest font-playfair flex lg:justify-end'> Royal View <span className='text-base content-start pl-1'> &#174; </span></h2>
                        <p className='py-14 font-light lg:text-right lg:pl-24 leading-9'>
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
                            <Button type='button' colorType='pink' textColor='white'>DESCUBRE</Button>
                        </div>
                    </div>
                    <div className="lg:col-span-6 col-span-12 relative mx-10 lg:mx-0">
                        <div className='bg-devarana-pink absolute w-full top-14'>
                            <p className='text-center text-2xl text-white py-1 font-playfair'>¡80% de Torre Terra escriturado!</p>
                        </div>
                        <div className='bg-devarana-hazelnut absolute -left-2 w-4 h-80 z-10 top-1/2 -translate-y-1/2 hidden lg:block'/> 
                        <div className='bg-devarana-hazelnut absolute -top-2 w-10/12 h-4 left-1/2 -translate-x-1/2'/>
                        <Image src={RoyalView} alt="Royal View" className='object-cover w-full' placeholder='blur'/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="grid grid-cols-12 py-24">
                    <div className="lg:col-span-5 col-span-12 text-devarana-graph pt-16 lg:pr-40 lg:px-0 p-10">
                        <HighGardens className='fill-devarana-graph w-[300px] lg:ml-auto' />
                        <p className='pt-14 font-light lg:text-right lg:pl-24 leading-9 pb-7'>
                            La zona norte de Querétaro se ha
                            convertido en la zona de mayor
                            crecimiento y plusvalía de la ciudad.
                            Por su ubicación estratégica y excelente
                            planeación, desarrollamos un concepto
                            único dentro del Fraccionamiento Zibatá.
                        </p>
                        <p className='pb-14 font-light lg:text-right lg:pl-24 leading-9'>
                            High Gardens consiste en 89 residencias
                            dentro de un condominio privado con
                            Casa Club que incluye gimnasio, alberca,
                            chapoteadero y salón inglés.
                        </p>
                    </div>
                    <div className="lg:col-span-6 col-span-12 relative mx-10 lg:mx-0">
                        <div className='bg-devarana-pink absolute w-full top-14'>
                            <p className='text-center text-2xl text-white py-1 font-playfair'>¡Sold Out!</p>
                        </div>
                        <div className='bg-devarana-hazelnut absolute -left-2 w-4 h-80 z-10 top-1/2 -translate-y-1/2 hidden lg:block'/> 
                        <div className='bg-devarana-hazelnut absolute -top-2 w-10/12 h-4 left-1/2 -translate-x-1/2' />
                        <Image src={HighGardenHouse} alt="High Gardens" className='object-cover w-full' placeholder='blur' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="grid grid-cols-12 py-24">
                    <div className="lg:col-span-5 col-span-12 text-devarana-graph pt-16 lg:pr-40 lg:px-0 p-10">
                        <h2 className='text-5xl uppercase tracking-widest font-playfair lg:text-right'> Upper Condesa </h2>
                        <p className='pt-14 font-light lg:text-right lg:pl-24 leading-9 pb-7'>
                            Un proyecto de 46 residencias en la
                            exitosa zona de Juriquilla, dentro de
                            “La Condesa Juriquilla”, fraccionamiento
                            desarrollado por la prestigiosa empresa
                            DRT.
                        </p>
                        <p className='pb-14 font-light lg:text-right lg:pl-24 leading-9'>
                            Con los excelentes resultados decidimos
                            incrementar nuestra inversión en el ramo
                            inmobiliario y adquirimos los terrenos
                            para los siguientes desarrollos.
                        </p>
                    </div>
                    <div className="lg:col-span-6 col-span-12 relative mx-10 lg:mx-0">
                        <div className='bg-devarana-pink absolute w-full top-14'>
                            <p className='text-center text-2xl text-white py-1 font-playfair'>¡Sold Out!</p>
                        </div>
                        <div className='bg-devarana-hazelnut absolute -left-2 w-4 h-80 z-10 top-1/2 -translate-y-1/2 hidden lg:block'/> 
                        <div className='bg-devarana-hazelnut absolute -top-2 w-10/12 h-4 left-1/2 -translate-x-1/2' />
                        <Image src={UpperCondesa} alt="Upper Condesa" className='object-cover w-full' placeholder='blur' />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="grid grid-cols-12 py-24">
                    <div className="lg:col-span-5 col-span-12 text-devarana-graph pt-16 lg:pr-40 lg:px-0 p-10">
                        <h2 className='text-5xl uppercase tracking-widest font-playfair lg:text-right'> Grand Mayran </h2>
                        <p className='pt-14 font-light lg:text-right lg:pl-24 leading-9 pb-7'>
                            Nuestro primer proyecto ubicado en
                            el Fraccionamiento Cañadas del Lago,
                            al sur de la ciudad de Querétaro.
                        </p>
                        <p className='pb-14 font-light lg:text-right lg:pl-24 leading-9'>
                            Conformado por 35 residencias
                            diseñadas y construidas con el talento
                            de nuestro propio equipo. El éxito
                            comercial nos impulso a continuar con
                            nuestro siguiente desarrollo.
                        </p>
                    </div>
                    <div className="lg:col-span-6 col-span-12 relative mx-10 lg:mx-0">
                        <div className='bg-devarana-pink absolute w-full top-14'>
                            <p className='text-center text-2xl text-white py-1 font-playfair'>¡Sold Out!</p>
                        </div>
                        <div className='bg-devarana-hazelnut absolute -left-2 w-4 h-80 z-10 top-1/2 -translate-y-1/2 hidden lg:block'/> 
                        <div className='bg-devarana-hazelnut absolute -top-2 w-10/12 h-4 left-1/2 -translate-x-1/2' />
                        <Image src={GrandMayran} alt="Upper Condesa" className='object-cover w-full' placeholder='blur' />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
