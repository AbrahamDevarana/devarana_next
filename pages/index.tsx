import Image from 'next/image'
import { Form } from '../components/Form'
import { BannerRedes } from '../components/layout/BannerRedes'
import { Seo } from '../components/layout/Seo'

import fachada from '../public/assets/images/home/FachadaDEVARANA.webp'
import credenza from '../public/assets/images/home/Credenza.webp'
import fotoSalon from '../public/assets/images/home/FotoSalonIngles.webp'

export default function Home() {
  return (
    <>
        <Seo
            title="Home"
            description="Home page"
            keywords="Home page"
        />

        <div id="initialBanner">
            <div className='h-screen w-full relative object-contain'>
                <Image src={fachada} className='object-cover w-full' fill alt='Devarana Home' />
            </div>
        </div>
        <div className='grid grid-cols-2'>
            <div className='col-span-1 relative pt-1 pr-0.5'>
                <Image src={credenza} className='object-cover w-full' height={600} width={1000} placeholder="blur" alt="Credenza"/> 
                <div className='absolute bg-devarana-midnight bg-opacity-50 w-full top-1 left-0 bottom-0 right-1'>

                </div>
            </div>
            <div className='col-span-1 relative pt-1 pl-0.5'>
                <Image src={fotoSalon} className='object-cover w-full' height={600} width={1000} placeholder="blur" alt="Salon Ingles"/>
                <div className='absolute bg-devarana-midnight bg-opacity-50 w-full top-1 left-1 bottom-0 right-0'>

                </div>
            </div>
        </div>

        <BannerRedes/>
        <Form/>
    </>
  )
}
