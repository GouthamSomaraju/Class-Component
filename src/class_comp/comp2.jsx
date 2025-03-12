import React from "react";
import "./SecondComp.css";

class SecondComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.n,
    };
  }
  handleDecrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      alert("counter cannot be negative");
    }
  };
  render() {
    return (
      <div className="container">
        <h1>{this.state.counter}</h1>
        <div>
        <button
          className="increment"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          increment
        </button>
        <button className="decrement" onClick={this.handleDecrement}>
          Decrement
        </button>
        </div>
      </div>
    );
  }
}

export default SecondComp;
