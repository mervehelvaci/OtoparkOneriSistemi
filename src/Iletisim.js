import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
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
      <Image src="/images/contact.png" alt="Not Found" className="itemCenter" />
      <h2 className="itemCenter">İletişime Geç<br/></h2>
      <Form>
      <div class="form-row">
      <FormGroup>
          <MdMail className="pageIcon" />
          <p>{user.email}</p>
        </FormGroup>
        <FormGroup>
          <FaPhoneAlt className="pageIcon" />
          <p>{user.phone}</p>
        </FormGroup>
        <FormGroup>
          <FaAddressBook className="pageIcon" />
          <p>{user.address}</p>
        </FormGroup>
        </div>
      </Form>
    </div>
  );
}
export default Iletisim;
