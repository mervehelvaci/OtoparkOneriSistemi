import React, { useContext } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import { Col, Container, Row } from "reactstrap";
import { Outlet } from "react-router-dom";
import HomeContact from "./HomeContact";
import { GlobalContext } from "./GlobalState";

function Home() {
  const { svalue } = useContext(GlobalContext);
  return (
    <div>
      {/*Reactstrap install ile indirilip import ile entegre edilir*/}
<Container>
      <Navi />
      <Row>
        <Col xs="3">
          <CategoryList />
        </Col>
        <Col xs="9">
          {svalue === true ? <HomeContact /> : <Outlet />}
          {/* <HomeContact />
            <Outlet /> */}
        </Col>
      </Row></Container>
    </div>
  );
}
export default Home;
