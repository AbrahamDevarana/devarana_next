import Image from "next/image"

// import Construccion from '../../public/assets/images/carrera/Construccion.webp'
import { Button } from '../Button';
import { VacanteCardProps, VacanteProps } from "../../interfaces";

export const CardVacantes = ({setShowModal, setModalContent, vacante}:VacanteCardProps) => {
    
    const handleModal = (vacante:VacanteProps) => {
        setShowModal(true)
        setModalContent(vacante)
    }
    
    return (
        <>
            <div className='rounded-3xl relative lg:m-5 m-1'>
                {/* <Image src={Construccion} alt="Construccion" className='rounded-3xl w-full' /> */}
                <picture>
                    <source srcSet='/assets/images-phone/carrera/Construccion.webp' media="(max-width: 1024px)" />
                    <source srcSet='/assets/images/carrera/Construccion.webp' />
                    <img src='/assets/images/carrera/Construccion.webp' className="rounded-3xl w-full"  alt="Construccion" />
                </picture>
                <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0 rounded-3xl'>
                    <div className="flex flex-col items-start pl-10 justify-end pb-12 h-full">
                        <p className='lg:text-sm text-[10px] text-white pb-2 font-bold uppercase'>{ vacante?.area }</p> 
                        <h2 className='text-white pb-5 lg:text-3xl text-xl font-light'>{vacante ?.titulo }</h2>
                        <Button type='button' textColor='white' onClick={ () => handleModal(vacante)} colorType='pink'> APLICAR </Button>
                    </div>        
                </div>		
            </div>        
        </>
    )
}
