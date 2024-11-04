import React from 'react';
import { Button, Card, Form, Alert } from 'react-bootstrap';

function UIKit() {
  return (
    <div className="container my-5">
      <h1 className="text-primary">UI Kit</h1>
      <hr />

      {/* Buttons */}
      <h3>Buttons</h3>
      <Button variant="primary" className="me-2">Primary Button</Button>
      <Button variant="secondary" className="me-2">Secondary Button</Button>
      <Button variant="success" className="me-2">Success Button</Button>

      {/* Alerts */}
      <h3 className="mt-4">Alerts</h3>
      <Alert variant="primary">This is a primary alert</Alert>
      <Alert variant="secondary">This is a secondary alert</Alert>

      {/* Cards */}
      <h3 className="mt-4">Cards</h3>
      <Card className="mb-3" bg="dark" text="light">
        <Card.Header>Card Header</Card.Header>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some example text to demonstrate the card component.</Card.Text>
        </Card.Body>
      </Card>

      {/* Forms */}
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
      </Form>
    </div>
  );
}

export default UIKit;