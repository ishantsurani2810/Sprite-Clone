import {Link} from "react-router-dom"
function Product() {
  return (
    // <!-- <content> -->
    <div class="back">
      <div class="container">
        <div class="row justify-content-center" style={{ textalign: "center" }}>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-5 pdiv1">
            <p>Explore Sprite</p>
          </div>
        </div>

        {/* <!-- <button> --> */}

        <div class="row justify-content-center" style={{ textalign: "center" }}>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 mr-4 mt-4">
            <button class="btn1">Explore Now</button>
          </div>
        </div>

        {/* <!-- < main content> --> */}

        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 mt-5 pdiv2">
            <Link to="#">
              <img className="img-scale" src={"f_icone/sprite-1.png"} />
            </Link>
            <span>
              <p class="tex">SPRITE®</p>
              <button class="btn2">EXPLOR NOW</button>
            </span>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 mt-5 pdiv2">
            <Link to="#">
              <img className="img-scale" src={"f_icone/sprite-2.png"} />
            </Link>
            <p class="tex">SPRITE® ZERO SUGAR</p>
            <button class="btn2">EXPLOR NOW</button>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 mt-5 pdiv2">
            <Link to="#">
              <img className="img-scale" src={"f_icone/sprite-3.png"} />
            </Link>
            <p class="tex">SPRITE® CHERRY</p>
            <button class="btn2">EXPLOR NOW</button>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 mt-5 pdiv2">
            <Link to="#">
              <img className="img-scale" src={"f_icone/sprite-4.png"} />
            </Link>
            <p class="tex">SPRITE® TROPICAL MIX</p>
            <button class="btn2">EXPLOR NOW</button>
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 mt-5 pdiv2">
            <Link to="#">
              <img className="img-scale" src={"f_icone/sprite-5.png"} />
            </Link>
            <p class="tex">SPRITE® LYMONADE</p>
          </div>
        </div>
        <div class="row justify-content-center mt-5 pb-5">
          <button class="btn2">EXPLOR NOW</button>
        </div>
      </div>
    </div>
  );
}
export default Product;