import React from 'react';
import { Button, Card, Form, Alert, Modal } from 'react-bootstrap';

function UIKit() {
  // Color values
  const COLORS = ['primary', 'secondary', 'accent1', 'accent2', 'accent3', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  // Spacers values
  const spacerValues = [
    { className: 'pt-1', multiplier: 0.25, pixels: '4px' },
    { className: 'pt-2', multiplier: 0.5, pixels: '8px' },
    { className: 'pt-3', multiplier: .75, pixels: '12px' },
    { className: 'pt-4', multiplier: 1, pixels: '16px' },
    { className: 'pt-5', multiplier: 1.5, pixels: '24px' },
    { className: 'pt-6', multiplier: 2, pixels: '32px' },
    { className: 'pt-7', multiplier: 2.5, pixels: '40px' },
    { className: 'pt-8', multiplier: 3, pixels: '48px' },
    { className: 'pt-9', multiplier: 3.5, pixels: '56px' },
    { className: 'pt-10', multiplier: 4, pixels: '64px' },
    { className: 'pt-11', multiplier: 4.5, pixels: '72px' },
    { className: 'pt-12', multiplier: 5, pixels: '80px' },
    { className: 'pt-13', multiplier: 6, pixels: '96px' },
    { className: 'pt-14', multiplier: 7.5, pixels: '120px' },
  ];

  // Modals setup
  const [showModal, setShowModal] = React.useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="container my-5">
      <h1 className="text-primary">UI Kit</h1>
      <hr />

      {/* Colors Section */}
      <h2>Colors</h2>
      <div className="d-flex flex-wrap">
        {COLORS.map((color) => (
          <div key={color} className={`bg-${color} text-white p-3 me-2 mb-2`}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </div>
        ))}
      </div>

      {/* Spacers Section */}
      <h2>Spacers</h2>

      {spacerValues.map(({ className, multiplier, pixels }) => (
        <div className="mb-2 row" key={className}>
          <div className="col col-4 d-flex align-items-center">
            <code className="m-0">{`.${className}`}</code>
            <span className="mx-2">→</span>
            <span>${`spacer * ${multiplier}`}</span>
            <span className="mx-2">→</span>
            <span>{pixels}</span>
          </div>
          <div className="col col-3 d-flex align-items-center justify-content-center">
            <span className={`bg-primary w-100 ${className}`}></span>
          </div>
        </div>
      ))}

      {/* Forms Section */}
      <h3 className="mt-4">Forms</h3>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1" className="mt-3">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" className="mt-3" type="submit">Submit</Button>
      </Form>

      {/* Buttons Section */}
      <h3>Buttons</h3>
      {COLORS.map((variant) => (
        <Button key={variant} variant={variant} className="me-2 mb-2">
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
        </Button>
      ))}

      {/* Modals Section */}
      <h3 className="mt-4">Modals</h3>
      <Button variant="primary" onClick={handleShow}>Launch demo modal</Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Alerts Section */}
      <h3 className="mt-4">Alerts</h3>
      {COLORS.map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert
        </Alert>
      ))}

      {/* Cards Section */}
      <h3 className="mt-4">Cards</h3>
      {['primary', 'secondary', 'success', 'danger', 'warning'].map((variant) => (
        <Card key={variant} className="mb-3" bg={variant === 'light' ? 'light' : 'dark'} text={variant === 'light' ? 'dark' : 'light'}>
          <Card.Header>Card Header</Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Some example text to demonstrate the {variant} card component.</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default UIKit;
