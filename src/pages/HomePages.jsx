import { Container, Row, Col } from "react-bootstrap";

import HeroImage from "../assets/img/hero.png";
import Lc from "../assets/img/lc.png";
import Ra from "../assets/img/ra.png";
import Ih from "../assets//img/ih.png";
import Ae from "../assets//img/ae.png";

import { dataSwiper, product } from "../data/index";
import { useNavigate } from "react-router-dom";

import FaqComponen from "../components/FaqComponen";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function HomePages() {
  let navigate = useNavigate();

  const openRegisterLink = () => {
    window.open("https://dev.nikitagenerator.com/register/", "_blank");
  };

  const openStartGeneratorLink = () => {
    window.open("https://dev.nikitagenerator.com/", "_blank");
  };

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInDown animate__delay-1s">
                Creating <br /> <span>WEB-based system</span> <br />
                Quickly.
              </h1>
              <p className="mb-4 animate__animated animate__fadeInDown animate__delay-1s">
                a one of a kind solution to all your business needs. define your
                business problem. stock trackingg, POS, sales reporting,
                optimization, survey, etc
              </p>
              <button
                className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInDown animate__delay-1s"
                onClick={openRegisterLink}
              >
                Register
              </button>
              <button
                className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInDown animate__delay-1s"
                onClick={openStartGeneratorLink}
              >
                Start Generator
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="hero-img"
                className="animate__animated animate__fadeInDown"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <div>
            <h1 className="text-center fw-bold">
              WHY Nikita <span className="text-danger">Generator</span> ?{" "}
            </h1>
          </div>

          <div className="d-block">
            {/* start here */}
            <Row
              className="row-cols-1 row-cols-md-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className="col-md-6 why-card-control mb-4"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className="card-block text-center why-card">
                  <img src={Lc} alt="lowcode-img" className="why-img" />
                </div>
                <div className="why-card-hover text-center">
                  <span>Low Code</span>
                  <p>
                    Our no code, low maintenance platforms let you streamline
                    business processes, whether you’re an integration specialist
                    or a business analyst.
                  </p>
                  <a
                    href="/why-nikita-generator"
                    className="home-page-hover-effect-btn"
                  >
                    see a more detailed explanation
                  </a>
                </div>
              </div>
              <div
                className="col-md-6 why-card-control mb-4"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <div className="card-block text-center why-card">
                  <img src={Ra} alt="rest-api-img" className="why-img" />
                </div>
                <div className="why-card-hover text-center">
                  <span>Cloude Based App</span>
                  <p>
                    Make Rest API easily and quickly, can be consumed anywhere
                  </p>
                  <a
                    href="/why-nikita-generator"
                    className="home-page-hover-effect-btn"
                  >
                    see a more detailed explanation
                  </a>
                </div>
              </div>
              <div
                className="col-md-6 why-card-control mb-4"
                data-aos="flip-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <div className="card-block text-center why-card">
                  <img src={Ih} alt="integr-img" className="why-img" />
                </div>
                <div className="why-card-hover text-center">
                  <span>Easy to create and edit</span>
                  <p>
                    Nikita Generator has prepared dozens of components and
                    functions. Users only use it as needed
                  </p>
                  <a href="" className="home-page-hover-effect-btn">
                    see a more detailed explanation
                  </a>
                </div>
              </div>
              <div
                className="col-md-6 why-card-control mb-4"
                data-aos="flip-down"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <div className="card-block text-center why-card">
                  <img src={Ae} alt="loading-img" className="why-img" />
                </div>
                <div className="why-card-hover text-center">
                  <span>Customize business template</span>
                  <p>
                    Nikita generator can easily adapt the business framework and
                    work on it easily
                  </p>
                  <a
                    href="/why-nikita-generator"
                    className="home-page-hover-effect-btn"
                  >
                    see a more detailed explanation
                  </a>
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </div>
      <div className="product-page">
        <div className="product min-vh-100">
          <Container>
            <Row>
              <Col>
                <h1 className="fw-bold text-center">Our Product</h1>
                <p className="text-center">
                  Samplae System from Nikita generator
                </p>
              </Col>
            </Row>
            <Row>
              {product.map((product) => {
                return (
                  <Col key={product.id} lg={4} sm={6} md={4} className="mb-3">
                    <div
                      className="shadow rounded mb-2 ex"
                      style={{ height: "100%" }}
                    >
                      <img
                        src={product.Image}
                        alt="LOGO.com"
                        className="mb-5 rounded"
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Success Stories</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="loading"></img>
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      <FaqComponen />
    </div>
  );
}

export default HomePages;
