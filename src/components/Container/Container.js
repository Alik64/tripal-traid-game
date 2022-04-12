import s from './Container.module.css'
import cn from 'classnames'

export default function Container({ children, className, ...rest }) {
    return (
        <div className={cn(s.root, className)}>
            {children}
        </div>
    )
}
