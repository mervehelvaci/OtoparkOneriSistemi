import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

function CategoryList() {
  return (
    <div>
      <h2 className="itemCenter">
        <br />
        Menu
      </h2>
      <ListGroup>
        <ListGroupItem>
          <Link to="EmployeeList" >
            User
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="Contact">İletişim</Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
export default CategoryList;
