
const TestimonialsList = ({ des, posterImgs, posterOwner }) => {
  return (
    <>
      <div className="testimonials-item" data-aos="fade-left"
          data-aos-duration="800">
        <i className="fa-solid fa-quote-left"></i>
        <p>{des}</p>
        <div className="testi-poster-dtls">
          <img className="poster-img" src={posterImgs} />
          <span>{posterOwner}</span>
        </div>
      </div>
    </>
  );
};

export default TestimonialsList;
