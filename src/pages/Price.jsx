import { Hero } from "../pages";
const Price = () => {
  return (
    <>
      <Hero pageName="Pricing Plan" subPara="Awsome Page Teaser Here" />
      <section className="price-plan padding-t padding-b">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div>
                <h3>Basic</h3>
                <p>Best for personal</p>
                <div className="price-tag">
                  <span>
                    <sub>$</sub>88<sub>p/mo</sub>
                  </span>
                </div>
                <div className="plan-features">
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      <span>1x Processing Power</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      <span>1x Processing Power</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      <span>1x Processing Power</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Price;
