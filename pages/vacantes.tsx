import dynamic from 'next/dynamic'

import { SliderVacantes } from "../components/vacantes/SliderVacantes";
import { VacanteModal } from "../components/vacantes/VacanteModal";
import { useEffect, useState } from "react";
import { Seo } from "../components/layout/Seo";
import { VacanteProps } from "../interfaces";

const Form = dynamic(() => import('../components/Form'), { ssr: false })
const BannerRedes = dynamic(() => import('../components/layout/BannerRedes'), { ssr: false })

export default function Vacantes() {

    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState<VacanteProps | null>(null)


    useEffect(() => {
        if (showModal) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "unset";
        }
      }, [showModal])

    //   Obtener vacantes de la API
      const [vacantes, setVacantes] = useState([])
      useEffect(() => {
          const getVacantes = async () => {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}vacantes`)
          const data = await res.json()
          const {vacantes} = data
          setVacantes(vacantes)
        }
        getVacantes()
      }, [])     


    return(
        <>
            <Seo
                title="Vacantes"
                description="Vacantes page"
                keywords="Vacantes page"
            />
            <div id="initialBanner pb-24">
                <div className='h-screen w-full relative object-contain'>
                    <picture>
                        <source srcSet='/assets/images-phone/home/FotoSalonIngles.webp' media="(max-width: 1024px)" />
                        <source srcSet='/assets/images/home/FotoSalonIngles.webp' />
                        <img src='/assets/images/home/FotoSalonIngles.webp' className="object-cover w-full h-screen"  alt="Foto Salon Ingles" />
                    </picture>
                    <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                        <div className="relative flex justify-center items-center h-full"> 
                            <h1 className="text-white lg:text-[40px] lg:leading-[50px] text-xl tracking-wide font-playfair text-center">Somos creadores, arquitectos y <br className="hidden lg:block" /> diseñadores de lo extraordinario.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:py-24 py-12">
                <h2 className="text-devarana-graph-darker text-center font-playfair lg:text-6xl text-xl">¡Sé parte de DEVARANA</h2>
                <hr className="border-devarana-pink max-w-[270px] w-full mx-auto mt-9 lg:mb-24 mb-10"/>
                <SliderVacantes setShowModal={setShowModal} vacantes={vacantes} setModalContent={setModalContent}/>

            </div>

            <BannerRedes />
            <Form />    

            { showModal && <VacanteModal showModal={showModal} setShowModal={setShowModal} modalContent={modalContent}/> }
        </>
    )
};
