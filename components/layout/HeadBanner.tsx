import React from 'react'
import EsrSvg from '../svg/esr'
import GptwSvg from '../svg/gptw'
import ServicioLegendarioSVG from '../svg/servicioLegendario'

export const HeadBanner = () => {
  return (
    <div className='h-[55px] bg-devarana-blue w-full flex justify-end gap-x-10 py-3 px-10 z-50'>
        <ServicioLegendarioSVG className='fill-white lg:w-auto w-10'/>
        <EsrSvg className='fill-white lg:w-auto w-20' />
        <GptwSvg className='fill-devarana-blue lg:w-auto w-10' />
    </div>
  )
}
