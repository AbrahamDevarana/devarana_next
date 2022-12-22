import React from 'react'
import FacebookSvg from '../svg/facebook'
import GoogleSvg from '../svg/google'
import InstagramSvg from '../svg/instagram'
import WazeSvg from '../svg/waze'

export const BannerRedes = () => {
  return (
    <>
        <div className='grid grid-cols-2 lg:pb-24 pb-12'>
            <div className='lg:py-12 py-6 col-span-2 lg:col-span-1 border-devarana-graph border-r-[.5px] border-t lg:border-b border-b-[1px]'>
                    <p className='text-devarana-graph text-center pb-5 font-playfair lg:text-3xl text-lg'> ¡Síguenos en nuestras redes! </p>
                    <div className='flex justify-center gap-x-20'>
                        <FacebookSvg className='fill-devarana-pink lg:w-10 lg:h-10 w-8 h-8'/>
                        <InstagramSvg className='fill-devarana-pink lg:w-10 lg:h-10 w-8 h-8'/>
                    </div>
            </div>
            <div className='lg:py-12 py-6 col-span-2 lg:col-span-1  border-devarana-graph border-r-[.5px] lg:border-t border-b border-t-border-b-[1px]'>
                <p className='text-devarana-graph text-center pb-5 font-playfair lg:text-3xl text-lg'>¿Cómo llegar a showroom?</p>
                <div className='flex justify-center gap-x-20'>
                    <GoogleSvg className='fill-devarana-pink lg:w-10 lg:h-10 w-8 h-8'/>
                    <WazeSvg className='fill-devarana-pink lg:w-10 lg:h-10 w-8 h-8'/>
                </div>
            </div>
        </div>

    </>
  )
}
