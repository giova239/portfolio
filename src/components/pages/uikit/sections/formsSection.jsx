import React from "react";
import { Button, Form } from "react-bootstrap";

function FormsSection() {
  return (
    <>
      <h3 className="mt-4">Forms</h3>
      <Form>
        {/* Email Input */}
        <Form.Group controlId="formEmail">
          <Form.Label>Email Input example</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        {/* Password Input */}
        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password Input example</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/* Textarea */}
        <Form.Group controlId="formTextarea" className="mt-3">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        {/* Select Input */}
        <Form.Group controlId="formSelect" className="mt-3">
          <Form.Label>Select Example</Form.Label>
          <Form.Select>
            <option>Select an option...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Form.Select>
        </Form.Group>

        {/* File Input */}
        <Form.Group controlId="formFile" className="mt-3">
          <Form.Label>File input</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        {/* Checkboxes */}
        <Form.Group controlId="formCheckbox" className="mt-3">
          <Form.Label>Checkbox Example:</Form.Label>
          <Form.Check type="checkbox" label="Checbox 1" />
          <Form.Check type="checkbox" label="Checkbox 2" />
          <Form.Check type="checkbox" label="Checkbox 3" />
        </Form.Group>

        {/* Switches */}
        <Form.Group controlId="formSwitch" className="mt-3">
          <Form.Label>Switch Example:</Form.Label>
          <Form.Check type="switch" label="Switch 1" />
          <Form.Check type="switch" label="Switch 2" />
          <Form.Check type="switch" label="Switch 3" />
        </Form.Group>

        {/* Radios */}
        <Form.Group controlId="formRadio" className="mt-3">
          <Form.Label>Radio Example:</Form.Label>
          <Form.Check
            type="radio"
            label="Option 1"
            name="radioOptions"
            id="radio1"
          />
          <Form.Check
            type="radio"
            label="Option 2"
            name="radioOptions"
            id="radio2"
          />
          <Form.Check
            type="radio"
            label="Option 3"
            name="radioOptions"
            id="radio3"
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
