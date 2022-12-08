import React from 'react'
import { Button } from './Button'

export const Form = () => {
  return (
    <div className='bg-formulario bg-cover bg-no-repeat py-24 relative bg z-0'>
        <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10' style={{background: "rgba(36, 42, 56, 0.5)"}}></div>
        <div className=' grid grid-cols-12 gap-10'>
            <div className="col-span-6 text-center justify-center flex flex-col z-10">
                <h3 className='text-white'>Te invitamos a visitarnos o escribirnos</h3>
                <p className='text-white'>¡Será un placer atenderte!</p>
            </div>
            <div className="col-span-6 z-10">
                <form className='flex flex-col max-w-2xl'>
                    <input type="text" className='p-2 my-2 bg-white bg-opacity-30 placeholder:text-white' placeholder='Nombre'/>
                    <input type="text" className='p-2 my-2 bg-white bg-opacity-30 placeholder:text-white' placeholder='Teléfono'/>
                    <input type="email" className='p-2 my-2 bg-white bg-opacity-30 placeholder:text-white' placeholder='Correo'/>
                    <textarea name="" id="" className='p-2 my-2 bg-white bg-opacity-30 placeholder:text-white' placeholder='Mensaje'></textarea>
                    <div className='flex gap-5 my-6 text-white'>
                        <p>Contactarme por: </p>
                        <input type="radio" id='whatsapp' name='contacto'/>
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="radio" id='llamada' name='contacto'/>
                        <label htmlFor="llamada">Llamada</label>
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
