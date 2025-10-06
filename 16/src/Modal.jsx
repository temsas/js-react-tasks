import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class Modal extends React.Component{
    render() {
        const {isOpen, children} =this.props
        const modalClass = isOpen ? 'modal fade show' : 'modal'
        const modalStyle =  isOpen ? 'block' : 'none'
        return (
            <div className={modalClass} style={{ display: modalStyle }} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}
Modal.Header = ({toggle, children}) => {
    return(
    <div className="modal-header">
        <div className="modal-title">{children}</div>
        <button
            type="button"
            className="btn-close"
            onClick={toggle}
            aria-label="Close"
            ></button>
    </div>)
}
Modal.Body = ({ children }) => (
    <div className="modal-body">
        {children}
    </div>
)

Modal.Footer = ({ children }) => (
    <div className="modal-footer">
        {children}
    </div>
)

// END
