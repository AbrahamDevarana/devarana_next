import React from 'react'
import { DevaranaInlineSvg } from '../svg/devaranaInline'
import FacebookSvg from '../svg/facebook'
import InstagramSvg from '../svg/instagram'
import Link from 'next/link'

export const Footer = () => {
    return (
        <>
            <div className='bg-devarana-blue py-24 lg:px-0 px-14'>
                <div className='grid grid-cols-12 pb-10'>
                    <div className='lg:col-span-6 col-span-12'>
                        <Link href="/" className='hover:opacity-50 transition-all ease-in-out duration-300'>
                            <DevaranaInlineSvg className='fill-white lg:max-w-[332px] max-w-[200px] w-full lg:mx-auto lg:pb-0 pb-8' />
                        </Link>
                    </div>
                    <div className='lg:col-span-6 col-span-12'>
                        <div className='mx-auto lg:max-w-sm'>
                            <p className='text-white font-playfair text-left lg:text-2xl text-sm'>Somos creadores, arquitectos <br className='lg:block hidden' /> y diseñadores de lo extraordinario.</p>
                        </div>
                    </div>
                </div>

                <hr className='border-white w-11/12 mx-auto' />

                <div>
                    <div className='grid grid-cols-12 pt-10'>
                        <div className='lg:col-start-5 lg:col-span-3 flex flex-col gap-10 col-span-12'>
                            <div>
                                <p className='text-white font-extrabold lg:text-2xl text-base'>VENTAS</p>
                                <a className='block text-white font-extralight lg:text-xl text-sm hover:opacity-50 transition-all ease-in-out duration-300' href="tel:4428244444">(442) 824 4444</a>
                                <a className='block text-white font-extralight lg:text-xl text-sm hover:opacity-50 transition-all ease-in-out duration-300' href="mailto:ventas@devarana.mx">ventas@devarana.mx</a>
                            </div>

                            <div>
                                <p className='text-white font-extrabold lg:text-2xl text-base'>CORPORATIVO</p>
                                <a href="tel:4424021073" className='block text-white font-extralight lg:text-xl text-sm hover:opacity-50 transition-all ease-in-out duration-300'>(442) 402 1073</a>
                            </div>

                            <div>
                                <p className='text-white font-extrabold lg:text-2xl text-base'>CAPITAL HUMANO</p>
                                <a href="mailto:capitalhumano@devarana.mx" className='block text-white font-extralight lg:text-xl text-sm hover:opacity-50 transition-all ease-in-out duration-300'>capitalhumano@devarana.mx</a>
                            </div>

                            <div>
                                <p className='text-white font-extrabold lg:text-2xl text-base'>COMPRAS</p>
                                <a href="mailto:compras@devarana.mx" className='block text-white font-extralight lg:text-xl text-sm hover:opacity-50 transition-all ease-in-out duration-300'>compras@devarana.mx</a>
                            </div>
                        </div>
                        <div className='lg:col-span-3 flex flex-col gap-10 col-span-12 lg:pt-0 pt-10'>
                            <div>
                                <p className='text-white font-extrabold lg:text-2xl text-base'>VISÍTANOS</p>
                                <p className='text-white font-extralight block lg:text-xl text-sm'>Av. Valle de Acantha 88, Fracc. Zibatá, Sección Acantha, <br className='lg:block hidden' /> C.P. 76269, El Marqués, Querétaro. </p>
                            </div>
                            
                            <div className='flex flex-col h-full gap-y-11'>
                                <p className='text-white font-extrabold lg:text-2xl text-base lg:text-left text-center'>SÍGUENOS EN NUESTRAS REDES</p>
                                <div className='flex gap-16 justify-center lg:pb-28'>
                                    <a href="https://www.facebook.com/DevaranaOficial" target="_blank" rel="noreferrer" className='hover:opacity-50 transition-all ease-in-out duration-300'>
                                        <FacebookSvg className='fill-white lg:w-7 lg:h-12 w-5 h-10' />
                                    </a>
                                    <a href="https://www.instagram.com/devaranaoficial/" target="_blank" rel="noreferrer" className='hover:opacity-50 transition-all ease-in-out duration-300'>
                                        <InstagramSvg className='fill-white lg:w-12 lg:h-12 w-10 h-10' />
                                    </a>
                                </div>
                                <div className='text-white mt-auto lg:text-left text-center lg:text-base text-[10px]'>
                                    <a href="" className='hover:opacity-50 transition-all ease-in-out duration-300'> Aviso de privacidad </a> | Derechos Reservados </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}
