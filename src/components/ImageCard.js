import React from "react";
import "./ImageCard.css";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    //using ref for referncing dom elemet
    this.imageRef = React.createRef();
  }

  //this below works after the thing is rendered
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans1 = Math.ceil(height / 10);
    this.setState({ spans: spans1 });
  };

  render() {
    return (
      <div
        className="ImageCard"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <img
          ref={this.imageRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}
export default ImageCard;
