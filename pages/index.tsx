import Head from 'next/head'
import Layout from './components/layout'

const Home = () => {
  return (
    <>
      <Head>
        <title>Vigus Lunch</title>
        <meta name="description" content="Vigus Lunch" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        Hola mundo!
      </Layout>
    </>
  )
}

export default Home;
