import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks:[], input:''}
    }

    handleChange = (event) => {
        const { value } = event.target
        this.setState({ input:value})
    }
    handleRemove = (id) => {
        this.setState((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id)
        }))
    }
    handleAdd = (event) => {
        event.preventDefault()
        const {tasks, input} = this.state
        if (input.trim() === '') {return}
        this.setState({
            tasks: [{ id: uniqueId(), text: input }, ...tasks],
            input: ''
        })
    }

    render() {
        const { tasks, input} = this.state

        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.handleAdd}>
                        <div className="me-3">
                            <input
                                type="text"
                                value={input}
                                required
                                className="form-control"
                                placeholder="I am going..."
                                onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                <div>
                    {tasks.map((task) =>
                        <Item
                            key={task.id}
                            onRemove={() => this.handleRemove(task.id)}
                            task={task.text}
                        />
                    )}
                </div>
            </div>
        );
    }
}
// END
