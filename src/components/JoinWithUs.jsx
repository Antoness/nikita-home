import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function JoinWithUs(props) {
  const { showModal, handleCloseModal } = props; // Menerima showModal dan handleCloseModal dari props

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Join With Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Isi formulir pendaftaran di sini */}
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            {/* Tambahkan lebih banyak field sesuai kebutuhan */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default JoinWithUs;
