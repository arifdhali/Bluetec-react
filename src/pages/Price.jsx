import { Hero, PriceList } from "../pages";
const Price = () => {
  return (
    <>
      <Hero pageName="Pricing Plan" subPara="Awsome Page Teaser Here" />
      <section className="price-plan padding-t padding-b">
        <div className="container">
          <div className="row">
            <PriceList />
            <PriceList />
            <PriceList />
       
          </div>
        </div>
      </section>
    </>
  );
};
export default Price;
