import React from 'react'
import FacebookSvg from '../svg/facebook'
import InstagramSvg from '../svg/instagram'

export const SocialSideBar = () => {
  return (
    <div className='flex flex-col fixed right-10 h-screen top-0 justify-center items-center gap-10 mix-blend-color bg-inherit'>
        {/* Contrast text background */}
        
        <FacebookSvg className='fill-white w-5 h-10' />
        <InstagramSvg className='fill-white w-8 h-12' />
    </div>
  )
}
