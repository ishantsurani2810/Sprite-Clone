import { Link, Route } from "react-router-dom";

function Home() {
  return (
    <>
      {/*<-- <Part 1> --> */}
      {/* <Route> */}
        <div className="container-fluid" id="wrappar">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
              <img
                className="ing"
                src={"f_icone/sprite-hpg-herobottle.png"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 div4">
              <h1>
                INSTANTLY
                <br />
                GET TO AHHHH
              </h1>
              <img
                src={"f_icone/headline-mobile-3 2.png"}
                style={{ width: "100%", height: "100px" }}
              />
              <br />
              <div className="div5">
                <Link className="nav-link" to="#">
                  <span className="ps-button-label">EXPLOR NOW</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- <part-2> --> */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col1">
              <video
                controls
                autoplay
                muted
                style={{ width: "100%" }}
                poster={"f_icone/new-sprite-post.png"}
              >
                <source
                  src={"f_icone/New Bottle. Same Sprite.mp4"}
                  type={"video/mp4"}
                />
              </video>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col2">
              <p>New Drip. Same Sip.</p>
              <h2>
                Anthony Edwards and Trae Young take center court alongside
                Sprite's new clear bottle to show that it might be a new
                generation, but the game is the same.
              </h2>
              <Link className="nav-link" to="#" id="but">
                <span className="ps-button-label">SHOP NOW</span>
              </Link>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5" id="cont">
              <p>Now Made With Clear Plastic To Help This Bottle Be Re-Made.</p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-0 ml-3">
              <img
                src={"f_icone/all-clear-from-here.png"}
                style={{ height: "100% ", width: "100%" }}
              />
            </div>
          </div>
        </div>
      {/* </Route> */}
    </>
  );
}
export default Home;
