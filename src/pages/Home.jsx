import BannerImg from "../../public/images/1.png";
import { ServiceList } from "../pages/index";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <section className="banner-area homepage padding-b padding-t">
        <div className="container">
          <div className="row content">
            <div className="col-md-5">
              <h4 data-aos="fade-up"  data-aos-delay="50"     data-aos-duration="1100">
                Whatever business you do
              </h4>
              <h1  data-aos="fade-up"  data-aos-delay="100" data-aos-duration="1400">
                bluetec is what your <span>business</span> need
              </h1>
              <p  data-aos="fade-up"   data-aos-delay="50"   data-aos-duration="1500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
              <a  data-aos="fade-up" className="btn btn-primary" data-aos-duration="1600">
                Learn more
              </a>
            </div>

            <div className="col-md-6 ">
              <img src={BannerImg}  data-aos="fade-left"  data-aos-duration="1300" />
            </div>
          </div>
        </div>
      </section>
      {/* OUR SERVICES  */}
      <section className="our-services padding-t padding-b ">
        <div className="container">
          <div className="section-top">
            <strong>Our Services</strong>
            <h2>How does it work?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="services-lists row padding-t gy-md-0 gy-5">
            <ServiceList
              title={"Web Design"}
              icon={"fa-brands fa-wordpress"}
              iconBg={`#017dfc`}
              desc={`
Website Design
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem. `}
            />
            <ServiceList
              title={"Email marketing"}
              icon={"fa-brands fa-telegram"}
               iconBg={`#292ba0`}
              desc={`
Email Marketing
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem. `}
            />
            <ServiceList
              title={"digital analytics"}
              icon={"fa-solid fa-magnifying-glass-chart"}
              iconBg={`#342a6d`}
              desc={`
Digital Analytics
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem. `}
            />
          </div>          
          <div className="padding-t">          
            <Link className="btn btn-primary mx-auto " to={"/services"}>More Features</Link>
          </div>

        </div>
      </section>
    </>
  );
};
export default Home;
