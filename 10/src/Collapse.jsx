import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Collapse extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isOpen: this.props.opened}
    }
    handleClick= () =>{
        const {isOpen} = this.state
        this.setState({isOpen:!isOpen})
    }
    render() {
        const {text} = this.props
        const{isOpen} = this.state
        const divClass = cn("collapse",{show:isOpen})
        return (
            <div>
                <p>
                    <a
                        className="btn btn-primary"
                        data-bs-toggle="collapse"
                        href="#"
                        role="button"
                        aria-expanded={isOpen ? "true" : "false"}
                        onClick={this.handleClick}
                    >Link with href</a
                    >
                </p>
                <div className={divClass}>
                    <div className="card card-body">{text}</div>
                </div>
            </div>
        )
    }
}
Collapse.defaultProps = {opened: true}
// END
