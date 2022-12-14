import React from "react";
import { useState } from "react";
import { Table, Input } from "reactstrap";

const TableCompanent = ({ data, column, searchable }) => {
  const [search, setSearch] = useState("");
  // const filteredData = data.filter((item) =>
  //   item
  //     .toString()
  //     .toLocaleLowerCase("TR")
  //     .includes(search.toLocaleLowerCase("TR"))
  // );

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
            onChange={(e) => setSearch(e.target.value)}
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
          {data.map((item, index, key) => (
            <TableRow key={key} item={item} column={column} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
const TableHeadItem = ({ key, item }) => <th key={key}>{item.heading}</th>;
const TableRow = ({ key, item, column }) => (
  <tr key={key}>
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
