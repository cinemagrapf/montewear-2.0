import '../../styles/page-styles/contacts/contact-form.scss';
import SideImage from '../../assets/images/streetwear-anime-poster.png';
const ContactForm = () => {
  return (
    <div className="form-container mx-auto ">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="contact-wrapper">
            <div className="row g-0">
              <div className="col-md-5 mx-auto my-auto">
                <div className="contact-form h-100">
                  <h3 className="contact-heading">Chat with our team</h3>
                  <p className="contact-description">
                    Have questions about our latest collections, need help with sizing, or want to
                    inquire about custom orders? We're here to help make your shopping experience
                    seamless.
                  </p>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name*(required)"
                      id="fullName"
                      required></input>
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address*(required)"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required></input>
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number (optional)"
                      id="phone"
                      name="phone"
                      autoComplete="tel"></input>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Order Number (if applicable)"
                      id="orderNumber"
                      name="orderNumber"></input>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      id="message"
                      name="message"
                      rows="4"></textarea>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-custom">
                      Get in touch
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 my-3">
                <img
                  src={SideImage}
                  alt="Contact us"
                  className="img-fluid h-100 w-100 side-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
