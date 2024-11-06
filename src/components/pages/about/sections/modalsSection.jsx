import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalsSection() {
  const [showBasic, setShowBasic] = useState(false);
  const [showCentered, setShowCentered] = useState(false);
  const [showScrollable, setShowScrollable] = useState(false);
  const [showLarge, setShowLarge] = useState(false);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const handleCloseBasic = () => setShowBasic(false);
  const handleShowBasic = () => setShowBasic(true);

  const handleCloseCentered = () => setShowCentered(false);
  const handleShowCentered = () => setShowCentered(true);

  const handleCloseScrollable = () => setShowScrollable(false);
  const handleShowScrollable = () => setShowScrollable(true);

  const handleCloseLarge = () => setShowLarge(false);
  const handleShowLarge = () => setShowLarge(true);

  const handleCloseFullScreen = () => setShowFullScreen(false);
  const handleShowFullScreen = () => setShowFullScreen(true);

  const handleCloseRight = () => setShowRight(false);
  const handleShowRight = () => setShowRight(true);

  return (
    <div>
      <h3 className="mt-4">Modals</h3>

      {/* Basic Modal */}
      <Button variant="primary" onClick={handleShowBasic} className="me-2">
        Launch Basic Modal
      </Button>
      <Modal show={showBasic} onHide={handleCloseBasic}>
        <Modal.Header closeButton>
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Basic modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseBasic}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseBasic}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Centered Modal */}
      <Button variant="success" onClick={handleShowCentered} className="me-2">
        Launch Centered Modal
      </Button>
      <Modal show={showCentered} onHide={handleCloseCentered} centered>
        <Modal.Header closeButton>
          <Modal.Title>Centered Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Centered modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCentered}>
            Close
          </Button>
          <Button variant="success" onClick={handleCloseCentered}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Scrollable Modal */}
      <Button variant="info" onClick={handleShowScrollable} className="me-2">
        Launch Scrollable Modal
      </Button>
      <Modal show={showScrollable} onHide={handleCloseScrollable} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Scrollable Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Array(20)
            .fill("This is scrollable modal content. ")
            .map((text, index) => (
              <p key={index}>{text}</p>
            ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseScrollable}>
            Close
          </Button>
          <Button variant="info" onClick={handleCloseScrollable}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Large Modal */}
      <Button variant="warning" onClick={handleShowLarge} className="me-2">
        Launch Large Modal
      </Button>
      <Modal show={showLarge} onHide={handleCloseLarge} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Large Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Large modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLarge}>
            Close
          </Button>
          <Button variant="warning" onClick={handleCloseLarge}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Full-Screen Modal */}
      <Button variant="danger" onClick={handleShowFullScreen} className="me-2">
        Launch Full-Screen Modal
      </Button>
      <Modal show={showFullScreen} onHide={handleCloseFullScreen} fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>Full-Screen Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Full-screen modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFullScreen}>
            Close
          </Button>
          <Button variant="danger" onClick={handleCloseFullScreen}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Right-Aligned Modal */}
      <Button variant="dark" onClick={handleShowRight} className="me-2">
        Launch Right-Aligned Modal
      </Button>
      <Modal show={showRight} onHide={handleCloseRight} className="modal-right">
        <Modal.Header closeButton>
          <Modal.Title>Right-Aligned Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Right-aligned modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRight}>
            Close
          </Button>
          <Button variant="dark" onClick={handleCloseRight}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalsSection;
