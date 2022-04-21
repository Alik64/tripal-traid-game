import React, { useEffect, useState } from 'react'

import Container from '../Container'
import s from './Header.module.scss'
import cn from 'classnames'
import logoPng from '../../assets/triple.png'


export default function Header() {
    const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4']
    const [classNameCond, setClassNameCond] = useState()

    useEffect(() => {
        function detectScrollY() {
            window.scrollY > 60 ? setClassNameCond(s.small) : setClassNameCond(null)
        }

        window.addEventListener('scroll', detectScrollY)

        return () => window.removeEventListener('scroll', detectScrollY)
    }, [])



    return (
        <header className={s.root}>

            <Container className={s.headerWrap} >
                <div className={cn(s.header, classNameCond)} >
                    <div className={s.logo}>
                        <img src={logoPng} alt="logo" />
                    </div>
                    <ul className={s.nav}> {MENU.map((item, index) => (
                        <li key={index}><a href="#">{item}</a></li>
                    ))}
                    </ul>
                </div>
            </Container>


        </header>
    )
}
