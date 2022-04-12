import s from './Heading.module.css'

export default function Heading({ children }) {



    return (
        <h1 className={s.root}>{children}</h1>
    )
}
