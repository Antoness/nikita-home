import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import YouTube from "react-youtube";

function Modals(props) {
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.headers}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <YouTube
          videoId={props.videolink} 
          opts={{
            width: "100%",
            height: "315",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modals;
