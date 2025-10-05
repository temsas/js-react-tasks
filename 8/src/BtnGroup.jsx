import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLeftPressed: false, isRightPressed: false}
    }
    handleLeftClick = () => {
        this.setState(() => (
                {
                    isLeftPressed: true,
                    isRightPressed: false
                }
            )
        )
    }
    handleRightClick = () => {
        this.setState(() => (
                {
                    isLeftPressed: false,
                    isRightPressed: true
                }
            )
        )
    }
    render () {
        const leftButtonClasses = cn('btn', 'btn-secondary', 'left', {
            "active": this.state.isLeftPressed
        })
        const rightButtonClasses = cn('btn', 'btn-secondary', 'right', {
            "active": this.state.isRightPressed
        })
        return (
            <div className="btn-group" role="group">
                <button type="button" className={ leftButtonClasses } onClick={this.handleLeftClick}>Left</button>
                <button type="button" className={ rightButtonClasses } onClick={this.handleRightClick}>Right</button>
            </div>
        )
    }
}
// END
