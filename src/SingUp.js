import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
//import { Link } from "react-router-dom";

export default class SingUp extends Component {
  state = {
    username: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    hasError: false,
    errorMessage: "",
  };
  onSingUp(e) {
    e.preventDefault();
    console.log(this.state);
    const model = this.state;

    if (
      this.state.name === "" ||
      this.state.username === "" ||
      this.state.email === "" ||
      this.state.phone === "" ||
      this.state.website === ""
    ) {
      this.setState({
        hasError: true,
        errorMessage: "Lütfen tüm alanları doldurunuz!",
      });
      return;
    }
    localStorage.setItem("name", this.state.name);
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("phone", this.state.phone);
    localStorage.setItem("website", this.state.website);

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(model),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  render() {
    //const Error={this.state.errorMessage};
    let registerInfo = "Sing Up";
    return (
      <div>
        {/* props veri aktarımı yapıldı */}
        <h2>{registerInfo.title}</h2>

        <Form onSubmit={this.onSingUp.bind(this)}>
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
            <Label for="exampleEmail">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter email"
              type="email"
              value={this.state.email}
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePhone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Enter phone"
              type="text"
              value={this.state.phone}
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleWebsite">Website</Label>
            <Input
              id="website"
              name="website"
              placeholder="Enter website"
              type="text"
              value={this.state.website}
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <Button type="submit">Save</Button>
          {/* Link ile diğer router a gidilir onClick={() => this.onSubmitHandler}*/}
          {/* <Link to="Home">Submit</Link>  */}
        </Form>
        {this.state.hasError ? this.state.errorMessage : null}
      </div>
    );
  }
}
