
import Image from "next/image";
import GPTW from "../../public/assets/images/empresa/03-certificados-y-premios/GPTW.webp";
import ESR from "../../public/assets/images/empresa/03-certificados-y-premios/ESR.webp";
import { Form } from "../../components/Form";
import { BannerRedes } from "../../components/layout/BannerRedes";
import Flor2 from "../../components/svg/flor2";
import Flor5 from "../../components/svg/flor5";
import Flor3 from "../../components/svg/flor3";
import ServicioLegendarioSVG from "../../components/svg/servicioLegendario";
import { Seo } from "../../components/layout/Seo";

export default function ResponsabilidadSocial() {
    return (
        <>
            <Seo
                title="Certificados"
                description="Certificados page"
                keywords="Certificados page"
            />
           <div className="relative overflow-hidden pb-24">
                <h1 className="text-center lg:text-6xl text-xl pt-32 text-devarana-graph-darker">Certificados y Premios</h1>
                <hr className="max-w-xs border-devarana-pink my-9 mx-auto w-full"/>

                <p className="text-center max-w-screen-xl w-full px-10 mx-auto text-xs lg:text-3xl font-light text-devarana-graph">Nuestro compromiso con la calidad, la excelencia y con nuestro equipo de trabajo definen nuestro ADN como empresa, el cual nos ha llevado a ser acreedores de varios premios y certificados. </p>

                <div className='absolute right-0 z-10 top-20'>
                    <Flor5 className='fill-devarana-hazelnut w-full opacity-50 -rotate-[25deg] scale-[2] translate-x-40 translate-y-36 lg:block hidden'/>
                </div>
                

                <div className="grid grid-cols-2 gap-x-10 lg:gap-y-32 gap-y-10 lg:px-52 px-14 pt-24 relative">
                    <div className="order-1 lg:order-1 col-span-2 lg:col-span-1 relative">
                        <div className='absolute -translate-x-5 -translate-y-5 top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        <Image src={GPTW} alt="Reforestación" className="object-cover w-full h-full" width={700} height={500} />
                    </div> 
                    <div className="order-2 lg:order-2 col-span-2 lg:col-span-1 grid content-center lg:gap-y-10 gap-y-5">
                        <h2 className="text-devarana-blue lg:text-3xl text-base">Great Place to Work</h2>
                        <p className="text-devarana-graph lg:text-xl text-xs lg:pb-0 pb-6"> Nuestro compromiso por generar un ambiente de trabajo extraordinario, nos ha llevado a certificar por tercer año consecutivo como una de las mejores empresas para trabajar en México. </p>
                    </div>
                    <div className="order-4 lg:order-3 col-span-2 lg:col-span-1 grid content-center lg:gap-y-10 gap-y-5">
                        <h2 className="text-devarana-blue lg:text-3xl text-base text-right">Empresa Socialmente Responsable</h2>
                        <p className="text-devarana-graph lg:text-xl text-xs lg:pb-0 pb-6 text-right"> Buscamos implementar estrategias que nos orienten hacia un modelo de gestión sostenible y socialmente responsable que deje huella en nuestro entorno. </p>
                    </div>
                    <div className='absolute left-0 -z-10 top-0 translate-y-full'>
                        <Flor2 className='fill-devarana-hazelnut w-full opacity-50 rotate-[10deg] scale-[2] -translate-x-40 translate-y-2/3 lg:block hidden'/>
                    </div>
                    <div className="order-3 lg:order-4 col-span-2 lg:col-span-1  relative">
                        <div className='absolute translate-x-5 -translate-y-5 top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        <Image src={ESR} alt="Brigadas de Seguridad" className="object-cover w-full h-full" width={700} height={500} />
                    </div>
                    <div className="order-5 lg:order-5 col-span-2 lg:col-span-1  relative">
                        <div className='absolute -translate-x-5 -translate-y-5 top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        <div className="bg-white">
                            <ServicioLegendarioSVG className='w-full h-full p-10 fill-devarana-blue' />
                        </div>
                    </div>
                    <div className="order-6 lg:order-6 col-span-2 lg:col-span-1 grid content-center lg:gap-y-10 gap-y-5">
                        <h2 className="text-devarana-blue lg:text-3xl text-base">Servicio Legendario - ISO 9001:2015</h2>
                        <p className="text-devarana-graph lg:text-xl text-xs"> Hemos asumido el compromiso de implementar un modelo de Gestión de Calidad con la finalidad de impulsar la satisfacción de nuestro equipo de trabajo, clientes y socios de negocio. </p>
                    </div>
                    <div className='absolute right-0 -z-10 bottom-0'>
                        <Flor3 className='fill-devarana-hazelnut w-full opacity-50 -rotate-[25deg] scale-[2] translate-x-36 translate-y-32 lg:block hidden'/>
                    </div>
                </div>

            </div>
            <BannerRedes/>
            <Form />
        </>
    )
};
