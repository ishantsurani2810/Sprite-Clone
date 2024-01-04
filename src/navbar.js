import React from "react";
import { Link } from "react-router-dom";
// import { a, } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="maindiv">
        <div className="row p-0 m-0">
          <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11 maindiv ">
            <nav className="navbar navbar-expand-lg navbar-light justify-content-center div1 top-fixed">
              <Link className="navbar-brand" to="/ " id="logo">
                <img
                  src={"f_icone/spritelogo.png"}
                  style={{ height: "50px" }}
                />
              </Link>

              {/* <!-- <toggler button> --> */}

              <button
                className="navbar-toggler border-0 ml-auto dark"
                type="button"
                id="togbutton"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* <!-- <MENU> --> */}

              <div
                className="collapse navbar-collapse"
                id="collapsibleNavbar"
              >
                <ul
                  className="navbar-nav col-xl-7 col-lg-7 col-md-11 col-sm-11 col-11"
                  id="si"
                >
                  <li className="nav-item">
                    <Link style={{ textDecoration: "none" }}
                      className="nav-a"
                      to="produtpage"
                      data-toggle="tooltip"
                      title="PRODUCTS"
                    >
                      <span className="ps-button-label" >PRODUCTS</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      style={{ textDecoration: "none" }}
                      className="nav-a"
                      to="zerosugarpage"
                      data-toggle="tooltip"
                      title="SPRITE ZERO SUGAR"
                    >
                      <span className="ps-button-label">
                        SPRITE ZERO SUGAR
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      style={{ textDecoration: "none" }}
                      className="nav-a"
                      to="creatorpage"
                      data-toggle="tooltip"
                      title="THE CREATORS"
                    >
                      <span className="ps-button-label">THE CREATORS</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      style={{ textDecoration: "none" }}
                      className="nav-a"
                      to="/"
                      data-toggle="tooltip"
                      title="BUY NOW"
                    >
                      <span className="ps-button-label">BUY NOW</span>
                    </Link>
                  </li>
                </ul>

                {/* <!-- < nav icons> --> */}

                <ul className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mr-auto div2">
                  <li className="nav-item">
                    <Link to="/">
                      <i className="fa-brands fa-facebook"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">
                      <i className="fa-brands fa-spotify"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* <!-- <user icon> --> */}

          <div
            className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"
            style={{ marginTop: "30px" }}
          >
            <Link to="/loginpage" className="text-white">
              <i
                className="fa-solid fa-user use1"
                data-toggle="modal"
                data-target="/myModal"
                title="LOG IN"
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
