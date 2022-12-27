import React, { useState } from "react";
import { Form, FormGroup, Label, Input} from "reactstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function SingUp() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //Kayıt işlemi
  const onSingUp = (e) => {
    e.preventDefault();
    console.log(user);
    const model = user;

    //Inputlar boş mu kontrol eder
    if (
      user.name === "" ||
      user.username === "" ||
      user.email === "" ||
      user.phone === "" ||
      user.website === ""
    ) {
      setError("Lütfen tüm alanları doldurunuz!");
      return;
    } else {
      localStorage.setItem("name", user.name);
      localStorage.setItem("username", user.username);
      localStorage.setItem("email", user.email);
      localStorage.setItem("phone", user.phone);
      localStorage.setItem("website", user.website);

      //Fetch ile kayıt yapılır
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(model),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.id != null) {
            alert("Kayıt Başarılı. Giriş sayfasına yönlendiriliyorsunuz.");
            navigate("/");
          } else {
            alert("Lütfen bilgileri kontrol edin!");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container ">
      <div
        className="mx-auto"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="col-md-3 mx-auto">
          <h2>Sing Up </h2>
          <Form className="bg-blue" onSubmit={onSingUp}>
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
              <Label for="exampleEmail">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePhone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Enter phone"
                type="text"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleWebsite">Website</Label>
              <Input
                id="website"
                name="website"
                placeholder="Enter website"
                type="text"
                value={user.website}
                onChange={(e) => setUser({ ...user, website: e.target.value })}
              />
            </FormGroup>
            <Button
              type="submit"
              variant="success"
              onClick={onSingUp} style={{ display: "flex", justifyContent: "end" }}
            >
              Save
            </Button>
          </Form>
          {error !== "" ? (
            <div className="text-danger">{error}</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default SingUp;
