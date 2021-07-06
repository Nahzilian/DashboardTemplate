import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/theme.scss'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
