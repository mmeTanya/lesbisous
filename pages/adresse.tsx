import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Logo from "../components/logo";
import Contacts from "../components/contacts";
import GoUp from '../components/goUp'


const Carte: NextPage = () => {

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
          <Logo/>
          <Contacts/>
          </div>
        </main>
      <GoUp />
    </div>
  )
}

export default Carte
