import React,{ useState,useEffect }from "react";
import { Table } from "reactstrap";
import Pagination from "./Pagination";


export default function ProductList() {
  const [products, setProducts] = useState([]);
  let productInfo = { title: "Product List" };
  /*kategorileri doldur */
  useEffect(() => {
    getProducts();
  });

  /*json ile verileri getirmek*/
  const getProducts = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const column = [
    { heading: "#", value: "id" },
    { heading: "Name", value: "name" },
    { heading: "User Name", value: "username" },
    { heading: "Email", value: "email" },
    { heading: "City", value: "address.city" },
  ];
  return (
    <div>
      <h2>{productInfo.title}</h2>
      <Table data={products} column={column} />
      <Pagination />
    </div>
  );
}

