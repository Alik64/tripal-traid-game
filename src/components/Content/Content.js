import React from 'react'
import Container from '../Container'
import Text from '../Text/Text'
import style from './Content.module.css'

export default function Content() {

    return (
        <div className={style.root}>

            <Container>
                <Text element='p' italic strong disabled className={style.text}>
                    Homework is done :)
                </Text>
            </Container>

        </div >
    )
}
