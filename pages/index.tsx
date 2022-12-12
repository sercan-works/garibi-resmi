import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/Slider'
import Header from '../components/Header'
export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>GRB</title>
        <meta name="description" content="Garibi Resmi sayfası" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Header/>
<Slider/>

    </div>
  )
}
