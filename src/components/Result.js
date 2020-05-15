import React, { Component } from "react";

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    return (
      <div>
        <h3>Result History</h3>
        {this.props.result}
      </div>
    );
  }
}
