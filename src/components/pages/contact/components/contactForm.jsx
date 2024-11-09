import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileSizeMB = file.size / 1000000;
      const validExtensions = ["image/jpeg", "image/png", "application/pdf"];
      if (fileSizeMB > 2.5) {
        event.target.value = "";
        setFileName("");
        setFileError("File size should not exceed 2.5MB");
      } else if (!validExtensions.includes(file.type)) {
        event.target.value = "";
        setFileName("");
        setFileError("Only PDF, JPEG, and PNG files are allowed");
      } else {
        setFileName(file.name);
        setFileError(""); // Clear error if the file is valid
      }
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {/* Intro Text */}
      <p className="mb-4">
        If you want to get in contact with me, please fill out the form below.
        I’ll get back to you as soon as possible.
      </p>

      {/* Disclaimer for required fields */}
      <p className="fs-12 text-end">* required fields</p>

      <Row>
        <Col md={6}>
          {/* Name Input */}
          <Form.Group controlId="formName" className="mt-4">
            <Form.Floating>
              <Form.Control type="text" placeholder=" " required />
              <Form.Label>Name</Form.Label>
              <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback>
            </Form.Floating>
          </Form.Group>
        </Col>
        <Col md={6}>
          {/* Surname Input */}
          <Form.Group controlId="formSurname" className="mt-4">
            <Form.Floating>
              <Form.Control type="text" placeholder=" " required />
              <Form.Label>Surname</Form.Label>
              <Form.Control.Feedback type="invalid">
                Please provide your surname.
              </Form.Control.Feedback>
            </Form.Floating>
          </Form.Group>
        </Col>
      </Row>

      {/* Email Input */}
      <Form.Group controlId="formEmail" className="mt-4">
        <Form.Floating>
          <Form.Control type="email" placeholder=" " required />
          <Form.Label>Email</Form.Label>
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Floating>
      </Form.Group>

      {/* Phone Input */}
      <Form.Group controlId="formPhone" className="mt-4">
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
      <Form.Group controlId="formReason" className="mt-6">
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
      <Form.Group controlId="formMessage" className="mt-6">
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

      {/* Optional File Input */}
      <Form.Group controlId="formFile" className="mt-6 position-relative">
        <Form.Label>File Input</Form.Label>
        <div
          className={`custom-file-input ${
            fileError ? "custom-file-input--error" : ""
          }`}
        >
          <input
            type="file"
            id="fileInput"
            className="file-input"
            accept="image/png, image/jpeg, application/pdf"
            onChange={handleFileChange}
            required
          />
          <label htmlFor="fileInput" className="file-input-label">
            {fileName ? fileName : "Choose a file..."}
          </label>
          <div className="position-absolute me-4 end-0 bottom-auto fs-12">
            <small>Max 2.5MB | JPG, PNG, PDF</small>
          </div>
        </div>
        {/* Show error message if file validation fails */}
        {fileError && <p className="text-danger">{fileError}</p>}
      </Form.Group>

      {/* Mandatory checkbox */}
      <Form.Group controlId="formOptions" className="mt-6">
        <Form.Check
          type="checkbox"
          id="checkboxMandatory"
          label="Just a random mandatory checkbox"
          required
        />
      </Form.Group>

      {/* Buttons */}
      <Row className="mt-6">
        <Col md={6}>
          <Button type="reset" variant="outline-danger" className="w-100 mb-2">
            Reset
          </Button>
        </Col>
        <Col md={6}>
          <Button type="submit" variant="success" className="w-100">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ContactForm;
