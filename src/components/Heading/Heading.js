import s from './Heading.module.css'

export default function Heading({ title }) {


    return (
        <h1 className={s.root}>{title} !</h1>
    )
}
