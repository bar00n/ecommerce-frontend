import style from '../styles/Slider.module.css'

export default () => {
    return(
       <div>
           <img src='/slide.jpg' className={style.slider} />
           <div className={style.slogan}>
            <h1 className={style.h1}>Welcome to the Everyday Epic!</h1>
            <h1 className={style.h}>Choose Your Product</h1>
           </div>
           <img src='/slide2.jpg' className={style.slider2} />
       </div>
    )  
}