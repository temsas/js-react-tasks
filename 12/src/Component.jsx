import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = { log: [] }
    }

    handlePlus = () => {
        const { log } = this.state
        const newestValue = log.length > 0 ? log[0] : 0
        const newValue = newestValue + 1
        this.setState({ log: [newValue, ...log] })
    }
    handleMinus = () => {
        const { log } = this.state
        const newestValue = log.length > 0 ? log[0] : 0
        const newValue = newestValue - 1
        this.setState({ log: [newValue, ...log] })
    }
    handleRemove = (index) => {
        this.setState((state) => {
            const newLog = [...state.log]
            newLog.splice(index, 1)
            return { log: newLog }
        })
    }

    render() {
        const { log } = this.state

        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button
                        type="button"
                        className="btn btn-outline-success"
                        onClick={this.handlePlus}
                    >
                        +
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.handleMinus}
                    >
                        -
                    </button>
                </div>

                {log.length > 0 && (
                    <div className="list-group">
                        {log.map((value, index) => (
                            <button
                                key={index}
                                type="button"
                                className="list-group-item list-group-item-action"
                                onClick={() => this.handleRemove(index)}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        )
    }
}
// END
