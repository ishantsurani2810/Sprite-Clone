import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
// import { a } from "react-router-dom";
function Zeros() {
  return (
    <>
      {/* <Route> */}
      {/* // <!-- <part 1 > --> */}
      <div className="container-fluid p-0 justify-content-center">
        <div className="imgzero">
          <p className="col-xl-4 col-lg-4 col-md-6 col-sm-3 col-6 hello">
            GET RIGHT TO REFRESHING <br />
            <button className="btn3">FIND IT NEAR YOU</button>
          </p>
        </div>
      </div>
      {/* // <!-- < part 2> --> */}
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 mt-5 ml-5">
            <p className="text-white">When Heat Happens, Stay Cool</p>
          </div>
          <div
            className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-5"
            style={{ marginTop: "53px" }}
          >
            <button className="btn4">WATCH NOW</button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11">
            <video
              controls
              style={{ width: "100%", height: "500px" }}
              poster={"f_icone/sprite-zero-sugar-12.png"}
            >
              <source
                src={"f_icone/Sprite Zero Sugar - Train Station.mp4"}
                type={"video/mp4"}
              />
            </video>
          </div>
        </div>

        {/* <!-- < part 3> --> */}

        <div className="row">
          <div className="col-6 ml-5 mt-5">
            <p className="text-white" style={{ fontSize: "50px" }}>
              Refresh Your Social Feed
            </p>
          </div>
          <div className="col-5 mt-5 izero d-flex justify-content-end">
            <Link to="#">
              <img src={"f_icone/zero fb.png"} />
            </Link>
            <Link to="#">
              <img src={"f_icone/zeroinsta.png"} />
            </Link>
            <Link to="#">
              <img src={"f_icone/zerotube.png"} />
            </Link>
            <Link to="#">
              <img
                src={"f_icone/zerotwit1.png"}
                style={{ fontSize: "10px" }}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* </Route> */}
    </>
  );
}
export default Zeros;
