import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import TableCompanent from "./TableCompanent";

export default function EmployeeList() {
  let employeeInfo = { title: "Employee List" };
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); //hangi sayfadan baslayacak bunu belirttik
  const [employeesPerPage] = useState(6); //sayfada kaç veri listelenecek onu belirttik

  /*kategorileri doldur */
  useEffect(() => {
    getEmployees();
  }, []);

  /*json ile verileri getirmek*/
  const getEmployees = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  };

  //Tabloya gönderilen Heading
  const column = [
    { heading: "id", value: "id" },
    { heading: "Name", value: "name" },
    { heading: "User Name", value: "username" },
    { heading: "Email", value: "email" },
    { heading: "City", value: "address.city" },
  ];

  //Her sayfada gösterilece kişileri bölerek ayırdık
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  //Toplam sayfa sayısını belirledik
  const totalPagesNum = Math.ceil(employees.length / employeesPerPage);
  return (
    <div>
      <h2 className="itemCenter">
        <br />
        {employeeInfo.title}
      </h2>
      <TableCompanent
        searchable={true}
        data={currentEmployees}
        column={column}
      />
      <Pagination
        pages={totalPagesNum}
        setCurrentPage={setCurrentPage}
        perPage={employeesPerPage}
      />
    </div>
  );
}
