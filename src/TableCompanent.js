import React from "react";
import { useState, useEffect } from "react";
import { Table, Input } from "reactstrap";
import {
  AiOutlineSortAscending,
  // AiOutlineSortDescending,
} from "react-icons/ai";

const TableCompanent = ({ data, column, searchable }) => {
  const [search, setSearch] = useState("");
  const [tempData, setTempdata] = useState([]);
  const [order, setOrder] = useState("ASC");

  //Props gelen değer useStatete direk kullanılmaz. UseEffect sayesinde gelen verileri alırız.
  useEffect(() => {
    setTempdata(data);
  }, [data]);

  //Tabloda Search işlemini yapar. Name ve UserName alanlarında yapar
  const onFilterData = (e) => {
    if (e.target.value !== "") {
      setSearch(e.target.value);
      const filterTable = data.filter(
        (item) =>
          item.name.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
          item.username.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setTempdata(filterTable);
    } else {
      //Search silinince tekrar tabloyu yenileyecek
      window.location.reload(true);
      setTempdata(tempData);
    }
  };

  //Tabloda sıralama işlemini yapar
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setTempdata(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setTempdata(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div className="container">
      {/* Search için true degeri gelirse Input gösterir */}
      {searchable && (
        <div class="d-flex justify-content-end">
          <Input
            id="search"
            name="search"
            placeholder="Enter search"
            type="text"
            value={search}
            onChange={onFilterData}
          />
        </div>
      )}

      <Table hover className="table mt-3" style={{backgroundColor:"aliceblue"}} >
        <thead style={{backgroundColor:"#b4cde3"}}>
          <tr>
            {column.map((item) => (
              <>
                <TableHeadItem item={item} sorting={sorting} />
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          {tempData.map((item) => (
            <>
              <TableRow item={item} column={column} />
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

//Tabloya gelen başlıkları doldurur ve sıralama on click ile tetiklenir
const TableHeadItem = ({ item, sorting }) => {
  return (
    <th onClick={() => sorting(item.value)}>
      {item.heading} <AiOutlineSortAscending size="30" color="black" />
    </th>
  );
};

//Tablo içeriğini doldurur
const TableRow = ({ key, item, column }) => (
  <tr>
    {column.map((columnItem, index) => {
      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split(".");
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
      }
      return <td>{item[columnItem.value]}</td>;
    })}
  </tr>
);
export default TableCompanent;
