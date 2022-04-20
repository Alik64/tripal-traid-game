import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import s from './Button.module.scss'

const Button = ({
    title,
    light,
    className,
}) => {
    return (
        <button className={cn(
            s.root,
            className,
            { [s.light]: light }
        )}>{title}</button>
    )
}

Button.defaultProps = {
    light: false
}
Button.propTypes = {
    title: PropTypes.string,
    light: PropTypes.bool,
    className: PropTypes.string,
}
export default Button



