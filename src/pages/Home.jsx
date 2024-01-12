import {
  ServiceList,
  TestimonialsList,
  BannerImg,
  DataSecurity,
  // company images
  CompanyImg1,
  CompanyImg2,
  CompanyImg3,
  CompanyImg4,
  CompanyImg5,
  CompanyImg6,
  CompanyImg7,
  CompanyImg8,
  CompanyImg9,
  CompanyImg10,
  // tesimonials
  testiImg1,
  testiImg2,
  testiImg3,
  testiImg4,
  testiImg5,
  testiImg6,
} from "../pages/index";
// swiper
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";
import { Link } from "react-router-dom";

// swiper slider

const Home = () => {
  return (
    <>
      <section className="banner-area homepage padding-b padding-t">
        <div className="container">
          <div className="row content">
            <div className="col-md-5">
              <h4
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1100"
              >
                Whatever business you do
              </h4>
              <h1
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1400"
              >
                bluetec is what your <span>business</span> need
              </h1>
              <p
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1500"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
              <Link to="/about"
                data-aos="fade-left"
                className="btn btn-primary"
                data-aos-duration="1600"
              >
                Learn more
              </Link>
            </div>

            <div className="col-md-6 ">
              <img
                src={BannerImg}
                data-aos="fade-right"
                data-aos-duration="1300"
              />
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
            <Link className="btn btn-primary mx-auto " to={"/services"}>
              More Features
            </Link>
          </div>
        </div>
      </section>

      {/*Data security  */}
      <article className="data-security ">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img src={DataSecurity} />
            </div>
            <div
              className="col-md-5"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2>
                {" "}
                Data security with <br /> <span>256-bit</span>encryption
              </h2>
              <p className="mt-4 mb-4">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. .{" "}
              </p>

              <Link className="btn btn-primary" to={"/services"}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Our client logo */}
      <article
        className="client-logo padding-t padding-b"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={6}
            speed={1000}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: true }}
          >
            <SwiperSlide>
              <img src={CompanyImg1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CompanyImg2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CompanyImg3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CompanyImg4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CompanyImg5} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CompanyImg6} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CompanyImg7} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CompanyImg8} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CompanyImg9} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={CompanyImg10} />
            </SwiperSlide>
          </Swiper>
        </div>
      </article>

      {/* Testimonials */}
      <article className="testimonials padding-t padding-b">
        <div className="container">
          <div className="section-top">
            <strong>Testimonial</strong>
            <h2>What They Says</h2>
          </div>
          <Swiper
            className="mt-md-5 mt-4 testimonials-cont"
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            slidesPerGroup={2}
            speed={1000}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
          >
            <SwiperSlide>
              <TestimonialsList
                des="   Great support, like i have never seen before. Thanks to the
                support team, they are very helpfull. This company provide
                customers great solution, that makes them best."
                posterImgs={testiImg1}
                posterOwner={`Michael, Apple`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsList
                des="   Great support, like i have never seen before. Thanks to the
                support team, they are very helpfull. This company provide
                customers great solution, that makes them best."
                posterImgs={testiImg2}
                posterOwner={`Thomas, Samsung`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsList
                des="   Great support, like i have never seen before. Thanks to the
                support team, they are very helpfull. This company provide
                customers great solution, that makes them best."
                posterImgs={testiImg3}
                posterOwner={`John, Pixar Studio`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsList
                des="   Great support, like i have never seen before. Thanks to the
                support team, they are very helpfull. This company provide
                customers great solution, that makes them best."
                posterImgs={testiImg4}
                posterOwner={`Sarah, Microsoft`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsList
                des="   Great support, like i have never seen before. Thanks to the
                support team, they are very helpfull. This company provide
                customers great solution, that makes them best."
                posterImgs={testiImg5}
                posterOwner={`Arif,Webgrity`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialsList
                des="   Great support, like i have never seen before. Thanks to the
                support team, they are very helpfull. This company provide
                customers great solution, that makes them best."
                posterImgs={testiImg6}
                posterOwner={`Arif, Developer`}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </article>
    </>
  );
};
export default Home;
