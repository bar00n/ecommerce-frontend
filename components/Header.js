import Link from 'next/link'
import { useRouter } from 'next/router'
import style from '../styles/Header.module.css'

export default () => {

    const router = useRouter()
    const isHome = router.pathname === '/'

    const goBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return(
        <div className={style.nav}>
            {!isHome && 
                <div className={style.back}>
                    <a onClick={goBack}>{"<"} Back </a>
                </div>
            }        
                    
            <div clasName={style.title}>
                <Link href='/'>
                    <a>
                        <h1>
                            CATALOG.
                        </h1>
                    </a>
                </Link>

            </div>

        </div>
    )  
}