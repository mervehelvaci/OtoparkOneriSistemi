import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { Stack } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./style.css";

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
      e.preventDefault();
      console.log(user);
      const model = user;
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
      <div className="itemCenter fullScreen mx-auto">
        <div className="form col-md-3 mx-auto">
          <AiOutlineUserAdd className="formIcon mx-auto" />
          <Form className="bg-blue" onSubmit={onSingUp}>
            <FormGroup>
            <Input
                id="name"
                name="name"
                placeholder="Carpark Name"
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <Input
                id="username"
                name="username"
                placeholder="Carpark Address"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
               <Input
                id="username"
                name="username"
                placeholder="Carpark Country"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <Input
                id="username"
                name="username"
                placeholder="Carpark Empty space"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <Input
                id="username"
                name="username"
                placeholder="Carpark cordinates"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <Input
                id="username"
                name="username"
                placeholder="Carpark cordinates"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Stack className="end" direction="horizontal" gap="3">
                <Button variant="light">
                  <Link to="/">Back</Link>
                </Button>
                <Button variant="success" onClick={onSingUp}>
                  Save
                </Button>
              </Stack>
            </FormGroup>
          </Form>
          {error !== "" ? <div className="text-danger">{error}</div> : ""}
        </div>
      </div>
    </div>
  );
}
export default SingUp;
