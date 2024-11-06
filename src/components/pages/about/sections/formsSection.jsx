import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function FormsSection() {
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
    <>
      <h3 className="mt-4">Forms</h3>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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

        {/* Password Input */}
        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Floating>
            <Form.Control type="password" placeholder=" " required />
            <Form.Label>Password</Form.Label>
            <Form.Control.Feedback type="invalid">
              Please provide a password.
            </Form.Control.Feedback>
          </Form.Floating>
        </Form.Group>

        {/* Textarea */}
        <Form.Group controlId="formTextarea" className="mt-3">
          <Form.Floating>
            <Form.Control
              as="textarea"
              style={{ height: "100px" }}
              placeholder=" "
              required
            />
            <Form.Label>Textarea</Form.Label>
            <Form.Control.Feedback type="invalid">
              Please provide a valid response.
            </Form.Control.Feedback>
          </Form.Floating>
        </Form.Group>

        {/* Select Input */}
        <Form.Group controlId="formSelect" className="mt-3">
          <Form.Floating>
            <Form.Select required>
              <option value="">Choose...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Select>
            <Form.Label>Select</Form.Label>
            <Form.Control.Feedback type="invalid">
              Please select an option.
            </Form.Control.Feedback>
          </Form.Floating>
        </Form.Group>

        {/* File Input */}
        <Form.Group controlId="formFile" className="mt-3 position-relative">
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

        {/* Checkboxes */}
        <Form.Group controlId="formCheckbox" className="mt-3">
          <Form.Label>Checkbox Example:</Form.Label>
          <Form.Check type="checkbox" id="checkbox1" label="Checkbox 1" />
          <Form.Check
            type="checkbox"
            id="checkbox2"
            label="Checkbox 2 required"
            required
          />
          <Form.Check
            type="checkbox"
            id="checkbox3"
            label="Checkbox 3 disaled"
            disabled
          />
        </Form.Group>

        {/* Switches */}
        <Form.Group controlId="formSwitch" className="mt-3">
          <Form.Label>Switch Example:</Form.Label>
          <Form.Check type="switch" id="switch1" label="Switch 1" />
          <Form.Check
            type="switch"
            id="switch2"
            label="Switch 2 required"
            required
          />
          <Form.Check
            type="switch"
            id="switch3"
            label="Switch 3 disabled"
            disabled
          />
        </Form.Group>

        {/* Radios */}
        <Form.Group controlId="formRadio" className="mt-3">
          <Form.Label>Radio Example:</Form.Label>
          <Form.Check
            type="radio"
            label="Option 1"
            name="radioOptions"
            id="radio1"
            required
          />
          <Form.Check
            type="radio"
            label="Option 2"
            name="radioOptions"
            id="radio2"
            required
          />
          <Form.Check
            type="radio"
            label="Option 3"
            name="radioOptions"
            id="radio3"
            required
            disabled
          />
        </Form.Group>

        {/* Ranges */}
        <Form.Group controlId="formRange" className="mt-3">
          <Form.Label>Range Example</Form.Label>
          <Form.Range />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default FormsSection;
