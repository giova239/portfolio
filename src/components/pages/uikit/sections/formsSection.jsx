import React from "react";
import { Form, Button } from "react-bootstrap";

function FormsSection() {
  return (
    <>
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
        <Button variant="primary" className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default FormsSection;
