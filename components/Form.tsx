import React from 'react'
import { Button } from './Button'

export const Form = () => {
  return (
    <div className='bg-formulario bg-cover bg-no-repeat py-24 relative bg z-0 overflow-hidden'>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10' style={{background: "rgba(36, 42, 56, 0.7)"}}></div>
        <div className='grid grid-cols-12 lg:gap-10 gap-y-10'>
            <div className="col-span-12 lg:col-span-6 text-center justify-center flex flex-col z-10 lg:px-0 px-8">
                <h3 className='text-white lg:text-3xl text-lg font-playfair tracking-wider'>Te invitamos a visitarnos o escribirnos</h3>
                <p className='text-white font-playfair lg:text-xl text-lg tracking-wider'>¡Será un placer atenderte!</p>
            </div>
            <div className="col-span-12 lg:col-span-6 z-10">
                <form className='flex flex-col max-w-2xl w-full lg:px-0 px-14'>
                    <input type="text" className='p-2 my-2 bg-white bg-opacity-30 placeholder:text-white lg:text-base text-xs' placeholder='Nombre'/>
                    <input type="text" className='p-2 my-2 bg-white bg-opacity-30 placeholder:text-white lg:text-base text-xs' placeholder='Teléfono'/>
                    <input type="email" className='p-2 my-2 bg-white bg-opacity-30 placeholder:text-white lg:text-base text-xs' placeholder='Correo'/>
                    <textarea name="" id="" className='p-2 my-2 bg-white bg-opacity-30 placeholder:text-white lg:text-base text-xs' placeholder='Mensaje'></textarea>
                    <div className='flex gap-5 my-6 text-white'>
                        <p className='lg:text-base text-xs'>Contactarme por: </p>
                        <input type="radio" id='whatsapp' name='contacto'/>
                        <label htmlFor="whatsapp" className='lg:text-base text-xs'>Whatsapp</label>
                        <input type="radio" id='llamada' name='contacto'/>
                        <label htmlFor="llamada" className='lg:text-base text-xs'>Llamada</label>
                    </div>
                    <div>
                        <Button type='submit' colorType={'whiteInverted'} textColor={"white"} />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
