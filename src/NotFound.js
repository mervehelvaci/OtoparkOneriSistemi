import React, { Component } from "react";
import Image from "react-bootstrap/Image";

export default class NotFound extends Component {
  render() {
    return (
      <div className="itemCenter fullScreen">
        <Image src="/images/error-page.jpg" alt="Not Found" />
      </div>
    );
  }
}
