import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import GoUp from '../components/goUp'
import Gallery from '@/components/gallery'
import About from '@/components/aboutDishes'


const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Les Bisous</title>
        <meta name="description" content="Les Bisous" />
        <link rel="icon" href="/kisses.png" />
      </Head>
      <main>
        <Header />
        <div className='container'>
          <Hero />
          <Gallery />
          <About />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
      <GoUp />
    </div>
  )
}

export default Home
