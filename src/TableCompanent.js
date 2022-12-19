import React from "react";
import { useState } from "react";
import { Table, Input } from "reactstrap";

const TableCompanent = ({ data, column, searchable }) => {
  const [search, setSearch] = useState("");
  const [tempData, setTempdata] = useState(data);
  const [tableFilter, setTableFilter] = useState([]);

  // const filteredData = data.filter((item) =>
  //   item
  //     .toString()
  //     .toLocaleLowerCase("TR")
  //     .includes(search.toLocaleLowerCase("TR"))
  // );

  // const onFilterData = (value) =>{
  //   setTempdata(data.filter(item => item.name.contains(value)))
  // }

  const onFilterData = (e) => {
    if (e.target.value !== "") {
      setSearch(e.target.value);
      const filterTable = data.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else {
      setSearch(e.target.value);
      setTempdata([...tempData]);
    }
  };

  return (
    <div>
      {searchable && (
        <div>
          <Input
            id="search"
            name="search"
            placeholder="Enter search"
            type="text"
            value={search}
            onChange={onFilterData}
            //onChange={(e) => onFilterData(e.target.value)}
          />
        </div>
      )}
      <Table className="table">
        <thead>
          <tr>
            {column.map((item, index, key) => (
              <TableHeadItem key={key} item={item} />
            ))}
          </tr>
        </thead>
        <tbody>
          {search.lenght > 0
            ? tableFilter.map((item, index) => (
                <TableRow  item={item} column={column} />
              ))
            : tempData.map((item, index) => (
                <TableRow  item={item} column={column} />
              ))}
          {/* {tempData.map((item, index, key) => (
            <TableRow key={key} item={item} column={column} />
          ))} */}
        </tbody>
      </Table>
    </div>
  );
};
const TableHeadItem = ({ key, item }) => <th key={key}>{item.heading}</th>;
const TableRow = ({  item, column }) => (
  <tr >
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
