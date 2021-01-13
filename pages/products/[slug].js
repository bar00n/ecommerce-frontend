import Head from 'next/head'
import { fromImageToUrl, API_URL } from '../../utils/urls'
import styles from '../../styles/Slug.module.css'



const Product = ({product}) => {
    return (
        <div>
            <Head>
                {   
                    product.meta_title &&
                    <title>{product.meta_title}</title>
                }
                {
                    product.meta_description &&
                    <meta name='description' content={product.meta_description}/>
                }
            </Head>
            <h3 className={styles.title_slug}>
                {product.name}
            </h3>
            <div className={styles.slug}>
              <div>
                <img src={fromImageToUrl(product.image)} className={styles.img_big}/>
              </div>
              <div className={styles.desc}>
                <h3>
                    {product.name}
                </h3>
                <p>
                    Rp. {product.price}
                </p>

                <p>
                    {product.content}
                </p>  
              </div>
            </div>
        </div>
    )
}

export async function getStaticProps({ params: {slug} }) {
    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`)
    const found = await product_res.json()
  
    return {
      props: {
        product: found[0  ]
      }
    }
  }
  
  
  export async function getStaticPaths() {
  
    const products_res = await fetch(`${API_URL}/products/`) 
    const products = await products_res.json()
  
    return {
      paths: products.map(product => ({
        params : { slug: String(product.slug) }
      })),
      fallback : false
    }
  }

export default Product