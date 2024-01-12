const PriceList = ()=>{
  return(
    <>
      <div className="col-md-6 col-lg-4" data-aos="fade-up"
        data-aos-duration="1300">
        <div className="pricing-dtls">
          <div className="pricing-top">
            <div className="pricing-plan-name">
              {" "}
              <h3>Basic</h3>
              <p>Best for personal</p>
            </div>
            <div className="price-tag">
              <div>
                <sub>$</sub>
                <span>5.59</span>
                <sub>p/mo</sub>
              </div>
            </div>
            <div className="plan-features">
              <ul>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>1x Processing Power</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>1 Website</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  <span>1x Processing Power</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pricing-bottom">
            <button className="btn btn-primary">Purchase Now</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default PriceList;