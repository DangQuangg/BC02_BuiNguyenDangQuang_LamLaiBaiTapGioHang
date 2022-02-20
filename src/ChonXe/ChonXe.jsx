import React, { Component } from "react";

export default class extends Component {
  state = {
    carOption: "./img/imgRedCar.jpg",
  };
  handleCarOption = (option) => {
    this.setState({
      carOption: option,
    });
  };
  render() {
    return (
      <div>
        <img src={this.state.carOption} alt="" />
        <button
          onClick={() => {
            this.handleCarOption("./img/imgRedCar.jpg");
          }}
          className="btn btn-danger"
        >
          Red Car
        </button>
        <button
          onClick={() => {
            this.handleCarOption("./img/imgSilverCar.jpg");
          }}
          className="btn btn-secondary"
        >
          Silver Car
        </button>
        <button
          onClick={() => {
            this.handleCarOption("./img/imgBlackCar.jpg");
          }}
          className="btn btn-dark"
        >
          Black Car
        </button>
      </div>
    );
  }
}
