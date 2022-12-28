import React, { Component } from "react";
import Image from "react-bootstrap/Image";

export default class NotFound extends Component {
  render() {
    return (
      <div style={{ display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
        }}>
        <Image src="/images/error-page.jpg" alt="Not Found" />
      </div>
    );
  }
}
