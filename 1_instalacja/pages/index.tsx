import Layout from '../components/Layout'
import Head from 'next/head';
import { NextRouter, useRouter } from 'next/dist/client/router';
import Link from 'next/link'

const IndexPage : React.FC = () : JSX.Element => {
  const router : NextRouter = useRouter();

  console.log("Router", router);

  return (
  <Layout title="Home | Next.js + TypeScript Example">
    <Head>
      {/* <title>Cośtam</title> */}
    </Head>
    <Link href="/kontakt">
      <a>Kontakt</a>
    </Link>
    <img src="/kasia.jpg" />
  </Layout>
  )
  }

export default IndexPage
