import Image, { StaticImageData } from 'next/image'
import React from 'react'


interface CardProps {

    picture: StaticImageData
    previewPicture: StaticImageData
    altPicture: string
    title: string
    description: string
}

export const CardCarrera = ({picture, altPicture, title, description, previewPicture}:CardProps) => {
  return ( 
    <div className="overflow-hidden relative h-auto select-none will-change-transform group">
        <div className="lg:object-center md:object-top object-bottom hidden"/>

        <div className="lg:h-[150px] h-[100px] flex items-end w-full overflow-hidden group-hover:-translate-y-[30px] group-hover:opacity-0" style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }}>
            <Image src={previewPicture} className={`object-cover w-full h-full translate-y-0 translate-0`} height={150} width={438} placeholder="blur" alt={altPicture} />
        </div>

        <div className="lg:pt-8 pt-2 px-8 lg:group-hover:-translate-y-[63px] group-hover:-translate-y-[50px] opacity-100 bg-white group-hover:bg-transparent lg:h-[200px] h-[100px]" style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }}>
            <h3 className="text-devarana-pink lg:text-3xl text-xl relative text-left group-hover:opacity-1 group-hover:text-white overflow-hidden z-20" style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }}>
                <span className="text-devarana-pink z-20 font-bold lg:text-xl pb-1 text-sm group-hover:text-white tracking-wide" style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }}> { title }</span>
            </h3>
            <div className="opacity-100 translate-x-0 translate-y-0">
                <p className='text-devarana-graph-darker z-20 font-light lg:text-2xl text-xs group-hover:text-white'  style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }}> { description } </p>
            </div>
        </div>
        <div className="absolute top-0 left-0 bottom-0 right-0 opacity-0 select-none pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto w-full h-full group-hover:-z-20
            before:absolute before:top-0 before:content-[''] before:left-0 before:w-full before:h-full before:bg-devarana-midnight before:bg-opacity-40 before:z-10" style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }} 
            >
            <Image src={picture} className='scale-[1.3] group-hover:scale-100 w-full h-full object-center object-cover' height={280} width={573} placeholder="blur" alt={altPicture}  style={{ transition: 'all 1s cubic-bezier(0.33, 0, 0.13, 1)' }}/>
        </div>
    </div>
  )
}
