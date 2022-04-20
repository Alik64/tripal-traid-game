import { useState } from 'react'

import Heading from '../Heading'
import Container from '../Container'

import style from './Slider.module.scss'

import Clock from '../../Clock'

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

    // let Component;

    // if (isShow) {
    //     Component = Greeting
    // } else {
    //     Component = Bye
    // }

    // if (!isShow) {
    //     return <Greeting />
    // }
    switch (!isShow) {
        case true:
            return <Greeting />
        case false:
            return (
                <section className={style.section}>
                    <div className={style.slider}>
                        <Container className={style.sliderContent}>
                            <Heading level={1} className={style.header} >
                                This is a header
                            </Heading>
                            <Heading level={2} className={style.header} >
                                {/* {
                                    isShow ? <Greeting /> : <Bye />
                                }
                                {
                                    isShow && <Greeting />
                                } */}

                            </Heading>
                            <div className={style.call}>
                                <button className={style.button} onClick={handleClick}>Wow</button>
                            </div>

                        </Container>
                    </div>
                </section >

            )
        default:
            break;
    }
    return (
        <section className={style.section}>
            <div className={style.slider}>
                <Container className={style.sliderContent}>
                    <Heading level={1} className={style.header} >
                        This is a header
                    </Heading>
                    <Heading level={2} className={style.header} >
                        {/* {
                            isShow ? <Greeting /> : <Bye />
                        }
                        {
                            isShow && <Greeting />
                        } */}

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