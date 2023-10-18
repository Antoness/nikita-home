import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


import nikilogo from "../assets/img/niki-logo.png";

function FooterComponen() {

  const openWhatsApp = () => {
    // Nomor WhatsApp yang ingin Anda hubungi
    const phoneNumber = "6281932035261";

    // Pesan yang ingin Anda kirimkan
    const message =
      "Saya ingin menggunakan Nikita Generator, bisakah Anda membantu saya?";

    // Membuat tautan WhatsApp dengan nomor dan pesan
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Buka tautan WhatsApp di jendela baru
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-conten-between">
          <Col lg="5">
            <div className="d-flex align-items-center">
              <img src={nikilogo} alt="logo.png" className="logo-image" />
              <div className="divider"></div>
              <h3 className="fw-bold ml-2 my-auto">Nikita Generator</h3>
            </div>
            <p className="desc">
            This website is designed for the community
            </p>
            <div className="no mb-1 mt-4" onClick={openWhatsApp}>
              <Link className="text-decoration-none" >
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+628-193-203-5261</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">support@nikitagenerator.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="/kelas">Tutorial</Link>
            <Link to="syaratketen">Why Nikita Generator</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
            <div className="subscribe">
              <input type="text" placeholder="Subsscribe..." />
              <button className="btn btn-danger rounded-end rounded-0">
                Subscribe
              </button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Nikita Generator</span> , All Right
              Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterComponen;
