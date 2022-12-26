import Image from "next/image"

import Construccion from '../../public/assets/images/carrera/Construccion.webp'
import { Button } from '../Button';
import { VacanteModalProps } from "../../interfaces";

export const CardVacantes = ({setShowModal, setModalContent}:VacanteModalProps) => {

    const handleModal = () => {
        setShowModal(true)
    }
    
    return (
        <>
            <div className='rounded-3xl relative lg:m-5 m-1'>
                <Image src={Construccion} alt="Construccion" className='rounded-3xl w-full' />
                <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0 rounded-3xl'>
                    <div className="flex flex-col items-start pl-10 justify-end pb-12 h-full">
                        <p className='lg:text-sm text-[10px] text-white pb-2 font-bold'>ARQUITECTURA E INGENIERÍA</p> 
                        <h2 className='text-white pb-5 lg:text-3xl text-xl font-light'>Analista de Costos y Presupuestos</h2>
                        <Button type='button' textColor='white' onClick={handleModal} colorType='pink'> APLICAR </Button>
                    </div>        
                </div>		
            </div>        
        </>
    )
}
