import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import TableCompanent from "./TableCompanent";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  let productInfo = { title: "Product List" };
  const [currentPage, setCurrentPage] = useState(1); //hangi sayfadan baslayacak bunu belirttik
  const [employeesPerPage] = useState(4); //sayfada kaç veri listelenecek onu belirttik

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

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = products.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPagesNum = Math.ceil(products.length / employeesPerPage);
  return (
    <div>
      <h2>{productInfo.title}</h2>
      <TableCompanent data={currentEmployees} column={column} />
      <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
    </div>
  );
}
