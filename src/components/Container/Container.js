import s from './Container.module.css'

export default function Container({ children, className, ...rest }) {
    return (
        <div className={s.root + ' ' + className}>
            {children}
        </div>
    )
}
