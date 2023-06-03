import Head from "next/head"
export default function head() {
  return (
    <>
    <Head>
        <title>
            GenzaiXd - Portfolio
        </title>
        <meta name="description" content="GenzaiXd is a Full Stack Web Developer" key="desc" />
        <meta property="og:title" content="GenzaiXd" />
        <meta
          property="og:description"
          content="Who is GenzaiXd"
        />
        <meta
          property="og:image"
          content="https://telegra.ph/file/881884ae636e4ba437a5a.jpg"
        />
        <link rel="icon" type="image/x-icon" href="favicon.png"></link>
    </Head>
      
    </>
  )
}
