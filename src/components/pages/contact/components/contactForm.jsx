import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {/* Name Input */}
      <Form.Group controlId="formName" className="mt-3">
        <Form.Floating>
          <Form.Control type="text" placeholder=" " required />
          <Form.Label>Name</Form.Label>
          <Form.Control.Feedback type="invalid">
            Please provide your name.
          </Form.Control.Feedback>
        </Form.Floating>
      </Form.Group>

      {/* Surname Input */}
      <Form.Group controlId="formSurname" className="mt-3">
        <Form.Floating>
          <Form.Control type="text" placeholder=" " required />
          <Form.Label>Surname</Form.Label>
          <Form.Control.Feedback type="invalid">
            Please provide your surname.
          </Form.Control.Feedback>
        </Form.Floating>
      </Form.Group>

      {/* Email Input */}
      <Form.Group controlId="formEmail" className="mt-3">
        <Form.Floating>
          <Form.Control type="email" placeholder=" " required />
          <Form.Label>Email</Form.Label>
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Floating>
      </Form.Group>

      {/* Phone Input */}
      <Form.Group controlId="formPhone" className="mt-3">
        <Form.Floating>
          <Form.Control
            type="tel"
            placeholder=" "
            required
            pattern="[0-9]{10,15}"
          />
          <Form.Label>Phone</Form.Label>
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Floating>
      </Form.Group>

      {/* Reason for Contact Select */}
      <Form.Group controlId="formReason" className="mt-3">
        <Form.Floating>
          <Form.Select required>
            <option value="">Choose a reason...</option>
            <option value="inquiry">General Inquiry</option>
            <option value="feedback">Feedback</option>
            <option value="support">Support</option>
          </Form.Select>
          <Form.Label>Reason for Contact</Form.Label>
          <Form.Control.Feedback type="invalid">
            Please select a reason.
          </Form.Control.Feedback>
        </Form.Floating>
      </Form.Group>

      {/* Message Textarea */}
      <Form.Group controlId="formMessage" className="mt-3">
        <Form.Floating>
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            placeholder=" "
            required
          />
          <Form.Label>Message</Form.Label>
          <Form.Control.Feedback type="invalid">
            Please enter your message.
          </Form.Control.Feedback>
        </Form.Floating>
      </Form.Group>

      {/* Optional File Upload */}
      <Form.Group controlId="formFile" className="mt-3">
        <Form.Label>Attach File (optional)</Form.Label>
        <div className="custom-file-input">
          <input type="file" id="fileInput" className="file-input" />
          <label htmlFor="fileInput" className="file-input-label">
            Choose a file...
          </label>
        </div>
      </Form.Group>

      {/* Additional Options */}
      <Form.Group controlId="formOptions" className="mt-3">
        <Form.Check
          type="checkbox"
          id="checkboxUpdates"
          label="Receive updates"
        />
        <Form.Check
          type="switch"
          id="switchNotifications"
          label="Enable notifications"
        />
      </Form.Group>

      {/* Submit Button */}
      <Button variant="primary" className="mt-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
