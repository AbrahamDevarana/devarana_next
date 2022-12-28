import { useEffect, useRef } from 'react'
import FacebookSvg from '../svg/facebook'
import InstagramSvg from '../svg/instagram'



export const SocialSideBar = () => {

   const fbRef = useRef<SVGSVGElement>(null)
   const igRef = useRef<SVGSVGElement>(null)

   useEffect(() => {
        window.addEventListener('scroll', () => updateFillColor(fbRef))
        window.addEventListener('scroll', () => updateFillColor(igRef))
        return () => {
            window.removeEventListener('scroll', () => updateFillColor(fbRef))
            window.removeEventListener('scroll', () => updateFillColor(igRef))
        }
   }, [])


     

    const updateFillColor = (svgRef: any) => {
        const svg = svgRef.current
        if(!svg ) return
        const rect = svg.getBoundingClientRect()
        const x = rect.left
        const y = rect.top
        const underneath = document.elementsFromPoint(x, y)
        if(!underneath || underneath.length === 0) return
        let elementBGcolor: Element | null = null
        for ( const element of underneath){
            const backgroundColor = window.getComputedStyle(element, null).getPropertyValue("background-color");
            if (backgroundColor !== "rgba(0, 0, 0, 0)") {
                elementBGcolor = element;
                break;
            }
        }
        if (!elementBGcolor){
            svg.style.fill = '#56739B'
            return
        }
        const bg = window.getComputedStyle(elementBGcolor, null).getPropertyValue("background-color");
        
        if (bg !== 'rgb(255, 255, 255)' && bg !== 'rgb(229, 229, 229)' &&  bg !== 'rgb(234, 223, 212)'){
            svg.style.fill = '#ffffff'
        }else{
            svg.style.fill = '#56739B'
        }
    }



  return (
    <div className='flex-col fixed right-10 h-screen top-0 justify-center items-center gap-10 z-[999999] lg:flex hidden'>
        <a href="https://www.facebook.com/DevaranaResidences" target={"_blank"} rel="noreferrer">
            <FacebookSvg ref={fbRef} className='fill-white w-5 h-10 hover:opacity-50 transition-all duration-500 ease-in-out' />
        </a>
        <a href="https://www.instagram.com/devarana.mx/" target={"_blank"} rel="noreferrer">
            <InstagramSvg ref={igRef} className='fill-white w-8 h-12 hover:opacity-50 transition-all duration-500 ease-in-out' />
        </a>
    </div>
  )
}
