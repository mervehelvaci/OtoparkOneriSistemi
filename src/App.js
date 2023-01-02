import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Login from "./Login";
import Home from "./Home";
import HomeContact from "./HomeContact";
import EmployeeList from "./EmployeeList";
import Contact from "./Contact";
import SingUp from "./SingUp";
import { GlobalProvider } from "./GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        {/*Reactstrap install ile indirilip import ile entegre edilir*/}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/home" element={<Home />}>
            <Route path="/home/HomeContact" element={<HomeContact />} />
            <Route path="/home/EmployeeList" element={<EmployeeList />} />
            <Route path="/home/Contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalProvider>
    </div>
  );
}
export default App;
