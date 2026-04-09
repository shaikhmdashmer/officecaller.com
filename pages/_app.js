import Head from 'next/head';
import Script from 'next/script'
import '@fortawesome/fontawesome-free/css/all.css';
import styles from '../styles/custom.css'
import "@/styles/chatbot.css"
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import '../scripts/custom-scripts.js'
import 'react-phone-input-2/lib/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Bootstrap and Fontawesome */}
        {/* <meta name="google-site-verification" content="hO4YBJ-yt4xuQ1OUXHIyOL31ICyTclixq2NKcmttXHw" /> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        {/* <link href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" /> */}
    
        {/* <script
           dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-M98HDQS');`,
          }}
        /> */}
      </Head>
      <Component {...pageProps} />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous" />
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M98HDQS" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        /> */}
    </>
  )
}

export default MyApp
