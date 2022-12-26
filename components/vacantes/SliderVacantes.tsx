import React from 'react'
import { VacanteModalProps } from '../../interfaces'
import { CardVacantes } from './CardVacantes'

export const SliderVacantes = ({setShowModal, setModalContent}:VacanteModalProps) => {
  return (
    <div className='relative z-20 translate-x-0 translate-y-0 my-12 max-w-full overflow-hidden'>
    <div className="line-stroke">
        <div className="line-stroke__item line-stroke__1">
            <div className='relative px-5 line-stroke__img lg:w-full w-[300px]'>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />                      
            </div>
            <div className='relative px-5 line-stroke__img lg:w-full w-[300px]'>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />                      
            </div>                
            <div className='relative px-5 line-stroke__img lg:w-full w-[300px]'>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />                      
            </div>
            <div className='relative px-5 line-stroke__img lg:w-full w-[300px]'>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />                      
            </div>
            <div className='relative px-5 line-stroke__img lg:w-full w-[300px]'>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />          
            </div>
        </div>
        <div className="line-stroke__item line-stroke__2">
            <div className='relative px-5 line-stroke__img lg:w-full w-[300px]'>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />                      
            </div>
            <div className='relative px-5 line-stroke__img lg:w-full w-[300px]'>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />                      
            </div>
            <div className='relative px-5 line-stroke__img lg:w-full w-[300px]'>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />                      
            </div>                
            <div className='relative px-5 line-stroke__img lg:w-full w-[300px]'>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />                      
            </div>
            <div className='relative px-5 line-stroke__img lg:w-full w-[300px]'>
                <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} />          
            </div>
        </div>
    </div>
</div>
  )
}
