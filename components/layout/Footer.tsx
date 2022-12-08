import React from 'react'
import { DevaranaInlineSvg } from '../svg/devaranaInline'
import FacebookSvg from '../svg/facebook'
import InstagramSvg from '../svg/instagram'

export const Footer = () => {
    return (
        <>
            <div className='bg-devarana-blue py-24 lg:px-0 px-14'>
                <div className='grid grid-cols-12 pb-10'>
                    <div className='lg:col-span-6 col-span-12'>
                        <DevaranaInlineSvg className='fill-white lg:max-w-[250px] max-w-[200px] w-full lg:mx-auto lg:pb-0 pb-8' />
                    </div>
                    <div className='lg:col-span-6 col-span-12'>
                        <div className='mx-auto lg:max-w-sm'>
                            <p className='text-white font-playfair text-left'>Somos creadores, arquitectos <br className='lg:block hidden' /> y diseñadores de lo extraordinario.</p>
                        </div>
                    </div>
                </div>

                <hr className='border-white w-11/12 mx-auto' />

                <div>
                    <div className='grid grid-cols-12 pt-10'>
                        <div className='lg:col-start-5 lg:col-span-3 flex flex-col gap-10 col-span-12'>
                            <div>
                                <p className='text-white font-extrabold'>VENTAS</p>
                                <a className='block text-white font-extralight' href="tel:4428244444">(442) 824 4444</a>
                                <a className='block text-white font-extralight' href="mailto:ventas@devarana.mx">ventas@devarana.mx</a>
                            </div>

                            <div>
                                <p className='text-white font-extrabold'>CORPORATIVO</p>
                                <a href="tel:4424021073" className='block text-white font-extralight'>(442) 402 1073</a>
                            </div>

                            <div>
                                <p className='text-white font-extrabold'>CAPITAL HUMANO</p>
                                <a href="mailto:capitalhumano@devarana.mx" className='block text-white font-extralight'>capitalhumano@devarana.mx</a>
                            </div>

                            <div>
                                <p className='text-white font-extrabold'>COMPRAS</p>
                                <a href="mailto:compras@devarana.mx" className='block text-white font-extralight'>compras@devarana.mx</a>
                            </div>
                        </div>
                        <div className='lg:col-span-3 flex flex-col gap-10 col-span-12'>
                            <div>
                                <p className='text-white font-extrabold'>VISÍTANOS</p>
                                <p className='text-white font-extralight block'>Av. Valle de Acantha 88, Fracc. Zibatá, Sección Acantha, <br className='lg:block hidden' /> C.P. 76269, El Marqués, Querétaro. </p>
                            </div>
                            
                            <div className='flex flex-col h-full gap-y-5'>
                                <p className='text-white font-extrabold lg:text-left text-center'>SÍGUENOS EN NUESTRAS REDES</p>
                                <div className='flex gap-16 justify-center'>
                                    <a href="https://www.facebook.com/DevaranaOficial" target="_blank" rel="noreferrer">
                                        <FacebookSvg className='fill-white w-4 h-12' />
                                    </a>
                                    <a href="https://www.instagram.com/devaranaoficial/" target="_blank" rel="noreferrer">
                                        <InstagramSvg className='fill-white w-8 h-12' />
                                    </a>
                                </div>
                                <p className='text-white mt-auto lg:text-left text-center'>Aviso de privacidad  | Derechos Reservados </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}
