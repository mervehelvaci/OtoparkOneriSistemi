import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ name: "", username: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //Giriş bilgilerini kontrol eder giriş yapar
  const onLogin = (e) => {
    e.preventDefault();
    console.log(user);
    const model = user;

    //Inputlar boş mu kontrol eder
    if (user.name === "" || user.username === "") {
      setError("Lütfen tüm alanları doldurunuz!");
      return;
    } else {
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
    <div class="container ">
      <div class="row height:100vh">
        <div class="col-md-3 mx-auto">
          <h2 class="text-justify">Login</h2>
          <Form class="bg-blue"onSubmit={onLogin}>
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
              <Button type="submit"  class="btn btn-primary" onClick={onLogin}>
                Login
              </Button>
              <Button class="btn btn-secondary">
                <Link to="/SingUp">Sing Up</Link>
              </Button>
            </FormGroup>
          </Form>
          {error !== "" ? <div className="error text-danger">{error}</div> : ""}
        </div>
      </div>
    </div>
  );
}
export default Login;
