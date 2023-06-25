import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Clouds from '../components/section'
import Donation from '../components/donation'
import Footer from '../components/footer'
import GoUp from '../components/goUp'


const Donate: NextPage = () => {

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
          <Donation />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <GoUp />
    </div>
  )
}

export default Donate
