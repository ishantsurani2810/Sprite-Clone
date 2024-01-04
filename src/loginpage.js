function Login() {
  return (
    <>
      <body className="pb-0 mb-0"
        style={{
          background: "linear-gradient(to right, #52dcff, #ff4ee2)",
         
        }}
      >
        <div className="row ml-5">
          <div
            className="col-5 mt-5 ms-auto"
            style={{
              background: "white",
              borderRadius: "30px",
              height: "640px",
            }}
          >
            <center>
              <div className="col-8 justify-content-center mt-3">
                <h1>Registration Form</h1>
                <form style={{height:"500px"}}>
                  <div className="form-group">
                    <label for="name" style={{ color: "black" }}>
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="email" style={{ color: "black" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="password" style={{ color: "black" }}>
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="confirmPassword" style={{ color: "black" }}>
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="country" style={{ color: "black" }}>
                      Country
                    </label>
                    <select className="form-control" id="country">
                      <option selected disabled>
                        Select Country
                      </option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>India</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                    </select>
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="terms"
                      style={{ opacity: "1" }}
                    />
                    {/* <input type="checkbox" required /> */}
                    <label
                      className="form-check-label"
                      for="terms"
                      style={{ color: "black" }}
                    >
                      I agree to the terms and conditions
                    </label>
                  </div>
                  <button type="submit" className="btn btn-success mb-5">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-primary ml-2 mb-5">
                    Reset
                  </button>
                </form>
              </div>
            </center>
          </div>
          <div className="col-6 mt-3  me-auto">
            <img
              src={"./f_icone/sprite-hpg-herobottle.png"}
              style={{ height: "100%", width: "100%" }}
            ></img>
          </div>
        </div>
        <hr />
      </body >
    </>
  );
}
export default Login;
