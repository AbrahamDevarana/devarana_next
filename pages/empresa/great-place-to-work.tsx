
import Image from "next/image";
import EventoAmenidades from "../../public/assets/images/empresa/02-que-nos-convierte-en-gptw/EventoAmenidades.webp";
import ViajeAniversario from "../../public/assets/images/empresa/02-que-nos-convierte-en-gptw/ViajeAniversario.webp";
import AvancedeEstrategia from "../../public/assets/images/empresa/02-que-nos-convierte-en-gptw/AvancedeEstrategia.webp";
import { Form } from "../../components/Form";
import { BannerRedes } from "../../components/layout/BannerRedes";
import Flor5 from "../../components/svg/flor5";
import FlorTres from "../../components/svg/flor3";
import Flor1 from "../../components/svg/flor1";
import AniversarioSVG from "../../components/svg/aniversario";

export default function GreatPlaceToWork() {
    return (
        <>
            <div className="relative overflow-hidden pb-24">
                <h1 className="text-center lg:text-6xl text-xl pt-32 text-devarana-graph-darker">¿Qué nos convierte en Great Place to Work?</h1>
                <hr className="max-w-xs border-devarana-pink my-9 mx-auto w-full"/>

                <p className="text-center max-w-screen-xl w-full px-10 mx-auto text-xs lg:text-3xl font-light text-devarana-graph">Para nosotros, construir una cultura de trabajo sólida, con base en la pasión, el compromiso, la excelencia y la innovación es clave en nuestro éxito profesional. Cada acción que hacemos nos distingue y nos lleva a ser diseñadores de lo extraordinario.</p>

                <div className='absolute right-0 z-10 top-20'>
                    <FlorTres  className='fill-devarana-hazelnut w-full opacity-50 -rotate-[25deg] scale-150 translate-x-28 translate-y-36 lg:block hidden'/>
                </div>
                

                <div className="grid grid-cols-2 gap-x-10 lg:gap-y-32 gap-y-10 lg:px-52 px-14 pt-24 relative">
                    <div className="order-1 lg:order-1 col-span-2 lg:col-span-1 relative">
                        <div className='absolute -translate-x-5 -translate-y-5 top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        <Image src={EventoAmenidades} alt="Evento Amenidades" className="object-cover w-full h-full" width={700} height={500} />
                    </div> 
                    <div className="order-2 lg:order-2 col-span-2 lg:col-span-1 grid content-center lg:gap-y-10 gap-y-5">
                        <h2 className="text-devarana-blue lg:text-3xl text-base">Clima Organizacional</h2>
                        <p className="text-devarana-graph lg:text-xl text-xs lg:pb-0 pb-6"> Cada integrante del equipo contribuye a diseñar nuestro ambiente de trabajo con base en la confianza, la integración y el trabajo en equipo. </p>
                    </div>
                    <div className="order-4 lg:order-3 col-span-2 lg:col-span-1 grid content-center lg:gap-y-10 gap-y-5 relative">
                        <h2 className="text-devarana-blue lg:text-3xl text-base text-right">Bienestar Organizacional</h2>
                        <p className="text-devarana-graph lg:text-xl text-xs lg:pb-0 pb-6 text-right"> Desarrollamos experiencias para cada integrante de DEVARANA, impulsando la satisfacción y bienestar al interior del equipo. </p>
                            <div className='absolute left-0 -z-10 top-0 bottom-0 right-0 w-full'>
                                <AniversarioSVG className='fill-devarana-hazelnut w-full opacity-50 lg:block hidden scale-75'/>
                            </div>
                    </div>
                    <div className="order-3 lg:order-4 col-span-2 lg:col-span-1  relative">
                        <div className='absolute translate-x-5 -translate-y-5 top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        <Image src={ViajeAniversario} alt="Viaje Aniversario" className="object-cover w-full h-full" width={700} height={500} />
                    </div>
                    <div className="order-5 lg:order-5 col-span-2 lg:col-span-1  relative">
                        <div className='absolute -translate-x-5 -translate-y-5 top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        <Image src={AvancedeEstrategia} alt="Avance de Estrategia" className="object-cover w-full h-full" width={700} height={500} />
                    </div>
                    <div className="order-6 lg:order-6 col-span-2 lg:col-span-1 grid content-center lg:gap-y-10 gap-y-5">
                        <h2 className="text-devarana-blue lg:text-3xl text-base">Pasión por la Excelencia</h2>
                        <p className="text-devarana-graph lg:text-xl text-xs">En nuestro ADN está la búsqueda de la excelencia en todo lo que hacemos, por eso impulsamos el desarrollo personal y profesional al interior del equipo.</p>
                    </div>
                    <div className='absolute right-0 -z-10 bottom-0'>
                        <Flor1 className='fill-devarana-hazelnut w-full opacity-50 -rotate-[25deg] scale-150 translate-x-36 translate-y-32 lg:block hidden'/>
                    </div>
                </div>

            </div>
            <BannerRedes/>
            <Form />
        </>
    )
};
