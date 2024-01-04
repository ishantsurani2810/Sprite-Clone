import { Link } from "react-router-dom"
import "./Footer.css";
function Footer() {
  return (
    // <!-- <footer> -->
    <>
      <div className="container-fluid justify-content-md-center pt-0 mt-0"
        id="footer1"
        style={{ backgroundColor: "rgb(0, 150, 57)" }}>
        <div className="row justify-content-center justify-content-sm-center">
          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 flogo">
            <Link to="Homepage">
              <img src={"f_icone/spritelogo.png"} />
            </Link>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 list">
            <p>CONNECT WITH US</p>
            <ul>
              <li>
                <Link to="#">
                  <img src={"f_icone/facebook.png"} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={"f_icone/instagram.png"} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={"f_icone/spotify.png"} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={"f_icone/twitter.png"} />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={"f_icone/youtube.png"} style={{ fontSize: "10px" }} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 pro"> <ul>
              <li>PRODUCTS</li>
              <li>
                <Link to="#">SPRITE</Link> </li>
              <li>
                <Link to="#">SPRITE ZERO SUGAR</Link>
              </li>
              <li>
                <Link to="#">SPRITE LYMONADE</Link>
              </li>
              <li>
                <Link to="#">SPRITE CHERRY</Link>
              </li>
              <li>
                <Link to="#">SPRITE TROPICAL MIX</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row" id="im">
          <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
            <h6>
              © 2023 <Link to="#">The Coca-Cola Company.</Link> All Rights reserved
            </h6>
            <ul className="ul1">
              <li style={{ borderLeft: "0px" }}>
                <Link to="#">Support Center</Link>
              </li>
              <li>
                <Link to="#">Terms</Link>
              </li>
              <li>
                <Link to="#">Privacy</Link>
              </li>
              <li>
                <Link to="#">Do Not Sell or Share My Personal Information</Link>
              </li>
              <li>
                <Link to="#">Sitemap</Link>
              </li>
              <li>
                <Link to="#">sip & scan®</Link>
              </li>
              <li>
                <Link to="#">Rules</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
