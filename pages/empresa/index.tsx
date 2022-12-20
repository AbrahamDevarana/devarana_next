import Image from "next/image";
import { Seo } from "../../components/layout/Seo";
import Flor1 from "../../components/svg/flor1";
import { SliderValores } from "../../components/empresa/SliderValores";
import { SliderProyectos } from "../../components/empresa/SliderProyectos";


import PrimerEntrega from "../../public/assets/images/empresa/PrimerEntrega.webp";
import TorresReserva from "../../public/assets/images/empresa/TorresReserva.webp";
import Flor5 from "../../components/svg/flor5";
import Reforestacion from "../../public/assets/images/empresa/Reforestacion.webp";
import ViajeAniversario from "../../public/assets/images/empresa/ViajeAniversario.webp";
import Certificados from "../../public/assets/images/empresa/Certificados.webp";
import { BannerRedes } from "../../components/layout/BannerRedes";
import { Form } from "../../components/Form";


export default function Empresa() {
    
    return (
        <>
            <Seo
                title="Home"
                description="Home page"
                keywords="Home page"
            />
            <div className="initialBanner py-20">
                <h1 className="text-devarana-pink text-center py-8 lg:text-4xl text-sm font-playfair">Nuesta Misión</h1>
                <p className="text-center lg:text-5xl text-xl text-devarana-graph font-playfair lg:leading-[70px] leading-[30px] px-10">Inspiramos al mundo <span className="text-devarana-pink"> creando espacios <br className="lg:block hidden" />
                    únicos</span> con amor y pasión, cuidando nuestro <br className="lg:block hidden" />
                    entorno, la rentabilidad y el bienestar de <br className="lg:block hidden" />
                    nuestros clientes.</p>

                {/*  PrimerEntrega si es escritorio  y otra si es responsivo */}

                <Image src={PrimerEntrega} className='object-cover w-full lg:px-24 px-4 py-20' height={600} width={1000} placeholder="blur" alt="Primer Entrega"/>
                
                <div className='bg-devarana-hazelnut lg:h-[300px] h-[250px] relative -mt-48 -z-10 max-w-full'/>
            </div>

            <div className="relative overflow-hidden pb-24">
                <div className='grid grid-cols-2 gap-y-12 lg:mx-[245px] mx-10'>
                    <div className='col-span-2 lg:col-span-1 relative '>
                        <Image src={TorresReserva} className='object-cover w-full z-20 rounded-sm' height={600} width={800} placeholder="blur" alt="TorresReserva"/>
                        <div className='absolute -translate-x-5 -translate-y-5 top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                    </div>
                    <div className='col-span-2 lg:col-span-1 flex flex-col justify-center'>
                        <h2 className='lg:text-3xl text-xl font-playfair text-devarana-pink font-medium pb-10 lg:pl-20'>Nuestra Visión</h2>
                        <div className='lg:pl-20 max-w-xl'>
                            <p className='pb-5 text-devarana-graph lg:text-4xl text-lg'>
                                Seremos el referente en
                                la creación de <span className="text-devarana-pink"> desarrollos
                                inmobiliarios </span> extraordinarios
                                en las zonas estratégicas
                                de México, destacando en 
                                <span className="text-devarana-pink"> diseño, calidad y servicio.</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='absolute right-12 -z-10 top-10'>
                    <Flor1 className='fill-devarana-hazelnut w-full opacity-30 -rotate-[25deg] translate-y-36 translate-x-28' />
                </div>
            </div>

            <div className="bg-devarana-blue">
                <SliderValores />
            </div>


            <div className="bg-devarana-pearl relative ">
                <div className='absolute left-0 top-10 z-10 -translate-x-20'>
                    <Flor5 className='fill-devarana-hazelnut w-full opacity-30 rotate-[25deg]' />
                </div>
                <div className="lg:p-24 z-20 relative p-4">
                    <SliderProyectos />
                </div>
            </div>

            <div className="bg-devarana-hazelnut">
                 <div className="mx-auto w-full py-24 max-w-6xl lg:px-10 px-5">
                    <h3 className="text-devarana-graph-darker text-6xl text-center">Testimonio de Clientes</h3>
                    <hr className="border-devarana-graph border-opacity-40 w-full my-10"/>
                    <div className="max-w-3xl w-full mx-auto flex items-center">
                        <p className="lg:text-[150px] text-[80px] text-devarana-blue -translate-y-12" >“</p>
                        <p className="text-center text-devarana-graph lg:px-10 px-2"> Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur
                            duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor
                            cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. </p>
                        <sub className="lg:text-[150px] text-[80px] text-devarana-blue px-5 items-end flex translate-y-14">”</sub>
                    </div>
                    <p className="text-2xl text-devarana-blue text-center"> John Doe </p>
                    <hr className="border-devarana-graph border-opacity-40 w-full my-10"/>
                 </div>
            </div>

            <div className="p-24">
                <div className="grid lg:grid-cols-3 gap-24">
                      <div className="col-span-1 border border-devarana-graph rounded-b border-opacity-40 relative group overflow-hidden max-h-[700px]">
                        <Image src={Reforestacion} className='object-cover object-center w-full h-[450px] group-hover:h-[700px] transition-all duration-1000 group-hover:scale-110' height={500} width={585} placeholder="blur" alt="Reforestacion"/>
                        <div className="p-10 bg-white group-hover:bg-devarana-midnight group-hover:bg-opacity-30 h-[250px] group-hover:h-full group-hover:-translate-y-full duration-1000 transition-all">
                            <h3 className="pb-3 text-devarana-graph-darker text-3xl group-hover:text-white transition-all duration-1000">Responsabilidad Social</h3>
                            <p className="text-devarana-graph group-hover:hidden transition-all duration-1000">
                                Estamos comprometidos con nuestro entorno y
                                con el medio ambiente. Cuidamos el planeta
                                para dejar un lugar mejor.
                            </p>
                        </div>
                        {/* <Card /> */}
                    </div>
                    <div className="col-span-1 border border-devarana-graph rounded-b border-opacity-40 relative group overflow-hidden max-h-[700px]">
                        <Image src={ViajeAniversario} className='object-cover object-center w-full h-[450px] group-hover:h-[700px] transition-all duration-1000 group-hover:scale-110' height={500} width={585} placeholder="blur" alt="Certificados"/>
                        <div className="p-10 bg-white group-hover:bg-devarana-midnight group-hover:bg-opacity-30 h-[250px] group-hover:h-full group-hover:-translate-y-full duration-1000 transition-all">
                            <h3 className="pb-3 text-devarana-graph-darker text-3xl group-hover:text-white transition-all duration-1000">¿Por qué somos GPTW?</h3>
                            <p className="text-devarana-graph group-hover:hidden transition-all duration-1000">
                                Estamos comprometidos con nuestro entorno y
                                con el medio ambiente. Cuidamos el planeta
                                para dejar un lugar mejor.
                            </p>
                        </div>
                        {/* <Card /> */}
                    </div>
                    <div className="col-span-1 border border-devarana-graph rounded-b border-opacity-40 relative group overflow-hidden max-h-[700px]">
                        <Image src={Certificados} className='object-cover object-center w-full h-[450px] group-hover:h-[700px] transition-all duration-1000 group-hover:scale-110' height={500} width={585} placeholder="blur" alt="Certificados"/>
                        <div className="p-10 bg-white group-hover:bg-devarana-midnight group-hover:bg-opacity-30 h-[250px] group-hover:h-full group-hover:-translate-y-full duration-1000 transition-all">
                            <h3 className="pb-3 text-devarana-graph-darker text-3xl group-hover:text-white transition-all duration-1000">Certificaciones y Premios</h3>
                            <p className="text-devarana-graph group-hover:hidden transition-all duration-1000">
                                Estamos comprometidos con nuestro entorno y
                                con el medio ambiente. Cuidamos el planeta
                                para dejar un lugar mejor.
                            </p>
                        </div>
                        {/* <Card /> */}
                    </div>
                </div>
            </div>

            <BannerRedes/>
            <Form/>
        </>
    )
    
};
