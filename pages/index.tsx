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

export default function Home() {
  return (
    <>
        <Seo
            title="Home"
            description="Home page"
            keywords="Home page"
        />

        <div id="initialBanner">
            <div className='h-screen w-full relative object-contain'>
                <Image src={fachada} className='object-cover w-full' fill alt='Devarana Home' />
				<div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0' />
            </div>
        </div>
        <div className='grid grid-cols-2 max-w-full overflow-hidden'>
            <div className='col-span-1 relative pt-1 pr-0.5'>
                <Image src={credenza} className='object-cover w-full' height={600} width={1000} placeholder="blur" alt="Credenza"/> 
				<div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-1 bottom-0' />


				
            </div>
            <div className='col-span-1 relative pt-1 pl-0.5'>
                <Image src={fotoSalon} className='object-cover w-full' height={600} width={1000} placeholder="blur" alt="Salon Ingles"/>
				<div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-1 bottom-0' />
            </div>
        </div>

		<div className='relative py-24 overflow-hidden'>
			<hr className='border-devarana-pink w-72 mx-auto'/>
			<div className='text-center max-w-3xl mx-auto py-20 tracking-wide text-lg px-14'>
				<p className='text-devarana-graph pb-5 font-light'>
					Empresa México-Holandesa con más de 10 años de exitosa experiencia en el
					sector inmobiliario, que nace con el deseo de construir desarrollos del más alto nivel.
				</p>
				<p className='text-devarana-graph font-light'>
					En <span className='font-medium font-playfair'> DEVARANA </span> cuidamos cada detalle y nuestra trayectoria de éxito es
					testigo de plusvalía y patrimonio sólido.
				</p>
			</div>
            <div className='absolute left-0 -z-10 top-10 bottom-0'>
                <Flor5 className='fill-devarana-hazelnut w-full opacity-30 rotate-[25deg] -translate-x-28' />
            </div>
            <div className='absolute right-0 -z-10 bottom-5'>
                <Flor3 className='fill-devarana-hazelnut w-full opacity-30 -rotate-[25deg] translate-y-36 translate-x-28' />
            </div>
            
			
			<div className='text-center pb-24'>
				<Button type='button' colorType='pinkInverted' textColor='devarana-pink'> SABER MÁS </Button>
			</div>

			<div className='grid grid-cols-2 gap-y-12'>
				<div className='col-span-2 lg:col-span-1 relative lg:ml-[215px] lg:mx-0 mx-16'>
					<Image src={cocina} className='object-cover w-full z-20 rounded-sm' height={600} width={800} placeholder="blur" alt="Cocina"/>
					<div className='absolute -translate-x-5 -translate-y-5 top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />
					
				</div>
				<div className='col-span-2 lg:col-span-1 flex items-center'>
					<div>
						<h2 className='lg:text-4xl text-xl font-playfair text-devarana-graph-darker font-medium pb-10 lg:pl-20 pl-14'>¿Por qué DEVARANA?</h2>
						<hr className='border-devarana-pink w-72 mb-10'/>
						<div className='lg:pl-20 lg:px-0 px-14 max-w-xl text-lg'>
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

		<div className='bg-devarana-blue h-[300px] text-devarana-pink relative' />

        <div className='relative overflow-hidden'>
            <div className='py-[100px]'>
                <h2 className='text-center font-playfair text-devarana-graph-darker lg:text-6xl text-xl'>Proyecto Actual</h2>
                <hr className='border-devarana-pink lg:w-72 w-32 lg:mb-[50px] mb-[45px] mt-[35px] mx-auto'/>
                <p className='text-center font-light text-devarana-graph lg:px-0 px-24 text-lg'>Descubre Royal View, para ti que inviertes en elegancia, seguridad y un entorno exclusivo.</p>
            </div>

            <div className='absolute left-0 -z-10 top-10 bottom-0'>
                <Flor5 className='fill-devarana-hazelnut w-full opacity-30 rotate-[25deg] -translate-x-28' />
            </div>
            <div className='absolute right-0 -z-10 bottom-5'>
                <Flor3 className='fill-devarana-hazelnut w-full opacity-30 -rotate-[25deg] translate-y-36 translate-x-28' />
            </div>

            <div className='lg:px-[245px] px-14'>
                <div className="grid grid-cols-3 gap-y-10">
                    <div className='col-span-3 lg:col-span-1'>
                        <h3 className='text-center pb-20 text-devarana-graph-darker text-[40px] font-playfair'>Torre Terra</h3>
                        <div className='mx-10 relative'>
                            <div className='absolute h-[112%] -top-6 left-0 right-0 mx-5 bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />
                            <Image src={torreTerra} className='object-cover w-full' height={600} width={800} placeholder="blur" alt="Torre Terra"/>
                        </div>
                        <p className='text-center pt-14 pb-6 text-devarana-graph-darker font-playfair text-2xl'>Más del 80% Escriturado</p>
                        <p className='px-14 text-devarana-graph text-base'>La mezcla perfecta entre garantía en la calidad, seguridad e inversión.</p>
                    </div>
                    <div className='col-span-3 lg:col-span-1 lg:border-r lg:border-l'>
                        <h3 className='text-center pb-20 text-devarana-graph-darker text-[40px] font-playfair'>Torre Aqua</h3>
                        <div className='mx-10 relative'>
                            <div className='absolute h-[112%] -top-6 left-0 right-0 mx-5 bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />
                            <Image src={torreAqua} className='object-cover w-full' height={600} width={800} placeholder="blur" alt="Torre Aqua"/>
                        </div>
                        <p className='text-center pt-14 pb-6 text-devarana-graph-darker font-playfair text-2xl'>Estilo de Vida</p>
                        <p className='px-14 text-devarana-graph text-base'>Con más de 30 amenidades para ti y tu familia.</p>
                    </div>
                    <div className='col-span-3 lg:col-span-1'>
                        <h3 className='text-center pb-20 text-devarana-graph-darker text-[40px] font-playfair'>Torre Fuego</h3>
                        <div className='mx-10 relative'>
                            <div className='absolute h-[112%] -top-6 left-0 right-0 mx-5 bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />
                            <Image src={torreFuego} className='object-cover w-full' height={600} width={800} placeholder="blur" alt="Torre Fuego"/>
                        </div>
                        <p className='text-center pt-14 pb-6 text-devarana-graph-darker font-playfair text-2xl'>Un Proyecto Único</p>
                        <p className='px-14 text-devarana-graph text-base'>Garantía en calidad, seguridad y plusvalía.</p>
                    </div>
                </div>
                <div className='text-center pt-24 pb-4'>
                    <Button type='button' colorType='pink' textColor='white'> SABER MÁS </Button>
                </div>
            </div>
        </div>
        <BannerRedes/>
        <Form/>
    </>
  )
}
