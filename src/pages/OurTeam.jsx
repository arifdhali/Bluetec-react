import { Hero, TeamImg1,TeamImg2,TeamImg3,TeamImg4,TeamImg5,TeamImg6,TeamImg7,TeamImg8, OurTeams } from "../pages/index";

const OurTeam = () => {
  return (
    <>
      <Hero pageName="Our Team" subPara="Awsome Page Teaser Here" />
      <section className="our-team padding-t padding-b">
        <div className="container">
          <div className="row gy-3 gy-md-4">
            <OurTeams memberImg={TeamImg1} memberName={'Fynley Wilkinson'} memberDesig=" Chief Creative Officer " />
            <OurTeams memberImg={TeamImg2} memberName={'Fynley Wilkinson'} memberDesig=" Chief Creative Officer " />
            <OurTeams memberImg={TeamImg3} memberName={'Fynley Wilkinson'} memberDesig=" Chief Creative Officer " />
            <OurTeams memberImg={TeamImg4} memberName={'Fynley Wilkinson'} memberDesig=" Chief Creative Officer " />
            <OurTeams memberImg={TeamImg5} memberName={'Fynley Wilkinson'} memberDesig=" Chief Creative Officer " />
            <OurTeams memberImg={TeamImg6} memberName={'Fynley Wilkinson'} memberDesig=" Chief Creative Officer " />
            <OurTeams memberImg={TeamImg7} memberName={'Fynley Wilkinson'} memberDesig=" Chief Creative Officer " />
            <OurTeams memberImg={TeamImg8} memberName={'Fynley Wilkinson'} memberDesig=" Chief Creative Officer " />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
