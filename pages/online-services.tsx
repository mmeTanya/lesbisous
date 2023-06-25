import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Clouds from '../components/section'
import OnlineService from '../components/onlineServices'
import Footer from '../components/footer'
import GoUp from '../components/goUp'


const OnlineServices: NextPage = () => {

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
          <OnlineService />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <GoUp />
    </div>
  )
}

export default OnlineServices