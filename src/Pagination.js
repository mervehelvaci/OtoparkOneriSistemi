import { useState } from "react";

const Pagination = () => {
  const pages = 5;
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }
  const [currentButton, setCurrentButton] = useState(1);
  return (
    <div className="clearfix">
      <div className="hinttext">
        Showing <b>5</b> out of <b>25</b> entries
      </div>
      <ul class="pagination">
        <li
          className={currentButton === 1 ? "page-item disabled" : "page-item"}
        >
          <a
            href="#"
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
              class={currentButton === page ? "page-item-active" : "page-item"}
            >
              <a
                href="#"
                class="page-link"
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
            href="#"
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
  );
};
export default Pagination;
