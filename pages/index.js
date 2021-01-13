import Head from 'next/head'

import Link from 'next/link'
import styles from '../styles/Home.module.css'

import products from '../products.json'
import { fromImageToUrl, API_URL } from '../utils/urls'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Test Barun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      {products.map(products =>(
        <div key={products.name} className={styles.product}>
          <Link href={`/products/${products.slug}`}>
            <a>
              <div className={styles.product__Row}>
                <div className={styles.product__ColImg}>
                  <img src={fromImageToUrl(products.image)} />
                </div>
                <div className={styles.product__Col}>
                  {products.name} 
                  <div className={styles.price}>
                    Rp. {products.price}
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

