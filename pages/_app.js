import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <content>
      <Header />
      <Component {...pageProps} />
      <hr/>
      <Footer />
    </content>
  )
}

export default MyApp
