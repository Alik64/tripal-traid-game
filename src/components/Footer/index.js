import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
    return (
        <footer className={style.root}>
            <div className={style.container}>
                <div className={style.footerWrap}>
                    Coded with
                    <span className={style.heart}></span>
                    by Albert
                </div>
            </div>
        </footer>

    )
}
