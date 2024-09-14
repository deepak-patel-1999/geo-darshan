import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { serverUrl } from "../../utils/apiHandler";

const TutorialModal = ({ show, handleClose, tutorial, onSave }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  useEffect(() => {
    if (tutorial) {
      setTitle(tutorial.title);
      setSubtitle(tutorial.subtitle);
      setFile(tutorial.file || null);

      // If the tutorial has a file, set the preview URL
      if (tutorial.file) {
        setFilePreview(`${serverUrl}/uploads/${tutorial.file}`);
      } else {
        setFilePreview(null);
      }
    } else {
      // Reset state when adding a new tutorial
      setTitle("");
      setSubtitle("");
      setFile(null);
      setFilePreview(null);
    }
  }, [tutorial]);

  useEffect(() => {
    if (!show) {
      setTitle("");
      setSubtitle("");
      setFile(null);
      setFilePreview(null);
    }
  }, [show]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Create a preview URL for the selected file
    if (selectedFile) {
      setFilePreview(URL.createObjectURL(selectedFile));
    } else {
      setFilePreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);

    if (file) {
      formData.append("file", file);
    } else {
      // Handle missing file for editing if no new file is uploaded
      formData.append("file", tutorial.file);
    }

    onSave({ ...tutorial, title, subtitle, file }); // Ensure this sends the correct formData to the backend
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{tutorial ? "Edit Tutorial" : "Add Tutorial"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSubtitle">
            <Form.Label>Subtitle</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>File (PDF)</Form.Label>
            <Form.Control
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
            />
          </Form.Group>

          {/* File Preview Section */}
          {filePreview && (
            <div className="mb-3">
              <Form.Label className="me-3">File: </Form.Label>
              <a href={filePreview} target="_blank" rel="noopener noreferrer">
                View File
              </a>
            </div>
          )}

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TutorialModal;
