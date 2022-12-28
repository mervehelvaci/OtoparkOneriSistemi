import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import { Col, Container, Row } from "reactstrap";
import { Outlet } from "react-router-dom";
import Image from "react-bootstrap/Image";
import "./style.css";

export default class Home extends Component {
  state = {
    currentCategory: "" /*mevcut kategori*/,
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
              <div className="container">
                <Image
                  src="/images/people.jpg"
                  alt="Not Found"
                  className="itemCenter"
                />
                <h2 className="itemCenter">Home</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis pariatur ratione magnam eos cumque laborum, totam ipsum
                  quae possimus, assumenda nam nisi doloribus unde accusantium!
                  Vel sed ipsum laborum beatae! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Obcaecati dolore ex voluptatum
                  modi molestiae dolor voluptatem rem unde omnis aut ipsum
                  impedit reiciendis officiis optio incidunt, quam quod
                  explicabo itaque.
                </p>
              </div>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
