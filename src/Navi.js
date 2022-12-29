import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { GlobalContext } from "./GlobalState";
function Navi() {
  const navigate = useNavigate();
  const { setSvalue } = useContext(GlobalContext);
  //Çıkış yap
  const logOut = () => {
    localStorage.setItem("name", "");
    localStorage.setItem("username", "");
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <HiUserGroup size="70" color="rgb(221 85 37)" />
        <Navbar.Brand href="/home">
          &nbsp;&nbsp;Kullanıcı Listeleme
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navEnd fullWith">
            <div>
              <Nav.Link
                href="/home"
                onClick={() => {
                  setSvalue(true);
                }}
              >
                Home
              </Nav.Link>
            </div>
            <div className="navEnd">
              <BiUserCircle size="50" color="rgb(221 85 37)" />
              <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" onClick={logOut}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navi;
