import dynamic from 'next/dynamic'
import { Seo } from "../../components/layout/Seo";
import Image from 'next/image';

const Flor2 = dynamic(() => import('../../components/svg/flor2'), { ssr: false })
const Flor5 = dynamic(() => import('../../components/svg/flor5'), { ssr: false })
const Flor4 = dynamic(() => import('../../components/svg/flor4'), { ssr: false })

const Form = dynamic(() => import('../../components/Form'), { ssr: false })
const BannerRedes = dynamic(() => import('../../components/layout/BannerRedes'), { ssr: false })

export default function ResponsabilidadSocial() {
    return (
        <>
            <Seo
                title="Responsabilidad Social"
                description="Responsabilidad Social page"
                keywords="Responsabilidad Social page"
            />
            <div className="relative overflow-hidden lg:pb-24 pb-12">
                <h1 className="text-center lg:text-6xl text-xl lg:pt-32 pt-24 text-devarana-graph-darker">Responsabilidad Social</h1>
                <hr className="max-w-xs border-devarana-pink lg:my-9 my-5 mx-auto w-full"/>

                <p className="text-center max-w-screen-xl w-full px-10 mx-auto text-xs lg:text-3xl font-light text-devarana-graph">En DEVARANA y en Royal View estamos comprometidos con nuestro entorno y con el medio ambiente. Cuidamos el planeta para dejar un lugar mejor para las presentes y futuras generaciones. ¿Cómo lo hacemos?</p>

                <div className='absolute right-0 z-10 top-20'>
                    <Flor2  className='fill-devarana-hazelnut w-full opacity-50 -rotate-[25deg] scale-[2] translate-x-40 translate-y-36 lg:block hidden'/>
                </div>
                

                <div className="grid grid-cols-2 gap-x-10 lg:gap-y-32 gap-y-10 lg:px-52 px-14 lg:pt-24 pt-12 relative">
                    <div className="order-1 lg:order-1 col-span-2 lg:col-span-1 relative">
                        <div className='absolute -translate-x-[30px] -translate-y-[30px] top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        <picture>
                            <source srcSet='/assets/images-phone/empresa/01-responsabilidad-social/Reforestacion.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/empresa/01-responsabilidad-social/Reforestacion.webp' />
                            <Image src='/assets/images/empresa/01-responsabilidad-social/Reforestacion.webp' className="object-cover w-full h-full"  alt="Reforestación" width={800} height={600}/>
                        </picture>
                    </div> 
                    <div className="order-2 lg:order-2 col-span-2 lg:col-span-1 grid content-center lg:gap-y-10 gap-y-5">
                        <h2 className="text-devarana-blue lg:text-3xl text-base">Brigada de Reforestación Parque La Beata</h2>
                        <p className="text-devarana-graph lg:text-xl text-xs font-light lg:pb-0 pb-6"> Con nuestro programa de reforestación buscamos sumar a nuestro
                            medio ambiente y preservar la calidad de las áreas verdes. Así como
                            sensibilizar y fomentar dicho valor a nuestros colaboradores, transmitiendo
                            e implementándolos en nuestra cultura organizacional.</p>
                    </div>
                    <div className="order-4 lg:order-3 col-span-2 lg:col-span-1 grid content-center lg:gap-y-10 gap-y-5">
                        <h2 className="text-devarana-blue lg:text-3xl text-base lg:text-right text-left">Brigadas de Seguridad</h2>
                        <p className="text-devarana-graph lg:text-xl text-xs font-light lg:pb-0 pb-6 lg:text-right text-left"> Con nuestro equipo de brigadistas buscamos que sean la primera línea
                            de intervención en caso de que alguien requiera ayuda o exista alguna
                            incidencia dentro de la oficina al igual que en construcción, ya que ellos
                            detectan la emergencia, definen de qué tipo es y brindan soporte a la
                            persona que lo requiera mientras llega la ayuda especializada.</p>
                    </div>
                    <div className='absolute left-0 -z-10 top-0 translate-y-full'>
                        <Flor5 className='fill-devarana-hazelnut w-full opacity-50 rotate-[25deg] scale-150 -translate-x-40 translate-y-2/3 lg:block hidden'/>
                    </div>
                    <div className="order-3 lg:order-4 col-span-2 lg:col-span-1  relative">
                        <div className='absolute lg:translate-x-[30px] -translate-x-[30px] -translate-y-[30px] top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        <picture>
                            <source srcSet='/assets/images-phone/empresa/01-responsabilidad-social/Brigadas.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/empresa/01-responsabilidad-social/Brigadas.webp' />
                            <Image src='/assets/images/empresa/01-responsabilidad-social/Brigadas.webp' className="object-cover w-full h-full"  alt="Brigadas de Seguridad" width={800} height={600}/>
                        </picture>
                    </div>
                    <div className="order-5 lg:order-5 col-span-2 lg:col-span-1  relative">
                        <div className='absolute -translate-x-[30px] -translate-y-[30px] top-0 w-full bottom-0 bg-devarana-hazelnut bg-opacity-70 -z-10 rounded-sm' />	
                        <picture>
                            <source srcSet='/assets/images-phone/empresa/01-responsabilidad-social/CursodeReptiles.webp' media="(max-width: 1024px)" />
                            <source srcSet='/assets/images/empresa/01-responsabilidad-social/CursodeReptiles.webp' />
                            <Image src='/assets/images/empresa/01-responsabilidad-social/CursodeReptiles.webp' className="object-cover w-full h-full"  alt="Curso de Reptiles" width={800} height={600}/>
                        </picture>
                    </div>
                    <div className="order-6 lg:order-6 col-span-2 lg:col-span-1 grid content-center lg:gap-y-10 gap-y-5">
                        <h2 className="text-devarana-blue lg:text-3xl text-base">Curso de Reptiles</h2>
                        <p className="text-devarana-graph lg:text-xl text-xs font-light"> A través de los cursos brindados por parte de herpetólogos y biólogos
                            especializados en la zona de Zibatá, llevamos a cabo sesiones con el
                            objetivo de que el colaborador tenga la oportunidad de contar con la
                            información necesaria que le permita dar soluciones al enfrentarse a
                            problemas de conservación y manejo de las especies de anfibios y
                            reptiles que puedan encontrarse en nuestro entorno.</p>
                    </div>
                    <div className='absolute right-0 -z-10 bottom-0'>
                        <Flor4 className='fill-devarana-hazelnut w-full opacity-50 -rotate-[25deg] -scale-x-[2] scale-y-[2] translate-x-36 translate-y-32 lg:block hidden'/>
                    </div>
                </div>

            </div>
            <BannerRedes/>
            <Form />
        </>
    )
};
