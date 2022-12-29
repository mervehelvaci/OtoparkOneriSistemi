import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import { Col, Container, Row } from "reactstrap";
import { Outlet } from "react-router-dom";
import HomeContact from "./HomeContact";

export default class Home extends Component {
  state = {
    currentCategory: "" /*mevcut kategori*/,
  };

  render() {
    /*props örnek. Propslar companentler arası aktarılabilir*/
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
              />
            </Col>
            <Col xs="9">
              <HomeContact />
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
