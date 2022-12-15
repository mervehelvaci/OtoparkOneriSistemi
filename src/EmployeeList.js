import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import TableCompanent from "./TableCompanent";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  let employeeInfo = { title: "Employee List" };
  const [currentPage, setCurrentPage] = useState(1); //hangi sayfadan baslayacak bunu belirttik
  const [employeesPerPage] = useState(4); //sayfada kaç veri listelenecek onu belirttik

  /*kategorileri doldur */
  useEffect(() => {
    getEmployees();
  },[]);

  /*json ile verileri getirmek*/
  const getEmployees = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
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
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPagesNum = Math.ceil(employees.length / employeesPerPage);
  return (
    <div>
      <h2>{employeeInfo.title}</h2>
      <TableCompanent searchable={true} data={currentEmployees} column={column} />
      <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
    </div>
  );
}
