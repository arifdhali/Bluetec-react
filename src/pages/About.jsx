import {
  Hero,
  BannerImg,
  AboutImg2,
  TeamImg1,
  TeamImg2,
  TeamImg3,
  TeamImg4,
  OurTeams,
} from "../pages/index";
const About = () => {
  return (
    <>
      <Hero pageName="About Us" subPara="Awsome Page Teaser Here" />

      {/* what make us   */}
      <article className=" padding-b">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img src={BannerImg} clasName="img-fluid" />
            </div>
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3>What makes us different?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </p>
            </div>
          </div>
        </div>
      </article>
      <section className="our-team about-team  padding-b">
        <div className="container">
          <div className="section-top">
            <h3>Team Of Awesome</h3>
          </div>
          <div className="row gy-3 gy-md-4">
            <OurTeams
              memberImg={TeamImg1}
              memberName={"Fynley Wilkinson"}
              memberDesig=" Chief Creative Officer "
            />
            <OurTeams
              memberImg={TeamImg2}
              memberName={"Fynley Wilkinson"}
              memberDesig=" Chief Creative Officer "
            />
            <OurTeams
              memberImg={TeamImg3}
              memberName={"Fynley Wilkinson"}
              memberDesig=" Chief Creative Officer "
            />
            <OurTeams
              memberImg={TeamImg4}
              memberName={"Fynley Wilkinson"}
              memberDesig=" Chief Creative Officer "
            />
          </div>
        </div>
      </section>
      <article className=" padding-b">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3>What makes us different?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </p>
            </div>

            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img src={AboutImg2} className="img-fluid" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default About;
