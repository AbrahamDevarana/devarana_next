import React from 'react'
import { VacanteModalProps, VacanteSliderProps } from '../../interfaces'
import { CardVacantes } from './CardVacantes'

export const SliderVacantes = ({setShowModal, setModalContent, vacantes = []}:VacanteSliderProps) => {
    
  return (
    <div className='relative z-20 translate-x-0 translate-y-0 my-12 max-w-full overflow-hidden'>
    <div className="line-stroke">
        <div className="line-stroke__item line-stroke__1">
            {
                vacantes.map((vacante, index) => (
                    <div className='relative px-5 line-stroke__img lg:w-full w-[300px]' key={index}>
                        <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} vacante={vacante} />
                    </div>
                ))
            }
        </div>
        <div className="line-stroke__item line-stroke__2">
        {
            vacantes.map((vacante, index) => (
                <div className='relative px-5 line-stroke__img lg:w-full w-[300px]' key={index}>
                    <CardVacantes setShowModal={setShowModal} setModalContent={setModalContent} vacante={vacante} />
                </div>
            ))
        }
        </div>
    </div>
</div>
  )
}
