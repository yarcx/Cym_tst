import Head from 'next/head'
import Home from "../components/Home";

export default function index() {
  return (
    <div >
      <Head>
        <title>Cyhermes Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
     </div>
  )
}
