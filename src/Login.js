import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";
import { Stack } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import "./style.css";

function Login() {
  const [user, setUser] = useState({ name: "", username: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //Giriş bilgilerini kontrol eder giriş yapar
  const onLogin = (e) => {
    //Inputlar boş mu kontrol eder
    if (user.name === "" || user.username === "") {
      setError("Lütfen tüm alanları doldurunuz!");
      return;
    } else {
      e.preventDefault();
      console.log(user);
      const model = user;
      localStorage.setItem("name", user.name);
      localStorage.setItem("username", user.username);

      //Dogrulama işlemi
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(model),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.id != null) {
            alert("You are logged in.");
            navigate("/home");
          } else {
            alert("Please check your login iformation");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container">
      <div className="itemCenter fullScreen mx-auto ">
        <div className="form col-md-3 mx-auto">
          <AiOutlineUser className="formIcon mx-auto" />
          <Form onSubmit={onLogin}>
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter name"
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleUserName">User Name</Label>
              <Input
                id="username"
                name="username"
                placeholder="Enter user name"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Stack className="end" direction="horizontal" gap="3">
                <Button variant="light">
                  <Link to="/SingUp">Sing Up</Link>
                </Button>
                <Button variant="success" onClick={onLogin}>
                  Login
                </Button>
              </Stack>
            </FormGroup>
          </Form>
          {error !== "" ? <div className="error text-danger">{error}</div> : ""}
        </div>
      </div>
    </div>
  );
}
export default Login;
