import React from 'react';

// BEGIN (write your solution here)
export default class Card extends React.Component {
    render() {
        const {title} = this.props
        const {text} = this.props
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{text}</p>
                </div>
            </div>

        )
    }
}
Card.defaultProps ={
    text: "text",
    title: "title",
}

// END
