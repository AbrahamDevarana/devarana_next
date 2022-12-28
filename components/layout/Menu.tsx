import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CorreoSvg from '../svg/correo'
import { DevaranaInlineSvg } from '../svg/devaranaInline'

import { MenuSvg } from '../svg/menu'
import MenuPolygonSvg from '../svg/menuPolygon'
import WhatsappSvg from '../svg/whatsapp'
import Flor3 from '../svg/flor3'
import { useRouter } from 'next/router'

export const Menu = () => {

    const router = useRouter()
    const path = router.pathname

    const [ activeMenu, setActiveMenu ] = useState<boolean>(false)
    const [showHead, setShowHead] = useState<number>(2)
    const [lastScrollPos, setLastScrollPos] = useState<number>(0)

    const onClickMenu = (value:boolean) => {        
        const menu = document.getElementById('menu')
        const devaranaWord = document.getElementById('devaranaWord')
        const body = document.querySelector('body')

        if (value) {
            menu?.classList.add('menu__active')
            devaranaWord?.classList.add('devaranaWord__active')
            body?.classList.add('modal__active')
            
        }else{
            menu?.classList.remove('menu__active')
            devaranaWord?.classList.remove('devaranaWord__active')
            body?.classList.remove('modal__active')
        }

        //  get body    
        
        setActiveMenu(value)
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

    useEffect(() => {
        // Agrega un evento scroll al documento
        document.addEventListener('scroll', () => {
            // Obtiene la posición actual del scroll
            const currentScrollPos = window.pageYOffset;
        
            // Si la posición actual del scroll es mayor que la posición del scroll anterior, significa que se está haciendo scroll hacia abajo
            if (currentScrollPos > lastScrollPos) {
                // Oculta el menú
                setShowHead(0);
            } else if( currentScrollPos < 150) {
                // Si la posición del scroll es igual a 0, regresa el menú a su posición y fondo original
                setShowHead(2);
            }else{
                // Muestra el menú
                setShowHead(1);
            }

            if (currentScrollPos === 0) {
            }
    
            // Actualiza la posición del scroll anterior
            setLastScrollPos(currentScrollPos);
        });
    }, [lastScrollPos]);

    type bgUrlType = {
        [key: string]: string
    }
    const bgUrl: bgUrlType = {
        '/empresa': 'bg-devarana-blue',
        '/empresa/responsabilidad-social': 'bg-devarana-blue',
        '/empresa/great-place-to-work': 'bg-devarana-blue',
        '/empresa/certificados-y-premios': 'bg-devarana-blue',
        '/carrera' : 'bg-transparent',
        '/contacto': 'bg-transparent',
        '/' : 'bg-transparent'
    }

    return (
    <>
        <div className={`fixed h-[60px] w-full items-center grid grid-cols-12 lg:justify-between lg:px-[138px] px-10 z-50 max-w-full transition-all duration-500 ease-in-out 
            ${ showHead === 1 ? 'bg-devarana-pearl -translate-y-full shadow' : showHead === 0? '-translate-y-[200%]' : bgUrl[path] + ' translate-y-0' }`}>
            <button onClick={() => onClickMenu(!activeMenu)} className='h-full px-2 z-[1001] col-span-2'><MenuSvg className={`${showHead === 1 ? 'stroke-devarana-graph-darker' : 'stroke-white'}`} /></button>
            <Link href="/" className='col-span-6 col-start-4 mx-auto  hover:opacity-50 transition-all ease-in-out duration-500' onClick={ () => onClickMenu(false)}>
                <DevaranaInlineSvg className={`${showHead === 1 ? 'fill-devarana-graph-darker' : 'fill-white'}  lg:w-[200px] w-[130px]`} />
            </Link>
            <div className='lg:flex items-center gap-10 hidden col-span-3 ml-auto'>
                <a className='hover:opacity-50 transition-all ease-in-out duration-500' target="_blank" rel="noreferrer" href='mailto:ventas@devarana.mx'>
                    <CorreoSvg className={`${showHead === 1 ? 'fill-devarana-graph-darker' : 'fill-white'} w-[25px]`} />
                </a>
                <a className='hover:opacity-50 transition-all ease-in-out duration-500' target="_blank" rel="noreferrer" href='https://web.whatsapp.com/send?phone=+524428244444&text=Hola, quisiera más información de Devarana.'>
                    <WhatsappSvg className={`${showHead === 1 ? 'fill-devarana-graph-darker' : 'fill-white'} w-[25px]`} />
                </a>
                <a href='tel:+524428244444' className={`${showHead === 1 ? 'text-devarana-graph-darker' : 'text-white'} font-light text-base hover:opacity-50 transition-all ease-in-out duration-300 tracking-wider`}>(442) 824 4444</a>
            </div>

            {/* Prevent scroll */}

        </div>

        <div id='menu' className='menu__container top-0 fixed w-full lg:max-w-[515px] bg-devarana-blue lg:bg-opacity-90 z-40 transition-all duration-700 ease-in-out'>
            <div className='relative h-screen'>
                <div className='absolute left-0 -z-10 top-0 bottom-0'>
                    <Flor3 className='fill-white w-full opacity-10 rotate-[25deg] translate-y-36 -translate-x-28' />
                </div>

                <div className='flex justify-center items-center h-screen'>
                    <div className='flex flex-col gap-10 z-20'>
                        <div>
                            <div className='flex gap-2 align-middle items-center justify-center cursor-pointer' onClick={onClickShow}>
                                <Link href="/empresa" onClick={ () => onClickMenu(false) }><p className='text-center text-white font-playfair lg:text-[40px] text-3xl pb-2 hover:border-b-2' >Empresa</p> </Link>
                                <MenuPolygonSvg className='fill-white translate-y-1 transition-all duration-500'  />
                            </div> 

                            <div className='menu__opt h-44 overflow-hidden transition-all duration-500 text-center'>
                                <Link href='/empresa/responsabilidad-social' onClick={() => onClickMenu(false)}>
                                    <p className='text-white font-light lg:text-xl text-sm pt-8 pb-4'>Responsabilidad Social</p>
                                </Link>
                                <Link href='/empresa/great-place-to-work' onClick={() => onClickMenu(false)}>
                                    <p className='text-white font-light lg:text-xl text-sm py-4'>¿Qué nos convierte en GPTW?</p>
                                </Link>
                                <Link href='/empresa/certificados-y-premios' onClick={() => onClickMenu(false)}>
                                    <p className='text-white font-light lg:text-xl text-sm pt-4'>Certificados y Premios</p>
                                </Link>
                            </div>
                        </div> 
                        <div>
                            <div className='flex gap-2 align-middle items-center justify-center cursor-pointer' onClick={onClickShow}>
                                <Link href='/carrera' onDoubleClick={ () => onClickMenu(false) }>
                                    <p className='text-center text-white font-playfair lg:text-[40px] text-3xl pb-2 hover:border-b-2' >Carrera</p> 
                                </Link>
                                <MenuPolygonSvg className='fill-white translate-y-1'/> 
                            </div>
                            <div className='menu__opt overflow-hidden transition-all duration-500 text-center'>
                                <Link href='/vacantes' onClick={() => onClickMenu(false)}>
                                    <p className='text-white font-light lg:text-xl text-sm pt-8 pb-4'>Vacantes</p>
                                </Link>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <Link href='/contacto' onClick={() => onClickMenu(false)} className="w-auto">
                                <p className='text-center text-white font-playfair lg:text-[40px] text-3xl pb-2 hover:border-b-2'>Contacto</p>
                            </Link>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>

        <div className='fixed w-full h-full bg-devarana-midnight bg-opacity-10 z-30 transition-all duration-500 ease-in-out' onClick={() => onClickMenu(false)} style={{display: activeMenu ? 'block' : 'none'}}></div>


    </>
  )
}
