import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout'

//  Import style depeding on environment
if (process.env.NODE_ENV === 'production') {
    require('../styles/build.css')
} else {
    require('../styles/index.css')
}


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* <Script /> */}
        
            <Layout> <Component {...pageProps} /> </Layout>
                
            {/* <Script /> */}
        </>
    )
}
