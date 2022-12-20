import Image from "next/image";
import FotoSalonIngles from "../public/assets/images/home/FotoSalonIngles.webp";
import { SliderVacantes } from "../components/vacantes/SliderVacantes";
import { BannerRedes } from "../components/layout/BannerRedes";
import { Form } from "../components/Form";

export default function Vacantes() {
    return(
        <>
            <div id="initialBanner pb-24">
                <div className='h-screen w-full relative object-contain'>
                    <Image src={FotoSalonIngles} className='object-cover w-full' fill alt='FotoSalonIngles' />
                    <div className='bg-devarana-midnight bg-opacity-60 absolute w-full top-0 bottom-0'>
                        <div className="relative flex justify-center items-center h-full"> 
                            <h1 className="text-white text-4xl tracking-wide font-playfair text-center">Somos creadores, arquitectos y <br className="hidden lg:block" /> diseñadores de lo extraordinario.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-24">
                <h2 className="text-devarana-graph-darker text-center font-playfair text-4xl">¡Sé parte de DEVARANA</h2>
                <hr className="border-devarana-pink max-w-[270px] w-full mx-auto mt-9 mb-24"/>
                <SliderVacantes />
            </div>

            <BannerRedes />
            <Form />    
        </>
    )
};