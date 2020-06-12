import Head from 'next/head'
import Link from 'next/link'

export const getServerSideProps = (context) => {
  console.log('product page, is req defined?:', context.req ? true : false)
  return { props: {} }
}

export default function Product() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <a>product</a>
      </Link>
    </div>
  )
}
