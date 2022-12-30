import FacebookSvg from '../svg/facebook'
import GoogleSvg from '../svg/google'
import InstagramSvg from '../svg/instagram'
import WazeSvg from '../svg/waze'

export default function BannerRedes () {
  return (
    <>
        <div className='grid grid-cols-2 lg:pb-24 pb-12'>
            <div className='lg:py-12 py-6 col-span-2 lg:col-span-1 border-devarana-graph border-r-[.5px] border-t lg:border-b border-b-[1px]'>
                    <p className='text-devarana-graph text-center pb-5 font-playfair lg:text-3xl text-lg'> ¡Síguenos en nuestras redes! </p>
                    <div className='flex justify-center gap-x-20'>
                        <a href="https://www.facebook.com/DevaranaResidences" target={"_blank"} rel="noreferrer">
                            <FacebookSvg className='fill-devarana-pink lg:w-10 lg:h-10 w-8 h-8 hover:opacity-50 transition-all duration-500 ease-in-out'/>
                        </a>
                        <a href="https://www.instagram.com/devarana.mx/" target={"_blank"} rel="noreferrer">
                            <InstagramSvg className='fill-devarana-pink lg:w-10 lg:h-10 w-8 h-8 hover:opacity-50 transition-all duration-500 ease-in-out'/>
                        </a>
                    </div>
            </div>
            <div className='lg:py-12 py-6 col-span-2 lg:col-span-1  border-devarana-graph border-r-[.5px] lg:border-t border-b border-t-border-b-[1px]'>
                <p className='text-devarana-graph text-center pb-5 font-playfair lg:text-3xl text-lg'>¿Cómo llegar a showroom?</p>
                <div className='flex justify-center gap-x-20'>
                    <a href="https://goo.gl/maps/Bp2LANyebxogoSDh7" target={"_blank"} rel="noreferrer">
                        <GoogleSvg className='fill-devarana-pink lg:w-10 lg:h-10 w-8 h-8 hover:opacity-50 transition-all duration-500 ease-in-out'/>
                    </a>
                    <a href="https://ul.waze.com/ul?place=ChIJywNLPDpX04URHZbTxj-wP50&ll=20.67125480%2C-100.33704070&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target={"_blank"} rel="noreferrer">
                        <WazeSvg className='fill-devarana-pink lg:w-10 lg:h-10 w-8 h-8 hover:opacity-50 transition-all duration-500 ease-in-out'/>
                    </a>
                </div>
            </div>
        </div>

    </>
  )
}
