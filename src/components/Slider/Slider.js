import { useState } from 'react'

import Heading from '../Heading'
import Container from '../Container'

import style from './Slider.module.scss'

import Clock from '../../Clock'

const Slider = () => {
    const [isShow, setIsShow] = useState(true)

    const handleClick = () => {
        setIsShow(prev => !prev)
    }
    return (
        <section className={style.section}>
            <div className={style.slider}>
                <Container className={style.sliderContent}>
                    <Heading level={1} className={style.header} >
                        This is a header
                    </Heading>
                    <Heading level={2} className={style.header} >
                        {isShow && <Clock />}
                    </Heading>
                    <div className={style.call}>
                        <button className={style.button} onClick={handleClick}>Wow</button>
                    </div>

                </Container>
            </div>
        </section >

    )
}

export default Slider