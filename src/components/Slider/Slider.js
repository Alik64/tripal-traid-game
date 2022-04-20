import { useState } from 'react'

import Heading from '../Heading'
import Container from '../Container'

import s from './Slider.module.scss'

import Clock from '../../Clock'
import Button from '../Button/Button'

function Greeting() {
    return (
        <div>
            Hello!
        </div>
    )
}
function Bye() {
    return (
        <div>
            Bye bye!
        </div>
    )
}


const Slider = () => {
    const [isShow, setIsShow] = useState(true)

    const handleClick = () => {
        setIsShow(prev => !prev)
    }


    return (
        <section className={s.section}>
            <div className={s.slider}>
                <Button
                    className={s.button}
                    title='Wow'
                />
                <Container className={s.sliderContent}>
                    <Heading level={1} className={s.header} >
                        This is a header
                    </Heading>
                    <Heading level={2} className={s.header} >
                        Random Title
                    </Heading>
                    <div className={s.call}>
                        <button className={s.button} onClick={handleClick}>Wow</button>
                    </div>

                </Container>
            </div>
        </section >

    )
}

export default Slider