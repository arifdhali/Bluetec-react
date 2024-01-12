import { Hero } from "../pages/index";
const Contact = () => {
  return (
    <>
      <Hero pageName="Contact Us" subPara="Awsome Page Teaser Here" />
      <section className="contact-us  padding-b">
        <div className="contact-cntnr">
          <h3 className="mb-4">Do you have any question?</h3>
          <form className="form">
            <div className="form-field">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
              <small>error message</small>
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="Email" placeholder="Your email" />
              <small>error message</small>
            </div>
            <div className="form-field">
              <label>Phone</label>
              <input type="tel" placeholder="Your phone" />
              <small>error message</small>
            </div>
            <div className="form-field">
              <label>Message</label>
              <textarea placeholder="Your message"></textarea>
            </div>
            <div className="form-field mt-3">
              <input
                type="submit"
                className="btn btn-primary"
                value="Submit Request"
              />
            </div>
          </form>

          <div className="row contact-info padding-t">
            <div className="col-md-6" data-aos-duration="1000" data-aos="fade-up" data-aos-delay="300">
              <address class="info-list">
                <h3>US Office</h3>
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                  08 W 36th St, New York, NY 10001
                </span>
                <span>
                  <i class="fa fa-phone fa-lg"></i>+1 333 9296
                </span>
                <span>
                  <i class="fa-solid fa-envelope"></i>
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </span>
                <span>
                  <i class="fa-solid fa-file-pdf"></i>
                  <a href="#">Download Brochure</a>
                </span>
              </address>
            </div>
            <div className="col-md-6" data-aos-duration="1300" data-aos="fade-up" data-aos-delay="500">
              <address class="info-list au-office">
                <h3>AU Office</h3>
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                  08 W 36th St, New York, NY 10001
                </span>
                <span>
                  <i class="fa fa-phone fa-lg"></i>+1 333 9296
                </span>
                <span>
                  <i class="fa-solid fa-envelope"></i>
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </span>
                <span>
                  <i class="fa-solid fa-file-pdf"></i>
                  <a href="#">Download Brochure</a>
                </span>
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
