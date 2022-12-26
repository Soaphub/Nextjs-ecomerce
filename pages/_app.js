import "../styles/Global.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {

  return (
	<>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>Sneakers</title>
			<link rel="icon" type="image/x-icon" href="./images/favicon-32x32.png"></link>
		</Head>
			<Component {...pageProps} />
	</>
  )
}

export default MyApp
