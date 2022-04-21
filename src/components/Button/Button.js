import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import s from './Button.module.scss'

const Button = ({
    title,
    light,
    className,
    onBtnClick
}) => {
    function clickHandler() {
        onBtnClick()
    }

    return (
        <button className={cn(
            s.root,
            className,
            { [s.light]: light }
        )} onClick={clickHandler}>{title}</button>
    )
}

Button.defaultProps = {
    light: false
}
Button.propTypes = {
    title: PropTypes.string,
    light: PropTypes.bool,
    className: PropTypes.string,
    onBtnClick: PropTypes.func
}
export default Button



