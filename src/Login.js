import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ name: "", username: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  //let loginInfo = { title: "Login Page" };

  const onLogin = (e) => {
    e.preventDefault();
    console.log(user);
    const model = user; //this.state;

    if (user.name === "" || user.username === "") {
      setError("Lütfen tüm alanları doldurunuz!");
      return;
    }
    else{
      localStorage.setItem("name", user.name);
      localStorage.setItem("username", user.username);
  
      //Dogrulama işlemi
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(model),
      })
        .then((response) => response.json())
        .then((result) => {
          navigate("/home");
          if (result.id != null) {
            alert("You are logged in.");
            // navigate("/home");
          } else {
            alert("Please check your login iformation");
          }
        })
        .catch((err) => console.log(err));
    }  
  };

  /* const onChangeHandler = (event) => {
    //inputların hangisine yazılıyorsa input içinde gösterir.
    //burada tanımlanan name inputttaki name alanıdır aynı yazılmalı
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };*/

  return (
    <div>
      {/* <h2>{loginInfo.title}</h2> */}
      <h2>Login Page</h2>
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
          <Button type="submit" onClick={onLogin}>
          {/* () => onLogin */}
            Submit
          </Button>
          <Button>
            {/* Link ile diğer route a gidilir */}
            <Link to="/SingUp">Sing Up</Link>
          </Button>
        </FormGroup>
      </Form>
      {error !== "" ? <div className="error">{error}</div> : ""}
      {/* {this.state.hasError ? this.state.errorMessage : null} */}
    </div>
  );
}
export default Login;
