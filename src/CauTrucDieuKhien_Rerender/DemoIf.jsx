import React, { Component } from "react";

export default class DemoIf extends Component {
  state = {
    isLogin: false,
    userName: "",
  };
  login = () => {
    this.setState({
      isLogin: true,
      userName: "Quang",
    });
  };
  logout = () => {
    this.setState({
      isLogin: false,
      userName: "",
    });
  };

  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <div>
            Hello {this.state.userName} !
            <button onClick={this.logout}>Log Out</button>
          </div>
        ) : (
          <button onClick={this.login}>Log In</button>
        )}
      </div>
    );
  }
}
