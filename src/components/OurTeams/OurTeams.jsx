const OurTeams = ({ memberImg, memberName, memberDesig }) => {
  return (
    <>
      <div className="col-md-3 team-item"  data-aos="fade-up"
        data-aos-duration="1000">
        <div className="member-photo">
          <img src={memberImg} />
          <ul className="team-social">
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
        <div className="member-info text-center mt-3">
          <h4>{memberName}</h4>
          <p> {memberDesig}</p>
        </div>
      </div>
    </>
  );
};
export default OurTeams;
