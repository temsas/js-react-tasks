import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [], newTask: '' }
    }
    componentDidMount() {
        this.loadTasks()
    }
    loadTasks = async () => {
        try {
            const res = await axios.get('/api/tasks')
            const sortedTasks = res.data.sort((a, b) => b.id - a.id)
            this.setState({ tasks: sortedTasks })
        } catch (error) {
            console.error("error", error);
        }
    }
    handleChange = (event) => {
        this.setState({ newTask: event.target.value })
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const { tasks, newTask } = this.state
        if (newTask.trim() === '') {return}
        try {
            const res = await axios.post('/api/tasks', { text: newTask });
            this.setState({ tasks: [res.data, ...tasks], newTask: "" });
        } catch (error) {
            console.error("error", error);
        }
    }
    handleToggle = async (task) => {
        try {
            const url = task.state === 'active'
                ? `/api/tasks/${task.id}/finish`
                : `/api/tasks/${task.id}/activate`
            const res = await axios.patch(url);
            this.setState((state) => ({tasks: state.tasks.map(t => t.id === task.id ? res.data : t)}))
        } catch (error) {
            console.error("error", error)
        }
    }

    render() {
        const { tasks, newTask } = this.state

        const activeTasks = tasks.filter(task => task.state === 'active')
        const finishedTasks = tasks.filter(task => task.state === 'finished')

        return (
            <div>
                <div className="mb-3">
                    <form className="todo-form mx-3" onSubmit={this.handleSubmit}>
                        <div className="d-flex col-md-3">
                            <input
                                type="text"
                                value={newTask}
                                required
                                className="form-control me-3"
                                placeholder="I am going..."
                                onChange={this.handleChange}
                            />
                            <button type="submit" className="btn btn-primary">add</button>
                        </div>
                    </form>
                </div>

                {activeTasks.length > 0 && (
                    <div className="todo-active-tasks">
                        {activeTasks.map(task => (
                            <Item
                                key={task.id}
                                task={task}
                                onToggle={() => this.handleToggle(task)}
                            />
                        ))}
                    </div>
                )}

                {finishedTasks.length > 0 && (
                    <div className="todo-finished-tasks">
                        {finishedTasks.map(task => (
                            <Item
                                key={task.id}
                                task={task}
                                onToggle={() => this.handleToggle(task)}
                            />
                        ))}
                    </div>
                )}
            </div>
        )
    }
}
// END
