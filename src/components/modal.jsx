import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modals(props) {
    //use youtube link
//   const [videoLink, setVideoLink] = useState('');

//   React.useEffect(() => {
//     setVideoLink(props.videoLink);
//   }, [props.videoLink]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Video Tutorial
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          width="100%"
          height="315"
          src={props.videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow='autoplay; encrypted-media'
          //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modals;
