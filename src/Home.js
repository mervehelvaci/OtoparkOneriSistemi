import React, { Component } from "react";
//import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import { Col, Container, Row } from "reactstrap";
import { Outlet } from "react-router-dom";

export default class Home extends Component {
  state = {
    currentCategory: "" /*mevcut kategori*/,
    products: [],
  };

  render() {
    /*props örnek. Propslar companentler arası aktarılabilir*/
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        {/*Reactstrap install ile indirilip import ile entegre edilir*/}
        <Container>
          <Navi />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
