import style from './Slider.module.css'
import logoPng from '../../assets/Triple.png'
import { ReactComponent as Logo } from '../../assets/logo.svg'

export default function Slider() {
    return (
        <section className={style.section}>
            <div className={style.slider}>
                <div className={`${style.container} ${style.sliderContent}`}>
                    <h1 className={style.header}>Wow</h1>
                    <h2 className={style.subheader}>Wow.Wow.Wow</h2>
                    <div className={style.image}>

                        <Logo />
                    </div>

                    <div className={style.call}>
                        <button className={style.button}>Wow</button>
                    </div>
                </div>
            </div>
        </section >

    )
}
