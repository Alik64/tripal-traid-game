import { useState } from 'react'

import Heading from '../Heading'
import Container from '../Container'

import style from './Slider.module.scss'

import logoPng from '../../assets/triple.png'

const Slider = () => {

    const [value, setValue] = useState(1)
    const handleClick = () => {
        setValue(prev => prev + 1)
    }
    return (
        <section className={style.section}>
            <div className={style.slider}>
                <Container className={style.sliderContent}>
                    <Heading level={1} className={style.header} >
                        This is a header
                    </Heading>
                    <Heading level={2} className={style.header} >
                        {value}
                    </Heading>

                    {/* <div className={style.image} >
                        <img src={logoPng} alt="Logo" />
                    </div> */}

                    <div className={style.call}>
                        <button className={style.button} onClick={handleClick}>Wow</button>
                    </div>

                </Container>
            </div>
        </section >

    )
}

export default Slider