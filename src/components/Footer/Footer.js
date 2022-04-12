import React from 'react'
import Container from '../Container'
import style from './Footer.module.css'
export default function Footer() {
    return (
        <footer className={style.root}>
            <Container>
                <div className={style.footerWrap}>
                    Coded with
                    <span className={style.heart}></span>
                    by Albert
                </div>
            </Container>
        </footer>

    )
}
