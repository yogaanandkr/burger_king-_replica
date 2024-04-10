import "./poster.css";
function Poster() {
  return (
    <>
      <div className="all">
        <div className="content">
          <div className="left">
            <h1>Start your</h1>
            <h1>BK® order.</h1>
            <button className="btn btn-danger">Order pickup</button>
            <br /> <br />
            <button className="btn btn-light btn-outline-danger">
              Order delivery
            </button>
          </div>

          <div className="right">
            <img
              src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/ebf010cdf5b1d00f1906481669f067a4e83409eb-800x450.gif?w=900&q=90&fit=max&auto=format"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Poster;
