// src/Components/BlogModal.js
import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import { serverUrl } from "../../utils/apiHandler";

const BlogModal = ({ show, handleClose, blog, onSave }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (!show) {
      setTitle("");
      setSubtitle("");
      setImage(null);
      setImagePreview(null);
    }
  }, [show]);

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setSubtitle(blog.subtitle);
      setImage(blog.image || null);

      // If the blog has an image, set the preview URL based on the existing image URL
      if (blog.image) {
        setImagePreview(`${serverUrl}/uploads/${blog.image}`);
      } else {
        setImagePreview(null);
      }
    } else {
      // Reset state when adding a new blog
      setTitle("");
      setSubtitle("");
      setImage(null);
      setImagePreview(null);
    }
  }, [blog]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Create a preview URL for the selected image
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);

    if (image) {
      formData.append("image", image);
    } else {
      // Handle missing image for editing if no new image is uploaded
      formData.append("image", blog.image);
    }
    console.log("formData  => ", formData.get("image"));
    onSave(formData); // Ensure this sends the correct formData to the backend
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{blog ? "Edit Blog" : "Add Blog"}</Modal.Title>
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
              type="text"
              as="textarea"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </Form.Group>

          {/* Image Preview Section */}
          {imagePreview && (
            <div className="mb-3">
              <Form.Label>Image Preview</Form.Label>
              <Image src={imagePreview} alt="Selected Image" fluid thumbnail />
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

export default BlogModal;
