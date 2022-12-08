import Image from 'next/image'
import { Form } from '../components/Form'
import { BannerRedes } from '../components/layout/BannerRedes'
import { Seo } from '../components/layout/Seo'

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
                <Image src="/assets/images/home/FachadaDEVARANA.webp" className='object-cover w-full' fill alt='Devarana Home' />
            </div>
        </div>
        <div className='grid grid-cols-2'>
            <div className='col-span-1'>
                <Image /> 
            </div>
            <div className='col-span-1'>
                <Image />
            </div>
        </div>

        <BannerRedes/>
        <Form/>
    </>
  )
}
