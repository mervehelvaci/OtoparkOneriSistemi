import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <ListGroup>
          <ListGroupItem>
            <Link to="EmployeeList">User</Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to="Iletisim">İletişim</Link>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
