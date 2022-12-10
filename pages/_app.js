import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-indigo-900 via-neutral-800 to-neutral-900">
      <Head>
        <title>Plex Rewind</title>
        <meta name="description" content="Plex Rewind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex items-center justify-center min-h-screen">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp