import { useEffect, useState } from "react";
import React from "react";
import { Stack } from "react-bootstrap";

const Pagination = ({ pages, setCurrentPage, perPage }) => {
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }
  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <div className="clearfix">
      <Stack direction="horizontal">
        <div className="hint-text col-6">
          Showing <b>{perPage}</b> out of <b>{pages}</b> entries
        </div>
        <div
          className="col-6"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <ul className="pagination">
            <li
              className={
                currentButton === 1 ? "page-item disabled" : "page-item"
              }
            >
              <a
                href="#!"
                className="page-link"
                onClick={() =>
                  setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
                }
              >
                Previous
              </a>
            </li>
            {numOfPages.map((page, index) => {
              return (
                <li
                  key={index}
                  className={
                    currentButton === page ? "page-item active" : "page-item"
                  }
                >
                  <a
                    href="#!"
                    className="page-link"
                    onClick={() => setCurrentButton(page)}
                  >
                    {page}{" "}
                  </a>
                </li>
              );
            })}
            <li
              className={
                currentButton === numOfPages.length
                  ? "page-item disabled"
                  : "page-item"
              }
            >
              <a
                href="#!"
                className="page-link"
                onClick={() =>
                  setCurrentButton((prev) =>
                    prev === numOfPages.length ? prev : prev + 1
                  )
                }
              >
                Next
              </a>
            </li>
          </ul>
        </div>
      </Stack>
    </div>
  );
};
export default Pagination;
