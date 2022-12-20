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

export default function Carrera() {
    return (
        <>
            <div id="initialBanner">
                <div className='h-screen w-full relative object-contain'>
                    <Image src={carreraBanner} className='object-cover w-full' fill alt='carreraBanner' />
                    <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0' />
                </div>
            </div>

            <div className='bg-devarana-hazelnut h-[200px]' />

            <div className="relative overflow-hidden">
                <div className='absolute right-0 -z-10 top-20 bottom-0'>
                    <FlorTres className='fill-devarana-hazelnut w-full opacity-50 -rotate-[45deg] translate-x-16'/>
                </div>
                <div className='px-64 py-24'>
                    <div className="grid grid-cols-12 gap-20">
                        <div className="col-span-6 relative">
                            <Image src={Arquitectos} className='object-cover w-full' height={600} width={800} placeholder="blur" alt="Arquitectos"/>
                            <div className='absolute -translate-x-5 -translate-y-5 top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        </div>
                        <div className="col-span-6">
                            <h3 className='border-l-4 border-devarana-pink text-4xl text-devarana-graph-darker px-5 font-playfair'>Conoce al equipo</h3>
                            <p className='text-devarana-graph py-12'>Trabajamos juntos para construir todo lo que soñamos.</p>
                            <div className='grid grid-cols-2 gap-10'>
                                <div className="col-span-1 grid gap-y-10">
                                    <div className=''>
                                        <h4 className='text-xl text-devarana-blue font-black pb-8'>Arquitectura e Ingeniería</h4>
                                        <p className='text-devarana-graph'>Diseñar y construir desarrollos del más alto nivel.</p>
                                    </div>
                                    <div className=''>
                                        <h4 className='text-xl text-devarana-blue font-black pb-8'>Finanzas y Compras</h4>
                                        <p className='text-devarana-graph'>Diseñar y construir desarrollos del más alto nivel.</p>
                                    </div>
                                    <div className=''>
                                        <h4 className='text-xl text-devarana-blue font-black pb-8'>Marketing y Diseño</h4>
                                        <p className='text-devarana-graph'>Diseñar y construir desarrollos del más alto nivel.</p>
                                    </div>
                                </div>
                                <div className="col-span-1 grid gap-y-10 ">
                                    <div className=''>
                                        <h4 className='text-xl text-devarana-blue font-black pb-8'>Arquitectura e Ingeniería</h4>
                                        <p className='text-devarana-graph'>Diseñar y construir desarrollos del más alto nivel.</p>
                                    </div>
                                    <div className=''>
                                        <h4 className='text-xl text-devarana-blue font-black pb-8'>Tecnología e Innovación</h4>
                                        <p className='text-devarana-graph'>Diseñar y construir desarrollos del más alto nivel.</p>
                                    </div>
                                    <div className=''>
                                        <h4 className='text-xl text-devarana-blue font-black pb-8'>Construcción</h4>
                                        <p className='text-devarana-graph'>Diseñar y construir desarrollos del más alto nivel.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center py-20'>
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

            <div className='relative pb-24'>
                <div className='absolute left-0 -z-10 top-1/4 bottom-0'>
                    <Flor5 className='fill-devarana-hazelnut w-full opacity-50 rotate-[35deg] -translate-x-28 scale-150'/>
                </div>
                <div className='px-64'>
                    <div className="grid grid-cols-12 gap-20">
                        <div className="col-span-6 flex flex-col justify-center">
                            <h3 className='border-r-4 border-devarana-pink text-4xl text-devarana-graph-darker px-5 font-playfair text-right'>Descubre nuestras vacantes</h3>
                            <p className='text-devarana-graph py-12 text-right font-bold text-2xl'>Ponte en contacto con nostros a través de:</p>
                            <a className='block text-right text-devarana-pink' href="mailto:capitalhumano@devarana.mx">capitalhumano@devarana.mx</a>
                            <a className='block text-right text-devarana-pink' href="mailto:talento@devarana.mx">talento@devarana.mx</a>
                        </div>
                        <div className="col-span-6 relative">
                            <Image src={Colaboradores} className='object-cover w-full' height={600} width={800} placeholder="blur" alt="Colaboradores"/>
                            <div className='absolute translate-x-5 -translate-y-5 top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        </div>
                    </div>
                </div>
            </div>
            <BannerRedes />
            <Form/>
        </>
    )
};
