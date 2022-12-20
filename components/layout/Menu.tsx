import Link from 'next/link'
import React, { useState } from 'react'
import CorreoSvg from '../svg/correo'
import { DevaranaInlineSvg } from '../svg/devaranaInline'
import Flor3 from '../svg/flor3'
import { MenuSvg } from '../svg/menu'
import MenuPolygonSvg from '../svg/menuPolygon'
import WhatsappSvg from '../svg/whatsapp'

export const Menu = () => {
    
    const onClickMenu = () => {
        const menu = document.getElementById('menu')
        menu?.classList.toggle('menu__active')

    //  get body    
        const body = document.querySelector('body')
        body?.classList.toggle('modal__active')
        
    }

    const onClickShow = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.currentTarget
        const elementParent = element.parentElement
        const elementParentChildren = elementParent?.children[1]

        
        // How many childs has elementParentChildren?
        const childs:number = elementParentChildren?.childElementCount || 0        

        // Show Menu Options
        elementParentChildren?.classList.toggle(`menu__show`)
        elementParentChildren?.classList.toggle(`height-${childs}`)

        // Rotate Menu Polygon
        const elementChildren = element.children[1]        
        elementChildren.classList.toggle('rotate-90')
    }
 

    
    return (
    <>
        <div className='fixed h-[60px] w-full items-center flex lg:justify-between lg:px-36 px-10 z-50 max-w-full'>
            <button onClick={onClickMenu} className='h-full px-2 z-[1001]'><MenuSvg className='stroke-white' /></button>
            <DevaranaInlineSvg className='fill-white lg:w-[200px] w-[130px] mx-auto' />
            <div className='lg:flex gap-10 hidden'>
                <CorreoSvg className='fill-white w-[25px]' />
                <WhatsappSvg className='fill-white w-[25px]' />
                <a href='tel:+524428244444' className="text-white font-light">(442) 824 4444</a>
            </div>

            {/* Prevent scroll */}

            <div id='menu' className='menu__container top-0 fixed w-full lg:max-w-[515px] bg-devarana-blue  lg:bg-opacity-90 z-[1000] transition-all duration-700 ease-in-out'>
                <div className='relative h-screen'>
                    <div className='absolute left-0 -z-10 top-0 bottom-0'>
                        <Flor3 className='fill-white w-full opacity-10 rotate-[25deg] translate-y-36 -translate-x-28' />
                    </div>

                    <div className='flex justify-center items-center h-screen'>
                        <div className='flex flex-col gap-10 z-20'>
                            <div>
                                <div className='flex gap-2 align-middle items-center justify-center cursor-pointer' onClick={onClickShow}>
                                    <p className='text-center text-white font-playfair text-3xl'>Empresa</p> 
                                    <MenuPolygonSvg className='fill-white translate-y-1 transition-all duration-500'/>
                                </div> 

                                <div className='menu__opt h-44 overflow-hidden transition-all duration-500 text-center'>
                                    <Link href='/empresa'>
                                        <p className='text-white font-light pt-8 pb-4'>Responsabilidad Social</p>
                                    </Link>
                                    <Link href='/empresa'>
                                        <p className='text-white font-light py-4'>¿Qué nos convierte en GPTW?</p>
                                    </Link>
                                    <Link href='/empresa'>
                                        <p className='text-white font-light pt-4'>Certificados y Premios</p>
                                    </Link>
                                </div>
                            </div> 
                            <div>
                                <div className='flex gap-2 align-middle items-center justify-center cursor-pointer' onClick={onClickShow}>
                                    <p className='text-center text-white font-playfair text-3xl'>Carrera</p> 
                                    <MenuPolygonSvg className='fill-white translate-y-1'/> 
                                </div>
                                <div className='menu__opt overflow-hidden transition-all duration-500 text-center'>
                                    <Link href='/empresa'>
                                        <p className='text-white font-light pt-8 pb-4'>Vacantes</p>
                                    </Link>
                                </div>
                            </div>
                            <div className=''>
                                <p className='text-center text-white font-playfair text-3xl'>Contacto</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>

        
    </>
  )
}
