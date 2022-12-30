import dynamic from 'next/dynamic'
import AniversarioSVG from "../../components/svg/aniversario";
import { Seo } from "../../components/layout/Seo";
import Image from 'next/image';

const Flor3 = dynamic(() => import('../../components/svg/flor3'), { ssr: false })
const Flor1 = dynamic(() => import('../../components/svg/flor1'), { ssr: false })
const Form = dynamic(() => import('../../components/Form'), { ssr: false })
const BannerRedes = dynamic(() => import('../../components/layout/BannerRedes'), { ssr: false })

export default function GreatPlaceToWork() {
    return (
        <>
            <Seo
                title="GPTW"
                description="GPTW page"
                keywords="GPTW page"
            />
            <div className="relative overflow-hidden lg:pb-24 pb-12">
                <h1 className="text-center lg:text-6xl text-xl lg:pt-32 pt-24 text-devarana-graph-darker">¿Qué nos convierte en Great Place to Work?</h1>
                <hr className="max-w-xs border-devarana-pink lg:my-9 my-5 mx-auto w-full"/>

                <p className="text-center max-w-screen-xl w-full px-10 mx-auto text-xs lg:text-3xl font-light text-devarana-graph">Para nosotros, construir una cultura de trabajo sólida, con base en la pasión, el compromiso, la excelencia y la innovación es clave en nuestro éxito profesional. Cada acción que hacemos nos distingue y nos lleva a ser diseñadores de lo extraordinario.</p>

                <div className='absolute right-0 z-10 top-20'>
                    <Flor3 className='fill-devarana-hazelnut w-full opacity-50 -rotate-[25deg] scale-150 translate-x-28 translate-y-36 lg:block hidden'/>
                </div>
                

                <div className="grid grid-cols-2 gap-x-10 lg:gap-y-32 gap-y-10 lg:px-52 px-14 lg:pt-24 pt-12 relative">
                    <div className="order-1 lg:order-1 col-span-2 lg:col-span-1 relative">
                        <div className='absolute -translate-x-[30px] -translate-y-[30px] top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        <picture>
                            <source srcSet='/assets/images-phone/empresa/02-que-nos-convierte-en-gptw/EventoAmenidades.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/empresa/02-que-nos-convierte-en-gptw/EventoAmenidades.webp' />
                            <Image src='/assets/images/empresa/02-que-nos-convierte-en-gptw/EventoAmenidades.webp' width={800} height={600} className="object-cover w-full h-full"  alt="Evento Amenidades" />
                        </picture>
                    </div> 
                    <div className="order-2 lg:order-2 col-span-2 lg:col-span-1 grid content-center lg:gap-y-10 gap-y-5">
                        <h2 className="text-devarana-blue lg:text-3xl text-base">Clima Organizacional</h2>
                        <p className="text-devarana-graph lg:text-xl text-xs font-light lg:pb-0 pb-6"> Cada integrante del equipo contribuye a diseñar nuestro ambiente de trabajo con base en la confianza, la integración y el trabajo en equipo. </p>
                    </div>
                    <div className="order-4 lg:order-3 col-span-2 lg:col-span-1 grid content-center lg:gap-y-10 gap-y-5 relative">
                        <h2 className="text-devarana-blue lg:text-3xl text-base lg:text-right text-left">Bienestar Organizacional</h2>
                        <p className="text-devarana-graph lg:text-xl text-xs font-light lg:pb-0 pb-6 lg:text-right text-left"> Desarrollamos experiencias para cada integrante de DEVARANA, impulsando la satisfacción y bienestar al interior del equipo. </p>
                            <div className='absolute left-0 -z-10 top-0 bottom-0 right-0 w-full'>
                                <AniversarioSVG className='fill-devarana-hazelnut w-full opacity-50 lg:block hidden scale-75'/>
                            </div>
                    </div>
                    <div className="order-3 lg:order-4 col-span-2 lg:col-span-1  relative">
                        <div className='absolute lg:translate-x-[30px] -translate-x-[30px] -translate-y-[30px] top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        <picture>
                            <source srcSet='/assets/images-phone/empresa/02-que-nos-convierte-en-gptw/ViajeAniversario.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/empresa/02-que-nos-convierte-en-gptw/ViajeAniversario.webp' />
                            <Image src='/assets/images/empresa/02-que-nos-convierte-en-gptw/ViajeAniversario.webp' width={800} height={600} className="object-cover w-full h-full"  alt="Viaje Aniversario" />
                        </picture>
                    </div>
                    <div className="order-5 lg:order-5 col-span-2 lg:col-span-1  relative">
                        <div className='absolute -translate-x-[30px] -translate-y-[30px] top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        <picture>
                            <source srcSet='/assets/images-phone/empresa/02-que-nos-convierte-en-gptw/AvancedeEstrategia.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/empresa/02-que-nos-convierte-en-gptw/AvancedeEstrategia.webp' />
                            <Image src='/assets/images/empresa/02-que-nos-convierte-en-gptw/AvancedeEstrategia.webp' width={800} height={600} className="object-cover w-full h-full"  alt="Avance de Estrategia" />
                        </picture>
                    </div>
                    <div className="order-6 lg:order-6 col-span-2 lg:col-span-1 grid content-center lg:gap-y-10 gap-y-5">
                        <h2 className="text-devarana-blue lg:text-3xl text-base">Pasión por la Excelencia</h2>
                        <p className="text-devarana-graph lg:text-xl text-xs font-light">En nuestro ADN está la búsqueda de la excelencia en todo lo que hacemos, por eso impulsamos el desarrollo personal y profesional al interior del equipo.</p>
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
