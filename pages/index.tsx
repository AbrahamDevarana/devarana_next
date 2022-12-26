import Image from 'next/image'  
import { Form } from '../components/Form'
import { BannerRedes } from '../components/layout/BannerRedes'
import { Seo } from '../components/layout/Seo'
import { Button } from '../components/Button'

import fachada from '../public/assets/images/home/FachadaDEVARANA.webp'
import credenza from '../public/assets/images/home/Credenza.webp'
import fotoSalon from '../public/assets/images/home/FotoSalonIngles.webp'
import cocina from '../public/assets/images/home/Cocina.webp'
import torreTerra from '../public/assets/images/home/TorreTerra.webp'
import torreAqua from '../public/assets/images/home/TorreAqua.webp'
import torreFuego from '../public/assets/images/home/TorreFuego.webp'
import Flor5 from '../components/svg/flor5'
import Flor3 from '../components/svg/flor3'
import { DevaranaInlineSvg } from '../components/svg/devaranaInline'
import { SliderHome } from '../components/home/SliderHome'
import { SliderRV } from '../components/home/SliderRV'
import Flor4 from '../components/svg/flor4'
import Flor2 from '../components/svg/flor2'

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
                <Image src={fachada} className='object-cover w-full' fill alt='Devarana Home' placeholder='blur' priority />
				<div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                    <div className="relative w-full h-full">
                        <div className='flex flex-col justify-center w-full h-full transition-all duration-500  lg:pl-28 lg:-translate-y-0 -translate-y-32' id="devaranaWord">
                            <DevaranaInlineSvg className='fill-white w-[274px] lg:w-[870px] lg:pl-0 ml-20' />
                            <p className='font-playfair text-3xl lg:text-6xl text-white lg:pl-0 ml-20 tracking-wider'><span className='font-mulish font-light'>Somos</span> creadores</p>
                        </div>
                        <div className='absolute lg:left-auto left-10 bottom-12 lg:right-44'>
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
                <Image src={credenza} className='object-cover w-full' height={600} width={1000} placeholder="blur" alt="Credenza"/> 
				<div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-1 bottom-0'>
                    <div className="flex flex-col items-center justify-end pb-12 h-full">
                        <h2 className='font-playfair text-4xl text-white pb-5'>DEVARANA <span className='text-4xl font-mulish'>Home</span></h2> 
                        <Button type='button' textColor='white' colorType='whiteInverted' > MUY PRONTO </Button>
                    </div>
                  
                </div>				
            </div>
            <div className='col-span-1 relative pt-1 pl-0.5'>
                <Image src={fotoSalon} className='object-cover w-full' height={600} width={1000} placeholder="blur" alt="Salon Ingles"/>
				<div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-1 bottom-0' >
                    <div className="flex flex-col items-center justify-end pb-12 h-full">
                        <h2 className='font-playfair text-4xl text-white pb-5'>Nuestro equipo</h2> 
                        <Button type='button' textColor='white' colorType='whiteInverted' > SABER MÁS </Button>
                    </div>
                </div>
            </div>
        </div>

        <div className='block lg:hidden'>
            <SliderHome />
        </div>


		<div className='relative lg:py-24 py-12 overflow-hidden'>
			<hr className='border-devarana-pink w-72 mx-auto'/>
			<div className='text-center max-w-screen-lg mx-auto lg:py-20 py-12 tracking-wide lg:text-3xl text-[10px] px-14'>
				<p className='text-devarana-graph pb-5 font-light'>
					Empresa México-Holandesa con más de 10 años de exitosa experiencia en el
					sector inmobiliario, que nace con el deseo de construir desarrollos del más alto nivel.
				</p>
				<p className='text-devarana-graph font-light'>
					En <span className='font-medium font-playfair'> DEVARANA </span> cuidamos cada detalle y nuestra trayectoria de éxito es
					testigo de plusvalía y patrimonio sólido.
				</p>
			</div>
            <div className='absolute left-0 -z-10 top-32 bottom-0'>
                <Flor4 className='fill-devarana-hazelnut w-full opacity-50 rotate-[25deg] -translate-x-28 scale-150' />
            </div>
            <div className='absolute right-0 -z-10 top-1/4'>
                <Flor2 className='fill-devarana-hazelnut w-full opacity-50 -rotate-[25deg] translate-y-3/4 translate-x-28 scale-150' />
            </div>
            
			
			<div className='text-center lg:pb-24 pb-16'>
				<Button type='button' colorType='pinkInverted' textColor='devarana-pink'> SABER MÁS </Button>
			</div>

			<div className='grid grid-cols-2 gap-y-12'>
				<div className='col-span-2 lg:col-span-1 relative lg:ml-[215px] lg:mx-0 mx-16'>
					<Image src={cocina} className='object-cover w-full z-20 rounded-sm' height={1100} width={850} placeholder="blur" alt="Cocina"/>
					<div className='absolute -translate-x-5 -translate-y-5 top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />
				</div>
				<div className='col-span-2 lg:col-span-1 flex items-center'>
					<div>
						<h2 className='lg:text-6xl text-xl font-playfair text-devarana-graph-darker font-medium pb-10 lg:pl-20 pl-14'>¿Por qué DEVARANA?</h2>
						<hr className='border-devarana-pink w-72 mb-10'/>
						<div className='lg:pl-20 lg:px-0 px-14 max-w-3xl lg:text-3xl text-[10px] font-light'>
							<p className='pb-5 text-devarana-graph'>
								Diseñamos cada espacio pensando en el confort,
								la practicidad y el buen gusto; sumando materiales
								de calidad que agregan valor a nuestros clientes.
							</p>
							<p className='text-devarana-graph'>	
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

		<div className='bg-devarana-blue lg:h-[300px] h-[152px] text-devarana-pink relative' />

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
                <div className="grid grid-cols-3 gap-y-10">
                    <div className='col-span-3 lg:col-span-1'>
                        <h3 className='text-center lg:pb-20 pb-12 text-devarana-graph-darker lg:text-[40px] text-lg font-playfair'>Torre Terra</h3>
                        <div className='lg:mx-10 relative'>
                            <div className='absolute h-[112%] -top-6 left-0 right-0 mx-5 bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />
                            <Image src={torreTerra} className='object-cover w-full' height={450} width={400} placeholder="blur" alt="Torre Terra"/>
                        </div>
                        <p className='text-center pt-14 pb-6 text-devarana-graph-darker font-playfair lg:text-2xl text-base'>Más del 80% Escriturado</p>
                        <p className='px-14 text-devarana-graph lg:text-2xl text-[10px] lg:text-left font-light text-center'>La mezcla perfecta entre garantía en la calidad, seguridad e inversión.</p>
                    </div>
                    <div className='col-span-3 lg:col-span-1 lg:border-r lg:border-l'>
                        <h3 className='text-center lg:pb-20 pb-12 text-devarana-graph-darker lg:text-[40px] text-lg font-playfair'>Torre Aqua</h3>
                        <div className='lg:mx-10 relative'>
                            <div className='absolute h-[112%] -top-6 left-0 right-0 mx-5 bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />
                            <Image src={torreAqua} className='object-cover w-full' height={450} width={400} placeholder="blur" alt="Torre Aqua"/>
                        </div>
                        <p className='text-center pt-14 pb-6 text-devarana-graph-darker font-playfair lg:text-2xl text-base'>Estilo de Vida</p>
                        <p className='px-14 text-devarana-graph lg:text-2xl text-[10px] lg:text-left font-light text-center'>Con más de 30 amenidades para ti y tu familia.</p>
                    </div>
                    <div className='col-span-3 lg:col-span-1'>
                        <h3 className='text-center lg:pb-20 pb-12 text-devarana-graph-darker lg:text-[40px] text-lg font-playfair'>Torre Fuego</h3>
                        <div className='lg:mx-10 relative'>
                            <div className='absolute h-[112%] -top-6 left-0 right-0 mx-5 bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />
                            <Image src={torreFuego} className='object-cover w-full' height={450} width={400} placeholder="blur" alt="Torre Fuego"/>
                        </div>
                        <p className='text-center pt-14 pb-6 text-devarana-graph-darker font-playfair lg:text-2xl text-base'>Un Proyecto Único</p>
                        <p className='px-14 text-devarana-graph lg:text-2xl text-[10px] lg:text-left font-light text-center'>Garantía en calidad, seguridad y plusvalía.</p>
                    </div>
                </div>
                <div className='text-center lg:pt-24 pt-12 pb-4'>
                    <Button type='button' colorType='pink' textColor='white'> SABER MÁS </Button>
                </div>
            </div>
        </div>
        <BannerRedes/>
        <Form/>
    </>
  )
}
