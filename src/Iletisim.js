import React, { useState } from "react";
import { Form, FormGroup, Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { MdMail } from "react-icons/md";
import { FaAddressBook, FaPhoneAlt } from "react-icons/fa";
import "./style.css";

function Iletisim() {
  const [user] = useState({
    email: "mervehelvacii45@gmail.com",
    phone: "+90 500 000 00 00",
    address: "Ankara/Türkiye",
  });
  return (
    <div>
      <div className="itemCenter">
        <Image src="/images/contact.png" alt="Contact image" />
      </div>
      <h2 className="itemCenter">
        İletişime Geç
        <br />
        <br />
      </h2>
      <Form>
        <div class="form-row">
          <Row>
            <Col xs="1">
              <MdMail className="pageIcon" />
            </Col>
            <Col xs="4">
              <p>{user.email}</p>
            </Col>
          </Row>
          <Row>
            <Col xs="1">
              <FaPhoneAlt className="pageIcon" />
            </Col>
            <Col xs="4">
              <p>{user.phone}</p>
            </Col>
          </Row>
          <Row>
            <Col xs="1">
              <FaAddressBook className="pageIcon" />
            </Col>
            <Col xs="4">
              <p>{user.address}</p>
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
}
export default Iletisim;
