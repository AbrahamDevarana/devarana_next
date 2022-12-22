import { useEffect, useRef } from 'react'
import FacebookSvg from '../svg/facebook'
import InstagramSvg from '../svg/instagram'



export const SocialSideBar = () => {

   const fbRef = useRef<SVGSVGElement>(null)
   const igRef = useRef<SVGSVGElement>(null)

   useEffect(() => {
        // function updateFillColor() {
        //     const fb = fbRef.current
        //     if(!fb ) return
        //     const rectFb = fb.getBoundingClientRect()
        //     const xFb = rectFb.left
        //     const yFb = rectFb.top
        //     const fbUnderneath = document.elementsFromPoint(xFb, yFb)
        //     if(!fbUnderneath || fbUnderneath.length === 0 ) return
        //     let fbElementBGcolor: Element | null = null
        //     for (const element of fbUnderneath){
        //         const backgroundColor = window.getComputedStyle(element, null).getPropertyValue("background-color");
        //         if (backgroundColor !== "rgba(0, 0, 0, 0)") {
        //             fbElementBGcolor = element;
        //             break;
        //         }
        //     }
          
        //     if (!fbElementBGcolor){
        //         fb.style.fill = '#56739B'
        //         return
        //     }

        //     const bgFb = window.getComputedStyle(fbElementBGcolor, null).getPropertyValue("background-color");
        //     //  Si el fondo no es blanco poner el icono blanco
        //     if (bgFb !== 'rgb(255, 255, 255)' && bgFb !== 'rgba(255, 255, 255, 1)'){
        //         fb.style.fill = '#ffffff'
        //     }             
        // }
        window.addEventListener('scroll', () => updateFillColor(fbRef))
        window.addEventListener('scroll', () => updateFillColor(igRef))
        return () => {
            window.removeEventListener('scroll', () => updateFillColor(fbRef))
            window.removeEventListener('scroll', () => updateFillColor(igRef))
        }
   }, [])

    // useEffect(() => {
    //     function updateFillColor() {
    //         const ig = igRef.current
    //         if(!ig ) return 
    //         const rectIg = ig.getBoundingClientRect()
    //         const xIg = rectIg.right
    //         const yIg = rectIg.bottom
    //         const igUnderneath = document.elementsFromPoint(xIg, yIg)
    //         if(!igUnderneath || igUnderneath.length === 0) return
    //         let igElementBGcolor: Element | null = null
    //         for ( const element of igUnderneath){
    //             const backgroundColor = window.getComputedStyle(element, null).getPropertyValue("background-color");
    //             if (backgroundColor !== "rgba(0, 0, 0, 0)") {
    //                 igElementBGcolor = element;
    //                 break;
    //             }
    //         }            
    //         if (!igElementBGcolor){
    //             ig.style.fill = '#56739B'
    //             return
    //         }
    //         const bgIg = window.getComputedStyle(igElementBGcolor, null).getPropertyValue("background-color");
    //         if (bgIg !== 'rgb(255, 255, 255)' && bgIg !== 'rgba(255, 255, 255, 1)'){
    //             ig.style.fill = '#ffffff'
    //         }
    //     }
    //     window.addEventListener('scroll', updateFillColor)
    //     return () => window.removeEventListener('scroll', updateFillColor)
    // }, [])
     

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
    <div className='flex flex-col fixed right-10 h-screen top-0 justify-center items-center gap-10 z-[999999]'>
        <FacebookSvg ref={fbRef} className='fill-white w-5 h-10' />
        <InstagramSvg ref={igRef} className='fill-white w-8 h-12' />
    </div>
  )
}
