const ServiceList = ({ title, desc, icon, iconBg }) => {
  return (
    <div className="service-list col-md-6 col-lg-4" data-aos="fade-up"  data-aos-duration="1400" >
      <i className={`${icon}`} style={{ background: `${iconBg ? iconBg : "gray"}` }}></i>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceList;
