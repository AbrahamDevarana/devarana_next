import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import RightArrowSvg from '../../svg/rightArrow'


interface CardProps {
    // picture image import
    picture: StaticImageData
    altPicture: string
    title: string
    description: string
    previewPos?: 'object-center' | 'object-top' | 'object-bottom'
    url: string
}

export const Card = ({picture, altPicture, title, description, previewPos = "object-center", url="/" }:CardProps) => {    
  return (
    <>
        <div className="overflow-hidden relative h-auto select-none will-change-transform group border border-devarana-graph rounded-b border-opacity-40">
        <div className="lg:object-center md:object-top object-bottom hidden"/>
            <div className="h-[450px] flex items-end w-full overflow-hidden group-hover:-translate-y-[30px] group-hover:opacity-0" style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }}>
                <Image src={picture} className={`object-cover w-full h-full ${previewPos} translate-y-0 translate-0`} height={280} width={573} placeholder="blur" alt={altPicture} />
            </div>
            <h3 className="text-devarana-graph-darker lg:text-3xl text-xl relative p-8 pb-0 text-left group-hover:-translate-y-[436px] group-hover:opacity-1 group-hover:text-white overflow-hidden z-20" style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }}>
                <span className="text-devarana-graph-darker group-hover:text-white font-playfair tracking-wide" style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }}> { title }</span>
            </h3>
            <div className="relative mt-2 z-20 px-8 text-left group-hover:text-white group-hover:-translate-y-[436px] opacity-0 group-hover:opacity-100" style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }}>
                <Link href={url}>
                    <span className="text-devarana-graph-darker lg:text-lg text-xs group-hover:text-white flex items-center gap-x-2 hover:opacity-50" style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }}>Ver más <RightArrowSvg className='fill-white w-[20px] stroke-white'/></span>
                </Link>
            </div>
            <div className="mt-2 pb-10 px-8 group-hover:-translate-y-[30px] opacity-100 group-hover:opacity-0" style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }}>
                <div className="opacity-100 translate-x-0 translate-y-0">
                    <p className='text-devarana-graph font-light lg:text-xl text-xs'> { description } </p>
                </div>
            </div>
            <div className="absolute top-0 left-0 bottom-0 right-0 opacity-0 select-none pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto w-full h-full
                before:absolute before:top-0 before:content-[''] before:left-0 before:w-full before:h-full before:bg-devarana-midnight before:bg-opacity-40 before:z-10" style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }} 
                >
                <Image src={picture} className='scale-[1.3] group-hover:scale-100 w-full h-full object-center object-cover' height={280} width={573} placeholder="blur" alt={altPicture}  style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }}/>
            </div>
        </div>
    </>
  )
}
