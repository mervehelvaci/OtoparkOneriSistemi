import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
//import Iletisim from "./Iletisim";
//import ProductList from "./ProductList";

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <ListGroup>
          <ListGroupItem>
            <Link to="ProductList">User</Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to="Iletisim">İletişim</Link>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
