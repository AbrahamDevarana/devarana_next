import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useState } from 'react'
import { HeadBanner } from './HeadBanner'
import { Menu } from './Menu'


const Footer = dynamic(() => import('./Footer'), { ssr: false })
const SocialSideBar = dynamic(() => import('./SocialSideBar'), { ssr: false })

interface Props {
    children: React.ReactNode
}

export const Layout = ({children}: Props) => {

  const [menu , setMenu] = useState(false)
  return (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <meta name="author" content="Devarana.mx"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/assets/favicon/site.webmanifest"/>
            <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#56739b"/>
            <meta name="msapplication-TileColor" content="#f9f9f7"/>
            <meta name="theme-color" content="#f9f9f7"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <HeadBanner />
        <Menu />
            <main>{children}</main>
            <SocialSideBar />
        <Footer/>
    </>
  )
}
