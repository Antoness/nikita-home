import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";

import { semuaKelas } from "../data/index";
import Modals from "../components/modal";

const KelasPage = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedVideo, setSelectedVideo] = useState(""); // State to store the selected video link

  // Function to open the modal with a specific video link
  const handleShowModal = (videoLink) => {
    setSelectedVideo(videoLink);
    setShowModal(true);
  };

  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Tutorial</h1>
              <p className="text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((kelas) => {
              return (
                <Col key={kelas.id} lg={4} sm={6} md={4} className="mb-3">
                  <div
                    className="shadow rounded mb-2"
                    style={{
                      height: "100%",
                    }}
                  >
                    <img
                      src={kelas.image}
                      alt="unsplash.com"
                      className="mb-5 rounded-top"
                      style={{
                        height: "200px",
                        width: "100%",
                      }}
                    />
                    <h5 className="mb-5 px-3">{kelas.title}</h5>
                    <div className="ket d-flex justify-content-between align-item-center px-3 pb-3">
                      <button
                        className="btn btn-danger rounded-1"
                        onClick={() => handleShowModal(kelas.link)}
                      >
                        {kelas.buy}
                      </button>

                      <Modals
                        show={showModal}
                        onHide={() => setShowModal(false)}
                        videoLink={selectedVideo}
                      />
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default KelasPage;
