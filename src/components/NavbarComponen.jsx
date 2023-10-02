import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import JoinWithUs from "../components/JoinWithUs";
import nikilogo from "../assets/img/niki-logo.png";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

function NavbarComponen() {
  const [changeColor, setChangeColor] = useState(false);
  // const [showModal, setShowModal] = useState(false); // State untuk modal

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });

    // Modal function
  // const handleShowModal = () => {
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

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
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={nikilogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Nikita <span className="text-danger">Generator</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            {/* modal  */}
            {/* <div className="text-center">
              <button className="btn btn-outline-danger rounded-1" onClick={handleShowModal}>Join With us</button>
            </div> */}
            <div>
              {/* ... Bagian lain dari navbar ... */}
              <div className="text-center">
                {/* Ketika tombol diklik, panggil fungsi untuk membuka WhatsApp */}
                <button
                  className="btn btn-outline-danger rounded-1"
                  onClick={openWhatsApp}
                >
                  Join With Us
                </button>
              </div>
              {/* ... Bagian lain dari navbar ... */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Kirim state showModal sebagai prop ke JoinWhitUs */}
      {/* <JoinWithUs showModal={showModal} handleCloseModal={handleCloseModal}  /> */}
    </div>
  );
}

export default NavbarComponen;
