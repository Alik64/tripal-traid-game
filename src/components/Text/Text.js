import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import s from './Text.module.css'


export default function Text({
    element,
    children,
    className,
    strong,
    italic,
    disabled
}) {
    return React.createElement(element, {
        className: cn(s.root, className, { [s.strong]: strong }, { [s.italic]: italic }, { [s.disabled]: disabled }),

    }, children)
}
Text.propTypes = {
    element: PropTypes.oneOf(["div", "p", "span"]).isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
    disabled: PropTypes.bool
}