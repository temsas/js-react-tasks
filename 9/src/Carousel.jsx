import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeImage: 0}
    }
    handleNext = () => {
        const { images } = this.props
        const { activeImage } = this.state
        this.setState({
            activeImage: activeImage === images.length - 1 ? 0 : activeImage + 1})
    }
    handlePrev = () => {
        const { images } = this.props
        const { activeImage } = this.state
        this.setState({
            activeImage: activeImage === 0 ? images.length - 1 : activeImage - 1})
    }

    render() {
        const { images } = this.props
        const { activeImage } = this.state
        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={index === activeImage ? "carousel-item active" : "carousel-item"}
                        >
                            <img alt="" className="d-block w-100" src={image} />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="prev"
                    onClick={this.handlePrev}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="next"
                    onClick={this.handleNext}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}
// END
