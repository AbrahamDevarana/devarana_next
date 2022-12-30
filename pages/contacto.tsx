import dynamic from 'next/dynamic'
import { Seo } from "../components/layout/Seo";

const Form = dynamic(() => import('../components/Form'), { ssr: false })
const BannerRedes = dynamic(() => import('../components/layout/BannerRedes'), { ssr: false })
export default function Contacto() {
    return (
        <>
            <Seo
                title="Contacto"
                description="Contacto page"
                keywords="Contacto page"
            />
            <div id="initialBanner" className="pb-24">
                <div className='h-screen w-full relative object-contain'>
                    <picture>
                        <source srcSet='/assets/images-phone/contacto/Prototipos.webp' media="(max-width: 1024px)" />
                        <source srcSet='/assets/images/contacto/Prototipos.webp' />
                        <img src='/assets/images/contacto/Prototipos.webp' className="object-cover w-full h-screen"  alt="carreraBanner" />
                    </picture>
                    <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                        <div className="relative grid grid-cols-2 lg:gap-y-16 gap-y-5 lg:px-40 px-14 h-full">
                            <div className="lg:col-span-1 col-span-2 lg:items-end items-center flex py-20">
                                <h1 className="lg:text-5xl text-3xl text-white text-left">Directorio</h1>
                            </div>
                            <div className="lg:col-span-1 col-span-2 lg:ml-auto max-w-lg lg:text-right text-left lg:py-20 flex flex-col lg:justify-end lg:gap-y-16 gap-y-8 text-white">
                                <div>
                                    <h2 className="text-xl lg:text-3xl font-extrabold">Capital Humano</h2>
                                    <a className="text-base lg:text-3xl font-light tracking-wide" href="mail:capitalhumano@devarana.mx">capitalhumano@devarana.mx</a>
                                </div>
                                <div>
                                    <h2 className="text-xl lg:text-3xl font-extrabold">Compras</h2>
                                    <a className="text-base lg:text-3xl font-light tracking-wide" href="mail:compras@devarana.mx">compras@devarana.mx</a>
                                </div>
                                <div>
                                    <h2 className="text-xl lg:text-3xl font-extrabold">Corporativo</h2>
                                    <a className="text-base block lg:text-3xl font-light tracking-wide" href="tel:4424021073">(442) 402 1073</a>
                                </div>
                                <div>
                                    <h2 className="text-xl lg:text-3xl font-extrabold">Ventas</h2>
                                    <a className="text-base block lg:text-3xl font-light tracking-wide" href="tel:4428244444">(442) 824 4444</a>
                                    <a className="text-base lg:text-3xl font-light tracking-wide" href="mail:ventas@devarana.mx">ventas@devarana.mx</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BannerRedes />
            <Form />
        </>
    )
};
