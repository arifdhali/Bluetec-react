import "./Hero.css";
import innerBg from "../../../public/images/inner-bg.png";
const Hero = ({pageName,subPara}) => {
  return (
    <section className="banner-inner padding-t padding-b">
      <img src={innerBg} className="hero-bg" />
      <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
        <h1>{pageName}</h1>
        <p>{subPara}</p>
      </div>
    </section>
  );
};
export default Hero;
