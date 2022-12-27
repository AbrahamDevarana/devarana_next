import Image from "next/image";
// import FotoSalonIngles from "../public/assets/images/home/FotoSalonIngles.webp";
import { SliderVacantes } from "../components/vacantes/SliderVacantes";
import { BannerRedes } from "../components/layout/BannerRedes";
import { Form } from "../components/Form";
import { VacanteModal } from "../components/vacantes/VacanteModal";
import { useEffect, useState } from "react";
import { Seo } from "../components/layout/Seo";

export default function Vacantes() {

    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState('')

    const handleModal = (content: string) => {
        setShowModal(!showModal)
        setModalContent(content)
    }

    useEffect(() => {
        if (showModal) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "unset";
        }
      }, [showModal])

    return(
        <>
            <Seo
                title="Vacantes"
                description="Vacantes page"
                keywords="Vacantes page"
            />
            <div id="initialBanner pb-24">
                <div className='h-screen w-full relative object-contain'>
                    {/* <Image src={FotoSalonIngles} priority className='object-cover w-full h-screen' alt='Foto Salon Ingles' /> */}
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
                {/* <SliderVacantes2 setShowModal={setShowModal} /> */}
                <SliderVacantes setShowModal={setShowModal} />

            </div>

            <BannerRedes />
            <Form />    

            { showModal && <VacanteModal showModal={showModal} setShowModal={setShowModal} /> }
        </>
    )
};
