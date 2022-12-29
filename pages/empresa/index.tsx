import Image from "next/image";
import { Seo } from "../../components/layout/Seo";
import Flor1 from "../../components/svg/flor1";
import { SliderValores } from "../../components/empresa/SliderValores";
import { SliderProyectos } from "../../components/empresa/SliderProyectos";
// import PrimerEntrega from "../../public/assets/images/empresa/PrimerEntrega.webp";
// import TorresReserva from "../../public/assets/images/empresa/TorresReserva.webp";
import Flor5 from "../../components/svg/flor5";
import Reforestacion from "../../public/assets/images/empresa/ReforestacionG.webp";
import ViajeAniversario from "../../public/assets/images/empresa/ViajeAniversarioG.webp";
import Certificados from "../../public/assets/images/empresa/CertificadosG.webp";
import ReforestacionC from "../../public/assets/images/empresa/ReforestacionC.webp";
import ViajeAniversarioC from "../../public/assets/images/empresa/ViajeAniversarioC.webp";
import CertificadosC from "../../public/assets/images/empresa/CertificadosC.webp";
import { BannerRedes } from "../../components/layout/BannerRedes";
import { Form } from "../../components/Form";
import Flor2 from "../../components/svg/flor2";
import Flor3 from "../../components/svg/flor3";
import { Card } from "../../components/empresa/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { SliderTestimonios } from "../../components/empresa/SliderTestimonios";



export default function Empresa() {
    
    return (
        <>
            <Seo
                title="Empresa"
                description="Empresa page"
                keywords="Empresa page"
            />
            <div className="initialBanner py-20 relative">
                <h1 className="text-devarana-pink text-center lg:py-14 py-8 lg:text-[36px] text-sm font-playfair">Nuestra Misión</h1>
                <p className="text-center lg:text-[50px] text-xl text-devarana-graph font-playfair lg:leading-[70px] leading-[30px] px-10">Inspiramos al mundo <span className="text-devarana-pink font-playfair"> creando espacios <br className="lg:block hidden" />
                    únicos</span> con amor y pasión, cuidando nuestro <br className="lg:block hidden" />
                    entorno, la rentabilidad y el bienestar de <br className="lg:block hidden" />
                    <span className="text-devarana-pink font-playfair"> nuestros clientes. </span>
                </p>

                {/*  PrimerEntrega si es escritorio  y otra si es responsivo */}

                {/* <Image src={PrimerEntrega} className='object-cover w-full lg:px-24 px-4 py-20 z-10' priority quality={100} height={930} width={1920} placeholder="blur" alt="Primer Entrega"/> */}
                <picture>
                    <source srcSet='/assets/images-phone/empresa/PrimerEntrega.webp' media="(max-width: 1024px)" />
                    <source srcSet='/assets/images/empresa/PrimerEntrega.webp' />
                    <img src='/assets/images/empresa/PrimerEntrega.webp' className="object-cover w-full lg:px-24 px-4 py-20 z-10"  alt="Primer Entrega" />
                </picture>
                
                <div className='bg-devarana-hazelnut lg:h-[300px] h-[250px] relative -mt-48 -z-10 max-w-full'/>
                <div className='absolute left-0 top-0 translate-y-3/4 -z-10 -translate-x-20 '>
                    <Flor2 className='fill-devarana-hazelnut opacity-50 scale-150 w-full rotate-[25deg]' />
                </div>
            </div>

            <div className="relative overflow-hidden pb-24">
                <div className='grid grid-cols-2 gap-y-12 lg:mx-[245px] mx-10'>
                    <div className='col-span-2 lg:col-span-1 relative '>
                        {/* <Image src={TorresReserva} className='object-cover w-full z-20 rounded-sm' height={1002} width={707} placeholder="blur" alt="TorresReserva"/> */}
                        <picture>
                            <source srcSet='/assets/images-phone/empresa/TorresReserva.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/empresa/TorresReserva.webp' />
                            <img src='/assets/images/empresa/TorresReserva.webp' className="object-cover w-full z-20 rounded-sm"  alt="TorresReserva" />
                        </picture>
                        <div className='absolute -translate-x-[30px] -translate-y-[30px] top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                    </div>
                    <div className='col-span-2 lg:col-span-1 flex flex-col justify-center'>
                        <h2 className='lg:text-[36px] text-xl font-playfair text-devarana-pink font-medium pb-10 lg:pl-20'>Nuestra Visión</h2>
                        <div className='lg:pl-20 max-w-3xl'>
                            <p className='pb-5 text-devarana-graph lg:text-[40px] lg:leading-[60px] text-lg font-playfair tracking-wider'>
                                Seremos el referente en
                                la creación de <span className="text-devarana-pink font-playfair"> desarrollos
                                inmobiliarios </span> extraordinarios
                                en las zonas estratégicas
                                de México, destacando en 
                                <span className="text-devarana-pink font-playfair"> diseño, calidad y servicio.</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='absolute right-12 -z-10 top-10'>
                    <Flor1 className='fill-devarana-hazelnut w-full opacity-50 -rotate-[25deg] translate-y-36 translate-x-28 hidden lg:block' />
                </div>
            </div>

            <div className="bg-devarana-blue">
                <SliderValores />
            </div>


            <div className="bg-devarana-pearl relative">
                <div className='absolute left-0 top-10 z-20 -translate-x-20'>
                    <Flor5 className='fill-devarana-hazelnut w-full rotate-[25deg] hidden lg:block' />
                </div>
                <h2 className="text-center lg:text-6xl text-xl text-devarana-graph-darker lg:pt-24 pt-12 font-playfair">Creamos pensando en ti</h2>
                <hr className="border-devarana-pink lg:w-[270px] w-[130px] px-10 mx-auto mt-9 mb-4"/>
                <div className="lg:px-24 lg:pb-24 pb-12 z-20 relative px-4">
                    <SliderProyectos />
                </div>
            </div>

            <div className="bg-devarana-hazelnut">
                 <div className="mx-auto w-full lg:py-24 py-10 max-w-6xl lg:px-10 px-5">
                    <h3 className="text-devarana-graph-darker lg:text-6xl text-xl text-center font-playfair">Testimonio de Clientes</h3>
                    <hr className="border-devarana-graph border-opacity-40 w-full lg:my-10 my-6"/>
                        <SliderTestimonios />
                    <hr className="border-devarana-graph border-opacity-40 w-full lg:my-10 my-6"/>
                 </div>
            </div>

            <div className="lg:p-24 p-8 relative overflow-hidden">
                <div className='absolute right-0 bottom-0 translate-y-24 translate-x-20'>
                    <Flor3 className='fill-devarana-hazelnut w-full opacity-50 -rotate-[25deg]' />
                    
                </div>
                <div>
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
                                spaceBetween: 20,
                                
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 96,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Card altPicture="Reforestacion" previewPos="object-bottom" url="/empresa/responsabilidad-social"  previewPicture={ReforestacionC} picture={Reforestacion} title="Responsabilidad Social" description="Estamos comprometidos con nuestro entorno y con el medio ambiente. Cuidamos el planeta para dejar un lugar mejor."/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card altPicture="ViajeAniversario" previewPos="object-top" url="/empresa/great-place-to-work"  previewPicture={ViajeAniversarioC} picture={ViajeAniversario} title="¿Por qué somos GPTW?" description="Nos sentimos orgullosos de ser una empresa inclusiva, innovadora y extraordinaria."/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card altPicture="Certificados" previewPos="object-top" url="/empresa/certificados-y-premios"  previewPicture={CertificadosC} picture={Certificados} title="Certificaciones y Premios" description="Comprometidos con el servicio y la calidad de lo que diseñamos, certificamos nuestros procesos."/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <BannerRedes/>
            <Form/>
        </>
    )
    
};
