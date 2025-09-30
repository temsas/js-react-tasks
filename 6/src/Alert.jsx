import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class Alert extends React.Component{
    render() {
        const {text, type} = this.props
        const textClass = cn("alert",{
            "alert-primary": type==="primary",
            "alert-secondary": type==="secondary",
            "alert-success": type==="success",
            "alert-danger": type==="danger",
            "alert-warning": type==="warning",
            "alert-info": type==="info",
            "alert-light": type==="light",
            "alert-dark": type==="dark"
            });
        return(
            <div className={textClass} role="alert">{text}</div>
        )
    }
}
// END
