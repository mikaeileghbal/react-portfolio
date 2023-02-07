import nProgress from "nprogress";
import React, { Component } from "react";

export default class Fancy extends Component {
  componentWillMount() {
    nProgress.start();
  }

  componentDidMount() {
    nProgress.done();
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
