import Image from 'next/image'
// import Fatima from '../../public/assets/images/carrera/Testimonios/Fatima.webp'
// import Itze from '../../public/assets/images/carrera/Testimonios/Itze.webp'
// import Rubio from '../../public/assets/images/carrera/Testimonios/Rubio.webp'
// import Ximena from '../../public/assets/images/carrera/Testimonios/Ximena.webp'
// import Gregorio from '../../public/assets/images/carrera/Testimonios/Gregorio.webp'


export const SliderTestimonios = () => {
  return (
    <div className='relative z-20 translate-x-0 translate-y-0 my-12 max-w-full overflow-hidden'>
        <div className="line-stroke">
            <div className="line-stroke__item line-stroke__1">
                <div className='relative px-5 line-stroke__img'>
                    <div className="relative">
                        {/* <Image src={Itze} alt='Itze' className='object-cover lg:w-full w-[280px]' placeholder='blur' /> */}
                        <picture>
                            <source srcSet='/assets/images-phone/carrera/Testimonios/Itze.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/carrera/Testimonios/Itze.webp' />
                            <img src='/assets/images/carrera/Testimonios/Itze.webp' className="object-cover lg:w-full w-[280px]"  alt="Itze" />
                        </picture>
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“DEVARANA me inspira a descubrir mi mejor versión profesional y personal”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Itze Vega</p>
                                    <p className='text-white font-bold'>COMERCIAL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative px-5 line-stroke__img'>
                    <div className="relative">
                        {/* <Image src={Rubio} alt='Rubio' className='object-cover lg:w-full w-[280px]' placeholder='blur'/> */}
                        <picture>
                            <source srcSet='/assets/images-phone/carrera/Testimonios/Rubio.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/carrera/Testimonios/Rubio.webp' />
                            <img src='/assets/images/carrera/Testimonios/Rubio.webp' className="object-cover lg:w-full w-[280px]"  alt="Rubio" />
                        </picture>
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“DEVARANA para mí es un lugar excepcional, con un gran equipo de personas apasionadas, todos con la misma meta en común, ser un factor de cambio, siempre apuntando a la satisfacción de nuestro cliente”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Luis Rubio</p>
                                    <p className='text-white font-bold'>OPERACIONES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative px-5 line-stroke__img'>
                    <div className="relative">
                        {/* <Image src={Ximena} alt='Ximena' className='object-cover lg:w-full w-[280px]' placeholder='blur'/> */}
                        <picture>
                            <source srcSet='/assets/images-phone/carrera/Testimonios/Ximena.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/carrera/Testimonios/Ximena.webp' />
                            <img src='/assets/images/carrera/Testimonios/Ximena.webp' className="object-cover lg:w-full w-[280px]"  alt="Ximena" />
                        </picture>
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“Ser parte de DEVARANA significa buscar la excelencia y ofrecer a nuestros clientes no solo las mejores residencias del mercado sino experiencias inigualables”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Ximena Páramo</p>
                                    <p className='text-white font-bold'>INNOVACIÓN Y CALIDAD</p>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>                
                <div className='relative px-5 line-stroke__img'>
                    <div className="relative">
                        {/* <Image src={Gregorio} alt='Gregorio' className='object-cover lg:w-full w-[280px]' placeholder='blur'/> */}
                        <picture>
                            <source srcSet='/assets/images-phone/carrera/Testimonios/Gregorio.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/carrera/Testimonios/Gregorio.webp' />
                            <img src='/assets/images/carrera/Testimonios/Gregorio.webp' className="object-cover lg:w-full w-[280px]"  alt="Gregorio" />
                        </picture>
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“DEVARANA ha sido un parteaguas en mi carrera profesional, estoy muy agradecido y contento de pertenecer a una empresa de clase mundial”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Gregorio León</p>
                                    <p className='text-white font-bold'>COMERCIAL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative px-5 line-stroke__img'>
                    <div className="relative">
                        {/* <Image src={Fatima} alt='Fatima' className='object-cover lg:w-full w-[280px]' placeholder='blur' />   */}
                        <picture>
                            <source srcSet='/assets/images-phone/carrera/Testimonios/Fatima.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/carrera/Testimonios/Fatima.webp' />
                            <img src='/assets/images/carrera/Testimonios/Fatima.webp' className="object-cover lg:w-full w-[280px]"  alt="Fatima" />
                        </picture>
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“Para mi DEVARANA es una oportunidad de colaborar en lo que me apasiona y aprender constantemente”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Fátima Ortiz</p>
                                    <p className='text-white font-bold'>GERENCIA GENERAL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line-stroke__item line-stroke__2">
                <div className='relative px-5 line-stroke__img'>
                    <div className="relative">
                        {/* <Image src={Itze} alt='Itze' className='object-cover lg:w-full w-[280px]' placeholder='blur' /> */}
                        <picture>
                            <source srcSet='/assets/images-phone/carrera/Testimonios/Itze.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/carrera/Testimonios/Itze.webp' />
                            <img src='/assets/images/carrera/Testimonios/Itze.webp' className="object-cover lg:w-full w-[280px]"  alt="Itze" />
                        </picture>
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“DEVARANA me inspira a descubrir mi mejor versión profesional y personal”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Itze Vega</p>
                                    <p className='text-white font-bold'>COMERCIAL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative px-5 line-stroke__img'>
                    <div className="relative">
                        {/* <Image src={Rubio} alt='Rubio' className='object-cover lg:w-full w-[280px]' placeholder='blur'/> */}
                        <picture>
                            <source srcSet='/assets/images-phone/carrera/Testimonios/Rubio.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/carrera/Testimonios/Rubio.webp' />
                            <img src='/assets/images/carrera/Testimonios/Rubio.webp' className="object-cover lg:w-full w-[280px]"  alt="Rubio" />
                        </picture>
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“DEVARANA para mí es un lugar excepcional, con un gran equipo de personas apasionadas, todos con la misma meta en común, ser un factor de cambio, siempre apuntando a la satisfacción de nuestro cliente”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Luis Rubio</p>
                                    <p className='text-white font-bold'>OPERACIONES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative px-5 line-stroke__img'>
                    <div className="relative">
                        {/* <Image src={Ximena} alt='Ximena' className='object-cover lg:w-full w-[280px]' placeholder='blur'/> */}
                        <picture>
                            <source srcSet='/assets/images-phone/carrera/Testimonios/Ximena.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/carrera/Testimonios/Ximena.webp' />
                            <img src='/assets/images/carrera/Testimonios/Ximena.webp' className="object-cover lg:w-full w-[280px]"  alt="Ximena" />
                        </picture>
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“Ser parte de DEVARANA significa buscar la excelencia y ofrecer a nuestros clientes no solo las mejores residencias del mercado sino experiencias inigualables”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Ximena Páramo</p>
                                    <p className='text-white font-bold'>INNOVACIÓN Y CALIDAD</p>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>                
                <div className='relative px-5 line-stroke__img'>
                    <div className="relative">
                        {/* <Image src={Gregorio} alt='Gregorio' className='object-cover lg:w-full w-[280px]' placeholder='blur'/> */}
                        <picture>
                            <source srcSet='/assets/images-phone/carrera/Testimonios/Gregorio.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/carrera/Testimonios/Gregorio.webp' />
                            <img src='/assets/images/carrera/Testimonios/Gregorio.webp' className="object-cover lg:w-full w-[280px]"  alt="Gregorio" />
                        </picture>
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“DEVARANA ha sido un parteaguas en mi carrera profesional, estoy muy agradecido y contento de pertenecer a una empresa de clase mundial”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Gregorio León</p>
                                    <p className='text-white font-bold'>COMERCIAL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative px-5 line-stroke__img'>
                    <div className="relative">
                        {/* <Image src={Fatima} alt='Fatima' className='object-cover lg:w-full w-[280px]' placeholder='blur' />   */}
                        <picture>
                            <source srcSet='/assets/images-phone/carrera/Testimonios/Fatima.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/carrera/Testimonios/Fatima.webp' />
                            <img src='/assets/images/carrera/Testimonios/Fatima.webp' className="object-cover lg:w-full w-[280px]"  alt="Fatima" />
                        </picture>
                        <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                            <div className="flex flex-col h-full w-full">
                                <div className='text-white font-light text-xl text-center mt-auto pt-10 px-10'>
                                    <p className='text-left lg:text-xl text-xs'>“Para mi DEVARANA es una oportunidad de colaborar en lo que me apasiona y aprender constantemente”.</p>
                                </div>
                                <div className='mt-auto ml-auto px-10 pb-5'>
                                    <p className='text-white font-light'>Fátima Ortiz</p>
                                    <p className='text-white font-bold'>GERENCIA GENERAL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
