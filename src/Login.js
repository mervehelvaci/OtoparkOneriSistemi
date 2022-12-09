import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default class Login extends Component {
  state = { username: "", name: "", hasError: false, errorMessage: "" };

  onLogin = (e) => {
    // const navigate = useNavigate();
    e.preventDefault();
    console.log(this.state);
    const model = this.state;

    if (this.state.name === "" || this.state.username === "") {
      this.setState({
        hasError: true,
        errorMessage: "Lütfen tüm alanları doldurunuz!",
      });
      return;
    }
    localStorage.setItem("name", this.state.name);
    localStorage.setItem("username", this.state.username);

    //Dogrulama işlemi
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(model),
    })
      .then((response) => response.json())
      .then((result) => {
        // navigate("/home");
        if (result.id != null) {
          alert("You are logged in.");
          // navigate("/home");
        } else {
          alert("Please check your login iformation");
        }
      })
      .catch((err) => console.log(err));
  };

  onChangeHandler = (event) => {
    //inputların hangisine yazılıyorsa input içinde gösterir.
    //burada tanımlanan name inputttaki name alanıdır aynı yazılmalı
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    let loginInfo = { title: "Login Page" };
    return (
      <div>
        <h2>{loginInfo.title}</h2>
        <Form onSubmit={this.onLogin.bind(this)}>
          <FormGroup>
            <Label for="exampleName">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter name"
              type="text"
              value={this.state.name}
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleUserName">User Name</Label>
            <Input
              id="username"
              name="username"
              placeholder="Enter user name"
              type="text"
              value={this.state.username}
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" onClick={() => this.onLogin}>
              Submit
            </Button>
            <Button>
              {/* Link ile diğer route a gidilir */}
              <Link to="/SingUp">Sing Up</Link>
            </Button>
          </FormGroup>
        </Form>
        {this.state.hasError ? this.state.errorMessage : null}
      </div>
    );
  }
}
