import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay } from 'swiper'
import { Seo } from '../components/layout/Seo'
import { Button } from '../components/Button'


import { DevaranaInlineSvg } from '../components/svg/devaranaInline'
import Link from 'next/link'

import dynamic from 'next/dynamic'
import { SliderHome } from '../components/home/SliderHome'
import { SliderRV } from '../components/home/SliderRV'
import Image from 'next/image'


const Flor5 = dynamic(() => import('../components/svg/flor5'), { ssr: false })
const Flor3 = dynamic(() => import('../components/svg/flor3'), { ssr: false })
const Flor4 = dynamic(() => import('../components/svg/flor4'), { ssr: false })
const Flor2 = dynamic(() => import('../components/svg/flor2'), { ssr: false })
const Form = dynamic(() => import('../components/Form'), { ssr: false })
const BannerRedes = dynamic(() => import('../components/layout/BannerRedes'), { ssr: false })


export default function Home() {
  return (
    <>
        <Seo
            title="Home"
            description="Home page"
            keywords="Home page"
        />
        

        <div id="initialBanner" className='overflow-hidden'>
            <div className='h-screen w-full relative object-contain'>
                <picture>
                    <source srcSet='/assets/images-phone/home/FachadaDEVARANA.webp' media="(max-width: 1024px)" />
                    <source srcSet='/assets/images/home/FachadaDEVARANA.webp' />
                    <Image src='/assets/images/home/FachadaDEVARANA.webp' layout="fill" objectFit="cover" alt="Fachada" />
                </picture>
				<div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                    <div className="relative w-full h-full">
                        <div className='flex flex-col justify-center w-full h-full transition-all duration-500  lg:pl-28 lg:-translate-y-0 -translate-y-32' id="devaranaWord">
                            <DevaranaInlineSvg className='fill-white w-[274px] lg:w-[870px] lg:pl-0 ml-20' />

                            <div className="relative">
                                <div className="flex lg:pl-0 ml-20">
                                    <p className='font-mulish font-extralight tracking-wider text-3xl lg:text-6xl text-white translate-y-0.5'>Somos</p>
                                    <div className="lg:h-[65px] h-[35px] overflow-hidden pl-5">
                                        <p className="font-playfair text-3xl lg:text-6xl text-white listEffect_item pb-5 tracking-wider">creadores</p>
                                        <p className="font-playfair text-3xl lg:text-6xl text-white listEffect_item pb-5 tracking-wider">arquitectos</p>
                                        <p className="font-playfair text-3xl lg:text-6xl text-white listEffect_item pb-5 tracking-wider">diseñadores</p>
                                        <p className="font-playfair text-3xl lg:text-6xl text-white listEffect_item pb-5 tracking-wider">calidad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute lg:left-auto left-10 bottom-12 lg:right-60'>
                            <div className='flex flex-col lg:flex-row items-center gap-5'>    
                                <div className='flex gap-5'>
                                    <div className='h-[200px] w-0.5 border-l-2 mt-auto'/>
                                    <SliderRV />
                                </div>
                                <div className='flex content-start w-full'>
                                    <a href="https://royalview.mx" target={'_blank'} rel="noreferrer">
                                        <Button type='button' colorType='pink' textColor='white'> DESCUBRE ROYAL VIEW </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='grid-cols-2 max-w-full overflow-hidden lg:grid hidden'>
            <div className='col-span-1 relative pt-1 pr-0.5'>
                <picture>
                    <source srcSet='/assets/images-phone/home/Credenza.webp' media="(max-width: 1024px)" />
                    <source srcSet='/assets/images/home/Credenza.webp' />
                    <Image src='/assets/images/home/Credenza.webp' width={950} height={500} className="object-cover w-full"  alt="Credenza" />
                </picture>
				<div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-1 bottom-0'>
                    <div className="flex flex-col items-center justify-end pb-12 h-full">
                        <h2 className='font-playfair text-4xl text-white pb-5 tracking-[0.04em]'>DEVARANA <span className='text-4xl font-mulish font-bold'>Home</span></h2> 
                        <p className='lg:text-xl text-[8px] text-white pb-5 tracking-widest'>¡MUY PRONTO!</p>
                    </div>
                  
                </div>				
            </div>
            <div className='col-span-1 relative pt-1 pl-0.5'>
                <picture>
                    <source srcSet='/assets/images-phone/home/FotoSalonIngles.webp' media="(max-width: 1024px)" />
                    <source srcSet='/assets/images/home/FotoSalonIngles.webp' />
                    <Image src='/assets/images/home/FotoSalonIngles.webp' width={950} height={500} className="object-cover w-full"  alt="FotoSalonIngles" />
                </picture>
				<div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-1 bottom-0' >
                    <div className="flex flex-col items-center justify-end pb-12 h-full">
                        <h2 className='font-playfair text-4xl text-white pb-5 tracking-[0.04em]'>Nuestro equipo</h2> 
                        <Link href={"/carrera"}>
                            <Button type='button' textColor='white' colorType='whiteInverted' > SABER MÁS </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className='block lg:hidden'>
            <SliderHome />
        </div>


		<div className='relative lg:py-24 py-12 overflow-hidden'>
			<hr className='border-devarana-pink w-72 mx-auto'/>
			<div className='text-center max-w-screen-xl mx-auto lg:py-20 py-12 tracking-wide lg:text-3xl lg:px-0 text-[10px] px-14'>
				<p className='text-devarana-graph pb-5 font-light leading-10'>
					Empresa México-Holandesa con más de 10 años de exitosa experiencia en el
					sector inmobiliario, que nace con el deseo de construir desarrollos del más alto nivel.
				</p>
				<p className='text-devarana-graph font-light leading-10'>
					En <span className='font-medium font-playfair'> DEVARANA </span> cuidamos cada detalle y nuestra trayectoria de éxito es
					<br className='lg:block hidden' /> testigo de plusvalía y patrimonio sólido.
				</p>
			</div>
            <div className='absolute left-0 -z-10 top-32 bottom-0'>
                <Flor4 className='fill-devarana-hazelnut w-full opacity-30 rotate-[25deg] -translate-x-28 scale-150' />
            </div>
            <div className='absolute right-0 -z-10 top-1/4'>
                <Flor2 className='fill-devarana-hazelnut w-full opacity-30 -rotate-[25deg] translate-y-3/4 translate-x-28 scale-150' />
            </div>
            
			
			<div className='text-center lg:pb-24 pb-16'>
				<Link href={"/empresa"}>
                    <Button type='button' colorType='pinkInverted' textColor='devarana-pink'> SABER MÁS </Button>
                </Link>
			</div>

			<div className='grid grid-cols-2 gap-y-12'>
				<div className='col-span-2 lg:col-span-1 relative lg:ml-[215px] lg:mx-0 mx-16'>
                    <picture>
                        <source srcSet='/assets/images-phone/home/Cocina.webp' media="(max-width: 1024px)" />
                        <source srcSet='/assets/images/home/Cocina.webp' />
                        <Image src='/assets/images/home/Cocina.webp' width={750} height={1050} className="object-cover w-full"  alt="Credenza" />
                    </picture>
					<div className='absolute -translate-x-[30px] -translate-y-[30px] top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />
				</div>
				<div className='col-span-2 lg:col-span-1 flex items-center'>
					<div>
						<h2 className='lg:text-6xl text-xl font-playfair text-devarana-graph-darker font-medium pb-10 lg:pl-20 pl-14'>¿Por qué DEVARANA?</h2>
						<hr className='border-devarana-pink w-72 mb-10'/>
						<div className='lg:pl-20 lg:px-0 px-14 max-w-3xl lg:text-3xl text-[10px] '>
							<p className='pb-5 text-devarana-graph font-light'>
								Diseñamos cada espacio pensando en el confort,
								la practicidad y el buen gusto; sumando materiales
								de calidad que agregan valor a nuestros clientes.
							</p>
							<p className='text-devarana-graph font-light'>	
								La calidad en la construcción de cada proyecto
								se contempla desde el inicio y a ello sumamos
								pruebas asegurando la excelencia en cada
								paso del proceso constructivo.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className='bg-devarana-blue lg:h-[200px] h-[100px] text-devarana-pink relative' />

        <div className='relative overflow-hidden lg:pb-24 pb-12'>
            <div className='lg:py-[100px] py-[50px]'>
                <h2 className='text-center font-playfair text-devarana-graph-darker lg:text-6xl text-xl'>Proyecto Actual</h2>
                <hr className='border-devarana-pink lg:w-72 w-32 lg:mb-[50px] mb-[35px] lg:mt-[35px] mt-[25px] mx-auto'/>
                <p className='text-center font-light text-devarana-graph lg:px-0 px-24 lg:text-3xl text-[10px]'>Descubre Royal View, para ti que inviertes en elegancia, seguridad y un entorno exclusivo.</p>
            </div>

            <div className='absolute left-0 -z-10 top-10 bottom-0'>
                <Flor5 className='fill-devarana-hazelnut w-full opacity-50 rotate-[25deg] -translate-x-28' />
            </div>
            <div className='absolute right-0 -z-10 bottom-5'>
                <Flor3 className='fill-devarana-hazelnut w-full opacity-50 -rotate-[25deg] translate-y-36 translate-x-28' />
            </div>

            <div className='lg:px-[245px] px-14'>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        lazy={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                                
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },
                        }}
                    
                    >
                        <SwiperSlide>
                            <div className='lg:h-[750px]'>
                                <h3 className='text-center lg:pb-20 pb-12 text-devarana-graph-darker lg:text-[40px] text-lg font-playfair'>Torre Terra</h3>
                                <div className='lg:mx-10 relative'>
                                    <div className='absolute h-full scale-y-[1.14] inset-0 mx-5 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />
                                    <picture>
                                        <source srcSet='/assets/images-phone/home/TorreTerra.webp' media="(max-width: 1024px)" />
                                        <source srcSet='/assets/images/home/TorreTerra.webp' />
                                        <Image src='/assets/images/home/TorreTerra.webp' width={400} height={450} className="object-cover w-full" alt='TorreTerra' />
                                    </picture>
                                    
                                </div>
                                <p className='text-center pt-14 pb-6 text-devarana-graph-darker font-playfair lg:text-xl text-base'>Más del 80% Escriturado</p>
                                <p className='px-14 text-devarana-graph lg:text-[22px] text-[10px] lg:text-left font-light text-center'>La mezcla perfecta entre garantía en la calidad, seguridad e inversión.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='lg:h-[750px] lg:border-r lg:border-l'>
                                <h3 className='text-center lg:pb-20 pb-12 text-devarana-graph-darker lg:text-[40px] text-lg font-playfair'>Torre Aqua</h3>
                                <div className='lg:mx-10 relative'>
                                    <div className='absolute h-full scale-y-[1.14] inset-0 mx-5 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />
                                    <picture>
                                        <source srcSet='/assets/images-phone/home/TorreAqua.webp' media="(max-width: 1024px)" />
                                        <source srcSet='/assets/images/home/TorreAqua.webp' />
                                        <Image src='/assets/images/home/TorreAqua.webp' width={400} height={450} className="object-cover w-full" alt='TorreAqua' />
                                    </picture>
                                </div>
                                <p className='text-center pt-14 pb-6 text-devarana-graph-darker font-playfair lg:text-xl text-base'>Estilo de Vida</p>
                                <p className='px-14 text-devarana-graph lg:text-[22px] text-[10px] lg:text-left font-light text-center'>Con más de 30 amenidades para ti y tu familia.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='lg:h-[750px]'>
                            <h3 className='text-center lg:pb-20 pb-12 text-devarana-graph-darker lg:text-[40px] text-lg font-playfair'>Torre Fuego</h3>
                            <div className='lg:mx-10 relative'>
                                <div className='absolute h-full scale-y-[1.14] inset-0 mx-5 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />
                                <picture>
                                    <source srcSet='/assets/images-phone/home/TorreFuego.webp' media="(max-width: 1024px)" />
                                    <source srcSet='/assets/images/home/TorreFuego.webp' />
                                    <Image src='/assets/images/home/TorreFuego.webp' width={400} height={450} className="object-cover w-full" alt='TorreFuego' />
                                </picture>
                            </div>
                            <p className='text-center pt-14 pb-6 text-devarana-graph-darker font-playfair lg:text-xl text-base'>Un Proyecto Único</p>
                            <p className='px-14 text-devarana-graph lg:text-[22px] text-[10px] lg:text-left font-light text-center'>Garantía en calidad, seguridad y plusvalía.</p>
                        </div>
                        </SwiperSlide>
                    </Swiper>

                <div className='text-center lg:pt-24 pt-12 pb-4'>
                    <a href="https://royalview.mx" target={'_blank'} rel="noreferrer">
                        <Button type='button' colorType='pink' textColor='white'> DESCUBRE ROYAL VIEW </Button>
                    </a>
                </div>
            </div>
        </div>
        <BannerRedes/>
        <Form/>
    </>
  )
}
