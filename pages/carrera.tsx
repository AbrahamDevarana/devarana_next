import React from 'react'
import Image from 'next/image'
import { Button } from '../components/Button'

import carreraBanner from '../public/assets/images/carrera/AvanceEstrategia.webp'
import Arquitectos from '../public/assets/images/carrera/Arquitectos.webp'
import { SliderTestimonios } from '../components/carrera/SliderTestimonios'
import Colaboradores from '../public/assets/images/carrera/Colaboradores.webp'
import Flor5 from '../components/svg/flor5'
import FlorTres from '../components/svg/flor3'
import { Form } from '../components/Form'
import { BannerRedes } from '../components/layout/BannerRedes'
import { SliderPortada } from '../components/carrera/SliderPortada'
import { Seo } from '../components/layout/Seo'

export default function Carrera() {
    return (
        <>
            <Seo
                title="Carrera"
                description="Carrera page"
                keywords="Carrera page"
            />
            <div id="initialBanner">
                <div className='h-screen w-full relative object-contain'>
                    <Image src={carreraBanner} className='object-cover w-full' fill alt='carreraBanner' />
                    <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0' />
                    <div className='absolute'>
                        <SliderPortada />
                    </div>
                    
                </div>
            </div>

            <div className='bg-devarana-hazelnut h-[200px]' />

            <div className="relative overflow-hidden">
                <div className='absolute right-0 -z-10 top-20 bottom-0'>
                    <FlorTres className='fill-devarana-hazelnut w-full opacity-50 -rotate-[45deg] translate-x-16'/>
                </div>
                <div className='lg:px-64 px-14 lg:py-24 pt-24'>
                    <div className="grid grid-cols-12 lg:gap-20 gap-y-10">
                        <div className="col-span-12 lg:col-span-6 relative">
                            <Image src={Arquitectos} className='object-cover w-full' height={600} width={800} placeholder="blur" alt="Arquitectos"/>
                            <div className='absolute -translate-x-5 -translate-y-5 top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <h3 className='border-l-4 border-devarana-pink text-xl lg:text-4xl text-devarana-graph-darker px-5 font-playfair'>Conoce al equipo</h3>
                            <p className='text-devarana-graph lg:py-12 py-5 lg:text-2xl text-xs'>Trabajamos juntos para construir todo lo que soñamos.</p>
                            <div className='grid grid-cols-2 lg:gap-10 gap-y-10 pt-8'>
                                <div className="col-span-2 lg:col-span-1 grid lg:gap-y-10 gap-y-5">
                                    <div className=''>
                                        <h4 className='lg:text-xl text-devarana-blue font-black lg:pb-8 pb-4 text-xs'>Arquitectura e Ingeniería</h4>
                                        <p className='text-devarana-graph lg:text-xl text-xs'>Diseñar y construir desarrollos del más alto nivel.</p>
                                    </div>
                                    <div className=''>
                                        <h4 className='lg:text-xl text-devarana-blue font-black lg:pb-8 pb-4 text-xs'>Finanzas y Compras</h4>
                                        <p className='text-devarana-graph lg:text-xl text-xs'>Diseñar y construir desarrollos del más alto nivel.</p>
                                    </div>
                                    <div className=''>
                                        <h4 className='lg:text-xl text-devarana-blue font-black lg:pb-8 pb-4 text-xs'>Marketing y Diseño</h4>
                                        <p className='text-devarana-graph lg:text-xl text-xs'>Diseñar y construir desarrollos del más alto nivel.</p>
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-1 grid lg:gap-y-10 gap-y-5 ">
                                    <div className=''>
                                        <h4 className='lg:text-xl text-devarana-blue font-black lg:pb-8 pb-4 text-xs'>Arquitectura e Ingeniería</h4>
                                        <p className='text-devarana-graph lg:text-xl text-xs'>Diseñar y construir desarrollos del más alto nivel.</p>
                                    </div>
                                    <div className=''>
                                        <h4 className='lg:text-xl text-devarana-blue font-black lg:pb-8 pb-4 text-xs'>Tecnología e Innovación</h4>
                                        <p className='text-devarana-graph lg:text-xl text-xs'>Diseñar y construir desarrollos del más alto nivel.</p>
                                    </div>
                                    <div className=''>
                                        <h4 className='lg:text-xl text-devarana-blue font-black lg:pb-8 pb-4 text-xs'>Construcción</h4>
                                        <p className='text-devarana-graph lg:text-xl text-xs'>Diseñar y construir desarrollos del más alto nivel.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center lg:py-20 py-10'>
                                <Button colorType='pink' type='button' textColor='white'> SABER MÁS </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='max-w-screen-lg mx-auto px-10 w-full mb-24 border-devarana-graph border-opacity-40'/>

            <div className='relative'>
                <SliderTestimonios />
                <div className='bg-devarana-blue h-[200px] -translate-y-1/2 -z-20-'/>
            </div>

            <div className='relative lg:pb-24 pb-12'>
                <div className='absolute left-0 -z-10 top-1/4 bottom-0'>
                    <Flor5 className='fill-devarana-hazelnut w-full opacity-50 rotate-[35deg] -translate-x-28 scale-150'/>
                </div>
                <div className='lg:px-64 px-14'>
                    <div className="grid grid-cols-12 lg:gap-20 gap-y-10">
                        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
                            <h3 className='border-l-4 lg:border-l-0 lg:border-r-4 border-devarana-pink text-xl lg:text-4xl text-devarana-graph-darker px-5 font-playfair lg:text-right text-left'>Descubre nuestras vacantes</h3>
                            <p className='text-devarana-graph lg:py-12 py-5 lg:text-right text-left font-bold lg:text-2xl text-xs'>Ponte en contacto con nostros a través de:</p>
                            <a className='block lg:text-right text-left text-devarana-pink lg:text-2xl text-xs' href="mailto:capitalhumano@devarana.mx">capitalhumano@devarana.mx</a>
                            <a className='block lg:text-right text-left text-devarana-pink lg:text-2xl text-xs' href="mailto:talento@devarana.mx">talento@devarana.mx</a>
                        </div>
                        <div className="col-span-12 lg:col-span-6 relative order-1 lg:order-2">
                            <Image src={Colaboradores} className='object-cover w-full' height={600} width={800} placeholder="blur" alt="Colaboradores"/>
                            <div className='absolute lg:translate-x-5 -translate-x-5 -translate-y-5 top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        </div>
                    </div>
                </div>
            </div>
            <BannerRedes />
            <Form/>
        </>
    )
};
