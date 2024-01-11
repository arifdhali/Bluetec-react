import { Hero, CareerPosts } from "../pages/index";
const Career = () => {
  return (
    <>
      <Hero pageName="Careers" subPara="Awsome Page Teaser Here" />

      <section className="career padding-b padding-t">
      <div className="container w-50">
        <CareerPosts />
        <CareerPosts />
        <CareerPosts />
      </div>
      </section>
    </>
  );
};

export default Career;
