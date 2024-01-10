import { Link } from "react-router-dom";
import { Logo, NavItems } from "../Navbar";
const Footer = () => {
  return (
    <>
      <aside className="subscribe">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <h3>Awesomeness begin here. Are you ready?</h3>
            </div>
            <div className="col-auto">
             <Link to="/our-team" className="btn btn-primary">let's do it</Link>
            </div>
          </div>
        </div>
      </aside>
      <footer className="padding-t">
        <div className="container">
          <div className="row">
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              className="col-md-4 "
            >
              <Link to="/">
                <img src={Logo} className=" footer_logo" />
              </Link>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="col-md-2"
            >
              <h4>Demo</h4>
              <ul>
                <li>
                  <Link to="/">Saas</Link>
                </li>
                <li>
                  <Link to="/"> Startup</Link>
                </li>
                <li>
                  <Link to="/"> Co-working</Link>
                </li>
                <li>
                  <Link to="/"> Agency</Link>
                </li>
                <li>
                  <Link to="/">Apps</Link>
                </li>
                <li>
                  <Link to="/"> Email Marketing</Link>
                </li>
                <li>
                  <Link to="/price"> Pricing Plan</Link>
                </li>
              </ul>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="col-md-2"
            >
              <h4>Pages</h4>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/our-teams"> Our Team</Link>
                </li>
                <li>
                  <Link to="/"> Our History</Link>
                </li>
                <li>
                  <Link to="/faq.html"> FAQs</Link>
                </li>
                <li>
                  <Link to="/"> News</Link>
                </li>
                <li>
                  <Link to="/"> Gallery</Link>
                </li>
                <li>
                  <Link to="/"> LoginAgency</Link>
                </li>
              </ul>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="col-md-4"
            >
              <h4>Newsletter</h4>
              <p>
                Signup for our newsletter to get the latest news, updates and
                special offers in your inbox.
              </p>
              <div className="search-box">
                <form className="d-flex align-items-center">
                  <input type="email" placeholder="Enter your email" />
                  <i className="fa-solid fa-arrow-right-long"></i>
                </form>

                <small> Your email is safe with us. We don't spam. </small>
              </div>
            </div>
          </div>
          <div className="copy-rights align-items-center row justify-content-between">
            <div className="col-sm-5">
              <p>
                © Copyright {new Date().getFullYear()} - Bluetec by Arif. Only
                for practice porpuse.
              </p>
            </div>
            <div className="col-sm-5 ">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-google-plus-g"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
