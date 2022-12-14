import dynamic from 'next/dynamic'
import { Button } from '../components/Button'
import { SliderTestimonios } from '../components/carrera/SliderTestimonios'
import { SliderPortada } from '../components/carrera/SliderPortada'
import { Seo } from '../components/layout/Seo'
import Image from 'next/image'

const Flor5 = dynamic(() => import('../components/svg/flor5'), { ssr: false })
const FlorTres = dynamic(() => import('../components/svg/flor3'), { ssr: false })
const Form = dynamic(() => import('../components/Form'), { ssr: false })
const BannerRedes = dynamic(() => import('../components/layout/BannerRedes'), { ssr: false })
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
                    <picture>
                        <source srcSet='/assets/images-phone/carrera/AvanceEstrategia.webp' media="(max-width: 1024px)" />
                        <source srcSet='/assets/images/carrera/AvanceEstrategia.webp' />
                        <Image src='/assets/images/carrera/AvanceEstrategia.webp' width={1920} height={800} className="object-cover w-full h-screen rel"  alt="carreraBanner" />
                    </picture>
                    <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0 h-full' />
                    <div className='absolute w-10/12 max-w-full -translate-y-3/4 right-0'>
                        <SliderPortada />
                    </div>
                    
                </div>
            </div>

            <div className='bg-devarana-hazelnut h-[200px]' />

            <div className="relative overflow-hidden">
                <div className='absolute right-0 -z-10 top-20 bottom-0'>
                    <FlorTres className='fill-devarana-hazelnut w-full opacity-50 -rotate-[45deg] translate-x-16'/>
                </div>
                <div className='lg:px-32 px-14 lg:py-24 pt-24'>
                    <div className="grid grid-cols-12 lg:gap-20 gap-y-10">
                        <div className="col-span-12 xl:col-span-6 relative">
                            <div className="relative">
                                <picture>
                                    <source srcSet='/assets/images-phone/carrera/Arquitectos.webp' media="(max-width: 1024px)" />
                                    <source srcSet='/assets/images/carrera/Arquitectos.webp' />
                                    <Image src='/assets/images/carrera/Arquitectos.webp' width={800} height={1200} className="object-cover w-full"  alt="Arquitectos" />
                                </picture>
                                <div className='absolute -translate-x-[30px] -translate-y-[30px] top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-6 flex flex-col justify-center">
                            <div>
                                <h3 className='border-l-4 border-devarana-pink text-xl lg:text-5xl text-devarana-graph-darker px-5 font-playfair'>Conoce al equipo</h3>
                                <p className='text-devarana-graph lg:py-12 py-5 lg:text-2xl text-[10px]'>Trabajamos juntos para construir todo lo que so??amos.</p>
                                <div className='grid grid-cols-2 lg:gap-10 gap-y-10 pt-8'>
                                    <div className="col-span-2 lg:col-span-1 grid lg:gap-y-10 gap-y-5">
                                        <div className=''>
                                            <h4 className='lg:text-xl text-devarana-blue font-black lg:pb-8 pb-4 text-[10px]'>Arquitectura e Ingenier??a</h4>
                                            <p className='text-devarana-graph lg:text-xl text-[10px] font-light'>Dise??ar y construir desarrollos del m??s alto nivel.</p>
                                        </div>
                                        <div className=''>
                                            <h4 className='lg:text-xl text-devarana-blue font-black lg:pb-8 pb-4 text-[10px]'>Finanzas y Compras</h4>
                                            <p className='text-devarana-graph lg:text-xl text-[10px] font-light'>Lograr mayor eficiencia financiera y rentabilidad.</p>
                                        </div>
                                        <div className=''>
                                            <h4 className='lg:text-xl text-devarana-blue font-black lg:pb-8 pb-4 text-[10px]'>Marketing y Dise??o</h4>
                                            <p className='text-devarana-graph lg:text-xl text-[10px] font-light'>Posicionamiento de marca a trav??s de estrategias innovadoras.</p>
                                        </div>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1 grid lg:gap-y-10 gap-y-5 ">
                                        <div className=''>
                                            <h4 className='lg:text-xl text-devarana-blue font-black lg:pb-8 pb-4 text-[10px]'>Comercial</h4>
                                            <p className='text-devarana-graph lg:text-xl text-[10px] font-light'> Destacamos por nuestro servicio legendario al cliente.</p>
                                        </div>
                                        <div className=''>
                                            <h4 className='lg:text-xl text-devarana-blue font-black lg:pb-8 pb-4 text-[10px]'>Tecnolog??a e Innovaci??n</h4>
                                            <p className='text-devarana-graph lg:text-xl text-[10px] font-light'>Mejora cont??nua a trav??s de la transformaci??n digital interna.</p>
                                        </div>
                                        <div className=''>
                                            <h4 className='lg:text-xl text-devarana-blue font-black lg:pb-8 pb-4 text-[10px]'>Construcci??n</h4>
                                            <p className='text-devarana-graph lg:text-xl text-[10px] font-light'>Calidad y atenci??n en todos nuestros procesos constructivos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center lg:pt-20 py-10'>
                                <Button colorType='pink' type='button' textColor='white'> SABER M??S </Button>
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
                            <p className='text-devarana-graph lg:py-12 py-5 lg:text-right text-left font-bold lg:text-2xl text-[10px]'>Ponte en contacto con nostros a trav??s de:</p>
                            <a className='block lg:text-right text-left text-devarana-pink lg:text-2xl text-[10px]' href="mailto:capitalhumano@devarana.mx">capitalhumano@devarana.mx</a>
                            <a className='block lg:text-right text-left text-devarana-pink lg:text-2xl text-[10px]' href="mailto:talento@devarana.mx">talento@devarana.mx</a>
                        </div>
                        <div className="col-span-12 lg:col-span-6 relative order-1 lg:order-2">
                            <picture>
                                <source srcSet='/assets/images-phone/carrera/Colaboradores.webp' media="(max-width: 1024px)" />
                                <source srcSet='/assets/images/carrera/Colaboradores.webp' />
                                <Image src='/assets/images/carrera/Colaboradores.webp' width={700} height={1000} className="object-cover w-full"  alt="Colaboradores" />
                            </picture>
                            <div className='absolute lg:translate-x-5 -translate-x-[30px] -translate-y-[30px] top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        </div>
                    </div>
                </div>
            </div>
            <BannerRedes />
            <Form/>
        </>
    )
};
