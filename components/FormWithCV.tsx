import React from 'react'
import { Button } from './Button'

export const FormWithCv = () => {
  return (
    
    <form className='flex flex-col max-w-2xl w-full lg:px-0 px-14'>
        <input type="text" className='p-2 my-2 bg-white bg-opacity-30 placeholder:text-devarana-graph border-b lg:text-base text-xs' placeholder='Nombre'/>
        <input type="text" className='p-2 my-2 bg-white bg-opacity-30 placeholder:text-devarana-graph border-b lg:text-base text-xs' placeholder='Teléfono'/>
        <input type="email" className='p-2 my-2 bg-white bg-opacity-30 placeholder:text-devarana-graph border-b lg:text-base text-xs' placeholder='Correo'/>
        <textarea name="" id="" className='p-2 my-2 bg-white bg-opacity-30 placeholder:text-devarana-graph border-b lg:text-base text-xs' placeholder='Mensaje'></textarea>
        <div className='flex max-w-sm justify-between pt-10'>
            <Button type='submit' colorType={'pink'} textColor={"white"}> 
                Subir CV
            </Button> 
            <Button type='submit' colorType={'pinkInverted'} textColor={"devarana-pink"} />

        </div>
    </form>
  )
}
