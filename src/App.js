import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Login from "./Login";
import Home from "./Home";
import ProductList from "./ProductList";
import Iletisim from "./Iletisim";
import SingUp from "./SingUp";

function App() {
  // yorum satırı ctrl+k ctrl+c basarak olur
  return (
    <div className="App">
      {/*Reactstrap install ile indirilip import ile entegre edilir*/}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/home" element={<Home />}>
          {/* <Route path="/categorylist" element={<CategoryList />} /> */}
          <Route path="/home/:productlist" element={<ProductList />} />
          <Route path="/home/:iletisim" element={<Iletisim />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
