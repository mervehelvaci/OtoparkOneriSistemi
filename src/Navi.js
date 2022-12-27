import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
function Navi() {
  const navigate = useNavigate();

  //Çıkış yap
  const logOut = () => {
    localStorage.setItem("name", "");
    localStorage.setItem("username", "");
    navigate("/");
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light, justify-content-center">
        <a className="navbar-brand" href="http://localhost:3000/home">
          Ana Sayfa
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item, justify-content-end">
              <FaUserCircle
                className="d-flex justify-content-end "
                size="50"
                color="blue"
                onClick={logOut}
              />
            </li>
            <li className="nav-item dropdown,justify-content-end">
              <a
                className="nav-link dropdown-toggle"
                href=""
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                User
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Log Out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    // <div class="d-flex justify-content-between">
    //   <h2 class="align-items-center">Ana Sayfa</h2>
    //   <FaUserCircle
    //     class="d-flex justify-content-end "
    //     size="50"
    //     color="blue"
    //     onClick={logOut}
    //   />
    //   <h4>Çıkış Yap</h4>
    // </div>
  );
}
export default Navi;
