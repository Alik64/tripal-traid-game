import React from 'react'

import Container from '../Container'
import style from './Header.module.css'

import logoPng from '../../assets/triple.png'


export default function Header() {
    const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4']
    return (
        <header className={style.root}>
            <div className={style.header} >
                <Container className={style.header}>
                    <div className={style.logo}>
                        <img src={logoPng} alt="logo" />
                    </div>
                    <ul className={style.nav}> {MENU.map((item, index) => (
                        <li key={index}><a href="#">{item}</a></li>
                    ))}
                    </ul>
                </Container>

            </div>
        </header>
    )
}
