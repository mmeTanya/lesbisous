import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Clouds from '../components/section'
import GoUp from '../components/goUp'
import AboutParish from '../components/aboutParish'
import AboutArchpriest from '../components/about'
import Footer from '../components/footer'

const Parish: NextPage = () => {

  return (
    <div className='overlay' >
      <Clouds />
      <Head>
      <title>Свято-Вознесенська парафія</title>
        <meta name="description" content="Свято-Вознесенська парафія, Українська православна церква Київського Патріархату" />
        <link rel="icon" href="/Ukrainian_Orthodox_Church_emblem.png" />
      </Head>
      <div className='container'>
        <main>
        <Header />
          <AboutParish />
          <AboutArchpriest />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <GoUp />
    </div>
  )
}

export default Parish
