import React from 'react';

// BEGIN (write your solution here)

export default function Item({ task, onToggle }) {
    const content = (
        <a href="#" className="todo-task" onClick={onToggle}>{task.text}</a>
    )
    return (
        <div className="row">
            <div className="col-1">{task.id}</div>
            <div className="col">
                {task.state === 'finished' ? <s>{content}</s> : content}
            </div>
        </div>
    )
}
// END
